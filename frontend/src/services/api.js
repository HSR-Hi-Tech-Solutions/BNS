/**
 * ==============================================================================
 * BNS Contact Service — Serverless Google Sheets Integration
 * ==============================================================================
 *
 * This client sends enquiry submissions directly to a Google Apps Script Web App
 * which appends the submission as a new row in the client's designated Google Sheet.
 *
 * Architecture:
 *   Visitor → Contact Form → Google Apps Script Web App → Google Sheets
 *
 * Implementation Note:
 *   We send 'text/plain;charset=utf-8' with JSON.stringify() to avoid triggering
 *   a CORS preflight (OPTIONS) request, which Google Apps Script Web Apps do not
 *   support. Apps Script executes doPost(e), appends the row, and responds with
 *   a 302 redirect to script.googleusercontent.com which returns CORS-compliant JSON.
 * ==============================================================================
 */

const getEndpointUrl = () => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return (
      import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL ||
      import.meta.env.VITE_CONTACT_FORM_ENDPOINT ||
      ''
    );
  }
  if (typeof process !== 'undefined' && process.env) {
    return (
      process.env.VITE_GOOGLE_SHEETS_SCRIPT_URL ||
      process.env.VITE_CONTACT_FORM_ENDPOINT ||
      ''
    );
  }
  return '';
};

export const contactService = {
  /**
   * Submit enquiry data to the Google Apps Script Web App
   * @param {Object} data - Contact form fields
   * @returns {Promise<Object>} Response object indicating success/failure
   */
  submit: async (data) => {
    const endpointUrl = getEndpointUrl();

    if (
      !endpointUrl ||
      endpointUrl.trim() === '' ||
      endpointUrl.includes('your_google_apps_script_web_app_url_here')
    ) {
      throw new Error(
        'Google Sheets integration is not configured. Please set VITE_GOOGLE_SHEETS_SCRIPT_URL in your environment.'
      );
    }

    try {
      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          `Enquiry submission failed (HTTP ${response.status}). Please try again later.`
        );
      }

      const result = await response.json();

      if (!result || result.success === false) {
        throw new Error(
          result?.message ||
            'Failed to submit enquiry. Please check your information and try again.'
        );
      }

      return result;
    } catch (err) {
      // Re-throw known validation or server error messages
      if (err.name === 'TypeError' && err.message?.includes('fetch')) {
        throw new Error(
          'Network or connectivity issue. Please check your internet connection and try again.',
          { cause: err }
        );
      }
      throw err;
    }
  },

  /**
   * Diagnostic check for endpoint accessibility
   * @returns {Promise<Object>} Status object
   */
  checkStatus: async () => {
    const endpointUrl = getEndpointUrl();

    if (!endpointUrl) {
      return { configured: false, message: 'Endpoint URL is not defined.' };
    }
    try {
      const response = await fetch(endpointUrl, { method: 'GET' });
      if (!response.ok) {
        return { configured: true, ok: false, status: response.status };
      }
      const data = await response.json();
      return { configured: true, ok: true, data };
    } catch (err) {
      return { configured: true, ok: false, error: err.message };
    }
  },
};

export default contactService;
