import rateLimit from 'express-rate-limit';
import { contactSchema } from '../validators/contactValidator.js';
import Contact from '../models/Contact.js';
import crypto from 'crypto';
import mongoose from 'mongoose';

// Stricter rate limit for contact form
export const contactRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 submissions per IP per hour
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
 */
export async function submitContact(req, res, next) {
  try {
    // Validate with Joi (strips unknown fields)
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

    // Hash IP for spam tracking (don't store raw IP)
    const rawIp =
      req.ip ||
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      '';
    const ipHash = rawIp
      ? crypto.createHash('sha256').update(rawIp).digest('hex')
      : '';

    // Persist to MongoDB if connected and available
    if (mongoose.connection.readyState === 1) {
      const contact = new Contact({
        ...value,
        ipHash,
      });
      await contact.save();
    } else {
      // Log to server console in dev or when DB is not connected
      console.info('[BNS Contact] New enquiry (DB not connected / buffer skipped):', {
        name: value.name,
        email: value.email,
        service: value.service,
        timestamp: new Date().toISOString(),
      });
    }

    return res.status(201).json({
      success: true,
      message:
        'Your enquiry has been received. We will respond within 2 business days.',
    });
  } catch (err) {
    next(err);
  }
}
