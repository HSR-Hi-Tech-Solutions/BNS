import nodemailer from 'nodemailer';

let customTransporter = null;

/**
 * Escape HTML special characters to prevent HTML injection in emails
 */
export function escapeHtml(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Checks if SMTP settings are configured in environment variables
 */
export function isEmailConfigured() {
  if (customTransporter) return true;
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  );
}

/**
 * Set custom transporter (useful for mocking in tests)
 */
export function setTransporter(transporter) {
  customTransporter = transporter;
}

/**
 * Reset transporter back to default
 */
export function resetTransporter() {
  customTransporter = null;
}

/**
 * Returns active Nodemailer transporter instance
 */
export function getTransporter() {
  if (customTransporter) {
    return customTransporter;
  }

  const port = parseInt(process.env.SMTP_PORT, 10) || 587;
  const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: isSecure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

/**
 * Send notification email for a newly received customer enquiry
 *
 * @param {Object} enquiry - Contact document or object
 * @returns {Promise<Object>} Nodemailer send info
 */
export async function sendContactNotification(enquiry) {
  if (!isEmailConfigured()) {
    throw new Error('SMTP email configuration is missing or incomplete.');
  }

  const recipient =
    process.env.NOTIFICATION_EMAIL || 'contact@bengalnewsservice.com';
  const sender =
    process.env.SMTP_FROM ||
    `"BNS Website Notifications" <${process.env.SMTP_USER || 'no-reply@bengalnewsservice.com'}>`;

  const safeName = escapeHtml(enquiry.name || 'Anonymous');
  const safeEmail = escapeHtml(enquiry.email || 'N/A');
  const safePhone = escapeHtml(enquiry.phone || 'Not provided');
  const safeOrg = escapeHtml(enquiry.organization || 'Not provided');
  const safeService = escapeHtml(enquiry.service || 'General Enquiry');
  const safeMessage = escapeHtml(enquiry.message || '').replace(/\n/g, '<br/>');
  const refId = enquiry._id ? String(enquiry._id) : 'N/A';
  const receivedAt = enquiry.createdAt
    ? new Date(enquiry.createdAt).toUTCString()
    : new Date().toUTCString();

  const subject = `[BNS Enquiry] New message from ${enquiry.name} (${safeService})`;

  const textBody = `
========================================
NEW WEBSITE ENQUIRY — BENGAL NEWS SERVICE
========================================

Reference ID: ${refId}
Received At:  ${receivedAt}

CONTACT DETAILS
----------------------------------------
Full Name:     ${enquiry.name}
Email Address: ${enquiry.email}
Phone Number:  ${enquiry.phone || 'Not provided'}
Organization:  ${enquiry.organization || 'Not provided'}
Service:       ${enquiry.service || 'General Enquiry'}

MESSAGE
----------------------------------------
${enquiry.message}

========================================
Reply directly to this email to respond to the customer (${enquiry.email}).
`;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Enquiry</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #263247;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
    <thead>
      <tr>
        <th style="background-color: #0B1120; padding: 20px 24px; text-align: left; border-bottom: 3px solid #D4AF55;">
          <h1 style="margin: 0; font-size: 18px; color: #FAF9F6; font-family: Georgia, serif; font-weight: normal;">
            Bengal News Service
          </h1>
          <p style="margin: 4px 0 0; font-size: 11px; color: #D4AF55; text-transform: uppercase; letter-spacing: 1px;">
            PR &amp; Consultancy Pvt. Ltd. — New Website Enquiry
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 24px;">
          <p style="margin-top: 0; font-size: 14px; color: #586477;">
            A new enquiry has been submitted through the BNS website contact form.
          </p>

          <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 13px; border-collapse: collapse; margin-bottom: 20px; background-color: #fafbfc; border: 1px solid #edf2f7; border-radius: 4px;">
            <tr>
              <td style="width: 30%; font-weight: bold; color: #0B1120; border-bottom: 1px solid #edf2f7;">Reference ID</td>
              <td style="border-bottom: 1px solid #edf2f7; font-family: monospace; color: #64748b;">${refId}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #0B1120; border-bottom: 1px solid #edf2f7;">Full Name</td>
              <td style="border-bottom: 1px solid #edf2f7; color: #1e293b;">${safeName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #0B1120; border-bottom: 1px solid #edf2f7;">Email</td>
              <td style="border-bottom: 1px solid #edf2f7;"><a href="mailto:${safeEmail}" style="color: #8E252B; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #0B1120; border-bottom: 1px solid #edf2f7;">Phone</td>
              <td style="border-bottom: 1px solid #edf2f7;">${safePhone}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #0B1120; border-bottom: 1px solid #edf2f7;">Organization</td>
              <td style="border-bottom: 1px solid #edf2f7;">${safeOrg}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #0B1120; border-bottom: 1px solid #edf2f7;">Service Area</td>
              <td style="border-bottom: 1px solid #edf2f7; font-weight: bold; color: #0B1120;">${safeService}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #0B1120;">Submitted At</td>
              <td style="color: #64748b;">${receivedAt}</td>
            </tr>
          </table>

          <div style="background-color: #ffffff; border-left: 4px solid #8E252B; padding: 12px 16px; margin-bottom: 20px; border-top: 1px solid #edf2f7; border-right: 1px solid #edf2f7; border-bottom: 1px solid #edf2f7; border-radius: 0 4px 4px 0;">
            <p style="margin: 0 0 6px; font-size: 11px; text-transform: uppercase; font-weight: bold; color: #8E252B; letter-spacing: 0.5px;">Message Content</p>
            <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="font-size: 12px; color: #64748b; margin-bottom: 0;">
            <strong>Reply Action:</strong> You can reply directly to this email to reach the sender at <a href="mailto:${safeEmail}" style="color: #8E252B;">${safeEmail}</a>.
          </p>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td style="background-color: #f8fafc; padding: 12px 24px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0;">
          Bengal News Service PR &amp; Consultancy Pvt. Ltd. &bull; CIN: U73100WB2024PTC275987
        </td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
`;

  const transporter = getTransporter();

  const mailOptions = {
    from: sender,
    to: recipient,
    replyTo: enquiry.email,
    subject,
    text: textBody,
    html: htmlBody,
  };

  const info = await transporter.sendMail(mailOptions);
  console.info('[BNS Email] Notification dispatched successfully for enquiry ref:', refId);
  return info;
}
