import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validatePhone,
  validateContactForm,
  sanitizeInput,
} from '../src/utils/validation.js';

test('validateEmail - accepts valid emails', () => {
  assert.equal(validateEmail('test@example.com'), true);
  assert.equal(validateEmail('user.name+tag@sub.domain.co.in'), true);
});

test('validateEmail - rejects invalid emails', () => {
  assert.equal(validateEmail('not-an-email'), false);
  assert.equal(validateEmail('missing@tld'), false);
  assert.equal(validateEmail('@missinguser.com'), false);
  assert.equal(validateEmail(''), false);
});

test('validatePhone - accepts valid phone formats and empty/optional', () => {
  assert.equal(validatePhone(''), true);
  assert.equal(validatePhone('+91 9876543210'), true);
  assert.equal(validatePhone('033-22345678'), true);
  assert.equal(validatePhone('9876543210'), true);
});

test('validatePhone - rejects invalid phone numbers', () => {
  assert.equal(validatePhone('abc123'), false);
  assert.equal(validatePhone('123'), false); // too short (<7)
});

test('validateContactForm - rejects empty/incomplete form', () => {
  const errors = validateContactForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  assert.ok(errors.name, 'Name should have validation error');
  assert.ok(errors.email, 'Email should have validation error');
  assert.ok(errors.message, 'Message should have validation error');
});

test('validateContactForm - validates short name or message', () => {
  const errors = validateContactForm({
    name: 'A',
    email: 'valid@example.com',
    message: 'Short',
  });

  assert.ok(errors.name, 'Short name should error');
  assert.ok(errors.message, 'Short message should error');
  assert.equal(errors.email, undefined);
});

test('validateContactForm - passes with valid data', () => {
  const errors = validateContactForm({
    name: 'Subhasish Mukherjee',
    email: 'contact@bengalnewsservice.com',
    phone: '+91 9876543210',
    message: 'We would like to enquire about your corporate PR services for our organisation.',
  });

  assert.equal(Object.keys(errors).length, 0);
});

test('sanitizeInput - trims whitespace and limits length', () => {
  assert.equal(sanitizeInput('   hello world   '), 'hello world');
  assert.equal(sanitizeInput(null), '');
  assert.equal(sanitizeInput(123), '');
  const longStr = 'a'.repeat(3000);
  assert.equal(sanitizeInput(longStr).length, 2000);
});
