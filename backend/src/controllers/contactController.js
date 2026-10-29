import rateLimit from 'express-rate-limit';
import { contactSchema } from '../validators/contactValidator.js';
import Contact from '../models/Contact.js';
import crypto from 'crypto';
import mongoose from 'mongoose';
import { isEmailConfigured, sendContactNotification } from '../services/emailService.js';

// Stricter rate limit for contact form (max 5 per IP per hour in production)
export const contactRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: process.env.NODE_ENV === 'test' ? 1000 : 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many enquiries submitted. Please wait before trying again.',
  },
});

/**
 * POST /api/v1/contact
 * Submit a contact/enquiry form
 *
 * Flow:
 * 1. Validate payload with Joi schema.
 * 2. Verify MongoDB connectivity. Fail with 503 if unavailable (never falsely report success).
 * 3. Idempotency check: prevent duplicate submissions within 2 minutes.
 * 4. Save enquiry document to MongoDB.
 * 5. Attempt email notification to NOTIFICATION_EMAIL if SMTP is configured.
 * 6. Record notification status ('sent' or 'failed') on document; do not fail HTTP 201 if DB saved.
 */
export async function submitContact(req, res, next) {
  try {
    // 1. Server-side validation with Joi (strips unknown fields)
    const { error, value } = contactSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const fieldErrors = {};
      error.details.forEach((detail) => {
        const field = detail.path[0];
        fieldErrors[field] = detail.message;
      });
      return res.status(422).json({
        success: false,
        message: 'Validation failed. Please check the highlighted fields.',
        errors: fieldErrors,
      });
    }

    // 2. Ensure database persistence is available
    if (mongoose.connection.readyState !== 1) {
      console.warn('[BNS Contact] MongoDB not ready; persistence failed.');
      return res.status(503).json({
        success: false,
        message:
          'Our enquiry system is temporarily unavailable. Please try again shortly or email us directly at contact@bengalnewsservice.com.',
      });
    }

    // Hash client IP for abuse detection (no raw IP stored)
    const rawIp =
      req.ip ||
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      '';
    const ipHash = rawIp
      ? crypto.createHash('sha256').update(rawIp).digest('hex')
      : '';

    // 3. Avoid duplicate enquiry records (within 2-minute window)
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
    const existingDuplicate = await Contact.findOne({
      email: value.email.toLowerCase(),
      message: value.message,
      createdAt: { $gte: twoMinutesAgo },
    });

    if (existingDuplicate) {
      return res.status(200).json({
        success: true,
        message:
          'Your enquiry has already been received. We will respond within 2 business days.',
      });
    }

    // 4. Persist to MongoDB
    const contact = new Contact({
      ...value,
      ipHash,
      notificationStatus: isEmailConfigured() ? 'pending' : 'skipped',
    });

    await contact.save();

    // 5. Attempt email notification only after enquiry has been saved
    if (isEmailConfigured()) {
      try {
        await sendContactNotification(contact);
        contact.notificationStatus = 'sent';
        await contact.save();
      } catch (emailErr) {
        // Safe logging: log error message without exposing credentials or user message body
        console.error(
          `[BNS Contact] Email notification failed for enquiry ref: ${contact._id}. Reason: ${emailErr.message}`
        );
        contact.notificationStatus = 'failed';
        contact.notificationError = String(emailErr.message || '').slice(0, 500);
        await contact.save();
      }
    } else {
      console.info(
        `[BNS Contact] Enquiry ref ${contact._id} saved. SMTP not configured; email notification skipped.`
      );
    }

    // 6. Return success to client
    return res.status(201).json({
      success: true,
      message:
        'Your enquiry has been received. We will respond within 2 business days.',
    });
  } catch (err) {
    next(err);
  }
}
