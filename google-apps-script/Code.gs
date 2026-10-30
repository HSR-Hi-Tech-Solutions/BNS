/**
 * ==============================================================================
 * Bengal News Service (BNS) — Google Apps Script Contact Form Web App
 * ==============================================================================
 *
 * This script runs as a Google Apps Script Web App bound to a Google Sheet.
 * It receives contact form enquiries from the static BNS website, validates the
 * submitted payload server-side, and securely appends a new row to the sheet
 * with concurrency lock handling.
 *
 * Features:
 *  - Concurrency safety with LockService (prevents race conditions)
 *  - Auto-initializes sheet headers and styling if sheet is blank
 *  - Validates required fields: Name, Email, Message
 *  - Regex format verification for Email and Phone
 *  - Strips/sanitizes dangerous input and limits lengths
 *  - Returns CORS-friendly JSON TextOutput
 *  - Handles both JSON body (e.postData.contents) and URL-encoded parameters
 *  - doGet health-check endpoint for connectivity verification
 * ==============================================================================
 */

// Configuration constants
var CONFIG = {
  SHEET_NAME: 'Enquiries', // Tab name in Google Sheets
  MAX_NAME_LENGTH: 120,
  MIN_NAME_LENGTH: 2,
  MAX_EMAIL_LENGTH: 254,
  MAX_PHONE_LENGTH: 25,
  MAX_ORG_LENGTH: 200,
  MAX_SERVICE_LENGTH: 100,
  MAX_MESSAGE_LENGTH: 2000,
  MIN_MESSAGE_LENGTH: 10,
  LOCK_TIMEOUT_MS: 10000, // 10 seconds
};

// Column definitions in the Google Sheet
var HEADERS = [
  'Submission Date',
  'Full Name',
  'Email',
  'Phone Number',
  'Organization',
  'Service / Subject',
  'Message',
  'Status'
];

/**
 * Handle HTTP GET requests (Health check / Verification endpoint)
 * Allows testing the Web App URL directly in any web browser.
 */
function doGet(e) {
  var response = {
    success: true,
    status: 'active',
    service: 'Bengal News Service (BNS) Google Sheets Integration',
    timestamp: new Date().toISOString()
  };
  return createJsonResponse(response);
}

/**
 * Handle HTTP POST requests (Contact form submissions)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  var hasLock = false;

  try {
    // Acquire script lock to safely handle concurrent submissions
    hasLock = lock.tryLock(CONFIG.LOCK_TIMEOUT_MS);
    if (!hasLock) {
      return createJsonResponse({
        success: false,
        message: 'Server is currently processing other requests. Please try again in a few moments.'
      });
    }

    // 1. Parse submitted data (supports JSON text/plain payload or URL-encoded form data)
    var data = parseRequestData(e);
    if (!data) {
      return createJsonResponse({
        success: false,
        message: 'No submission data provided or invalid payload.'
      });
    }

    // 2. Validate input fields
    var validationResult = validatePayload(data);
    if (!validationResult.valid) {
      return createJsonResponse({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }

    // 3. Open or initialize target Google Sheet
    var sheet = getOrCreateSheet();

    // 4. Format timestamp (IST and UTC)
    var now = new Date();
    var formattedDate = Utilities.formatDate(now, 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss') + ' IST';

    // 5. Build row array matching defined column headers
    var rowData = [
      formattedDate,
      validationResult.data.name,
      validationResult.data.email,
      validationResult.data.phone || 'N/A',
      validationResult.data.organization || 'N/A',
      validationResult.data.service || validationResult.data.subject || 'General Enquiry',
      validationResult.data.message,
      'New'
    ];

    // 6. Append row to sheet (each submission creates a distinct new row)
    sheet.appendRow(rowData);

    // Auto-fit column widths on first few submissions if needed
    if (sheet.getLastRow() <= 5) {
      try {
        for (var i = 1; i <= HEADERS.length; i++) {
          sheet.autoResizeColumn(i);
        }
      } catch (resizeErr) {
        // Non-critical, ignore resize errors
      }
    }

    return createJsonResponse({
      success: true,
      message: 'Your enquiry has been received. We will respond within 2 business days.',
      ref: 'BNS-' + now.getTime().toString(36).toUpperCase()
    });

  } catch (error) {
    return createJsonResponse({
      success: false,
      message: 'An internal error occurred while recording your submission: ' + error.message
    });
  } finally {
    if (hasLock) {
      lock.releaseLock();
    }
  }
}

/**
 * Parse data from incoming event object
 */
function parseRequestData(e) {
  if (!e) return null;

  // Case A: JSON body in e.postData.contents (sent via fetch with text/plain)
  if (e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (err) {
      // Not valid JSON, continue to parameter check
    }
  }

  // Case B: URL-encoded / Form-data parameters in e.parameter
  if (e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter;
  }

  // Case C: e.postData.contents as query string
  if (e.postData && typeof e.postData.contents === 'string' && e.postData.contents.indexOf('=') !== -1) {
    var params = {};
    var pairs = e.postData.contents.split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return params;
  }

  return null;
}

/**
 * Validate and sanitize submission payload
 */
function validatePayload(raw) {
  var errors = {};

  var name = sanitize(raw.name);
  var email = sanitize(raw.email);
  var phone = sanitize(raw.phone);
  var organization = sanitize(raw.organization || raw.organisation);
  var service = sanitize(raw.service || raw.subject);
  var message = sanitize(raw.message);

  // Name validation
  if (!name || name.length < CONFIG.MIN_NAME_LENGTH) {
    errors.name = 'Full Name is required (minimum ' + CONFIG.MIN_NAME_LENGTH + ' characters).';
  } else if (name.length > CONFIG.MAX_NAME_LENGTH) {
    errors.name = 'Full Name must not exceed ' + CONFIG.MAX_NAME_LENGTH + ' characters.';
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'A valid email address is required.';
  } else if (email.length > CONFIG.MAX_EMAIL_LENGTH) {
    errors.email = 'Email address is too long.';
  }

  // Phone validation (optional)
  if (phone) {
    var phoneRegex = /^[+]?[\d\s\-().]{7,25}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = 'Please provide a valid phone number (7-25 digits).';
    }
  }

  // Organization validation (optional)
  if (organization && organization.length > CONFIG.MAX_ORG_LENGTH) {
    errors.organization = 'Organization name must not exceed ' + CONFIG.MAX_ORG_LENGTH + ' characters.';
  }

  // Service / Subject validation (optional)
  if (service && service.length > CONFIG.MAX_SERVICE_LENGTH) {
    errors.service = 'Service/Subject must not exceed ' + CONFIG.MAX_SERVICE_LENGTH + ' characters.';
  }

  // Message validation
  if (!message || message.length < CONFIG.MIN_MESSAGE_LENGTH) {
    errors.message = 'Message is required (minimum ' + CONFIG.MIN_MESSAGE_LENGTH + ' characters).';
  } else if (message.length > CONFIG.MAX_MESSAGE_LENGTH) {
    errors.message = 'Message must not exceed ' + CONFIG.MAX_MESSAGE_LENGTH + ' characters.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      valid: false,
      message: 'Validation failed: ' + Object.values(errors).join(' '),
      errors: errors
    };
  }

  return {
    valid: true,
    data: {
      name: name,
      email: email.toLowerCase(),
      phone: phone || '',
      organization: organization || '',
      service: service || '',
      subject: service || '',
      message: message
    }
  };
}

/**
 * Sanitize string input
 */
function sanitize(val) {
  if (val === null || val === undefined) return '';
  return String(val).trim();
}

/**
 * Retrieve target Google Sheet, creating and styling header row if empty
 */
function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }

  // Check if sheet has headers
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);

    // Format header row with BNS brand palette
    var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#0B1120'); // BNS Deep Navy
    headerRange.setFontColor('#FAF9F6');  // BNS Off-white
    headerRange.setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

/**
 * Build JSON TextOutput with appropriate MIME type
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Helper function for direct Apps Script editor testing
 * Run this function from the Apps Script editor to verify sheet write permissions.
 */
function testSubmission() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Subhasish Mukherjee',
        email: 'contact@bengalnewsservice.com',
        phone: '+91 9876543210',
        organization: 'Bengal News Service Corporate',
        service: 'Public Relations & Corporate Communications',
        message: 'This is an automated test submission to verify Google Sheets integration.'
      })
    }
  };
  var result = doPost(mockEvent);
  Logger.log(result.getContent());
}
