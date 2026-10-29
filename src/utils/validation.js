/**
 * Contact form validation utilities
 */

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  if (!phone) return true; // optional field
  const re = /^[+]?[\d\s\-().]{7,20}$/;
  return re.test(phone);
};

export const validateContactForm = (values) => {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name (minimum 2 characters).';
  }

  if (!values.email || !validateEmail(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone && !validatePhone(values.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  if (values.message && values.message.length > 2000) {
    errors.message = 'Message must not exceed 2000 characters.';
  }

  return errors;
};

export const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, 2000);
};
