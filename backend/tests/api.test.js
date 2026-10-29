import test, { before, after, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import mongoose from 'mongoose';
import Contact from '../src/models/Contact.js';
import { setTransporter, resetTransporter } from '../src/services/emailService.js';

process.env.NODE_ENV = 'test';
process.env.ALLOWED_ORIGINS = 'http://localhost:5173,http://127.0.0.1';

const { default: app } = await import('../src/app.js');

let server;
let baseUrl;
let originalReadyStateDescriptor;
let originalSave;
let originalFindOne;

before((_, done) => {
  server = http.createServer(app);
  server.listen(0, '127.0.0.1', () => {
    const address = server.address();
    baseUrl = `http://127.0.0.1:${address.port}`;
    done();
  });
});

after((_, done) => {
  server.close(done);
});

beforeEach(() => {
  originalReadyStateDescriptor = Object.getOwnPropertyDescriptor(
    mongoose.connection,
    'readyState'
  );
  originalSave = Contact.prototype.save;
  originalFindOne = Contact.findOne;
});

afterEach(() => {
  resetTransporter();
  if (originalReadyStateDescriptor) {
    Object.defineProperty(
      mongoose.connection,
      'readyState',
      originalReadyStateDescriptor
    );
  }
  Contact.prototype.save = originalSave;
  Contact.findOne = originalFindOne;
});

test('GET /api/v1/health - returns 200 and healthy status', async () => {
  const res = await fetch(`${baseUrl}/api/v1/health`);
  assert.equal(res.status, 200);

  const data = await res.json();
  assert.equal(data.success, true);
  assert.equal(data.service, 'BNS API');
  assert.equal(data.status, 'ok');
  assert.ok(data.timestamp);
});

test('GET /api/v1/health - includes security headers', async () => {
  const res = await fetch(`${baseUrl}/api/v1/health`);
  assert.ok(
    res.headers.get('x-content-type-options'),
    'Should have X-Content-Type-Options'
  );
  assert.ok(
    res.headers.get('content-security-policy'),
    'Should have CSP'
  );
});

test('POST /api/v1/contact - rejects empty payload with 422', async () => {
  const res = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });

  assert.equal(res.status, 422);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.errors.name, 'Should flag missing name');
  assert.ok(data.errors.email, 'Should flag missing email');
  assert.ok(data.errors.message, 'Should flag missing message');
});

test('POST /api/v1/contact - rejects invalid email with 422', async () => {
  const res = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Ujjwal Roy',
      email: 'not-an-email',
      message: 'This is a test message with more than 10 characters.',
    }),
  });

  assert.equal(res.status, 422);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.errors.email);
});

test('POST /api/v1/contact - database failure returns 503 and does not falsely report success', async () => {
  // Ensure DB readyState is 0 (disconnected)
  Object.defineProperty(mongoose.connection, 'readyState', {
    value: 0,
    configurable: true,
  });

  const res = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Client Disconnected DB',
      email: 'client@example.com',
      service: 'General Enquiry',
      message: 'Testing that disconnected DB fails honestly with 503.',
    }),
  });

  assert.equal(res.status, 503);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.message.includes('unavailable'));
});

test('POST /api/v1/contact - successful persistence and mocked email dispatch', async () => {
  // Mock DB connected
  Object.defineProperty(mongoose.connection, 'readyState', {
    value: 1,
    configurable: true,
  });

  let savedDoc = null;
  Contact.prototype.save = async function () {
    this._id = 'mocked_doc_id_001';
    savedDoc = this;
    return this;
  };
  Contact.findOne = async function () {
    return null; // No duplicate
  };

  // Mock Email Transporter
  let sentMailOptions = null;
  setTransporter({
    sendMail: async (options) => {
      sentMailOptions = options;
      return { messageId: '<mocked-message-id@bns.test>' };
    },
  });

  const res = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Bengal News Client',
      email: 'client@example.com',
      phone: '+91 9876543210',
      organization: 'BNS Media Network',
      service: 'Public Relations & Corporate Communications',
      message: 'Enquiry regarding corporate PR and communications advisory retainer.',
    }),
  });

  assert.equal(res.status, 201);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.message.includes('enquiry has been received'));

  // Verify DB persistence
  assert.ok(savedDoc, 'Document should have been saved');
  assert.equal(savedDoc.name, 'Bengal News Client');
  assert.equal(savedDoc.notificationStatus, 'sent');

  // Verify Email details
  assert.ok(sentMailOptions, 'Email should have been dispatched');
  assert.equal(sentMailOptions.to, 'contact@bengalnewsservice.com');
  assert.equal(sentMailOptions.replyTo, 'client@example.com');
  assert.ok(sentMailOptions.subject.includes('Bengal News Client'));
  assert.ok(sentMailOptions.html.includes('Public Relations &amp; Corporate Communications'));
});

test('POST /api/v1/contact - email notification failure still succeeds with 201 because DB saved', async () => {
  Object.defineProperty(mongoose.connection, 'readyState', {
    value: 1,
    configurable: true,
  });

  let savedDoc = null;
  Contact.prototype.save = async function () {
    this._id = 'mocked_doc_id_002';
    savedDoc = this;
    return this;
  };
  Contact.findOne = async function () {
    return null;
  };

  // Failing email transporter
  setTransporter({
    sendMail: async () => {
      throw new Error('Simulated SMTP connection timeout');
    },
  });

  const res = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Email Timeout Client',
      email: 'timeout@example.com',
      service: 'Digital Marketing & Advertising',
      message: 'Testing that email failure does not lose enquiry or report false error.',
    }),
  });

  // Customer still receives 201 because enquiry IS saved in DB
  assert.equal(res.status, 201);
  const data = await res.json();
  assert.equal(data.success, true);

  // Document status records the email failure for operational follow-up
  assert.ok(savedDoc);
  assert.equal(savedDoc.notificationStatus, 'failed');
  assert.ok(savedDoc.notificationError.includes('Simulated SMTP connection timeout'));
});

test('POST /api/v1/contact - avoids duplicate records within 2 minutes', async () => {
  Object.defineProperty(mongoose.connection, 'readyState', {
    value: 1,
    configurable: true,
  });

  let saveCalled = 0;
  Contact.prototype.save = async function () {
    saveCalled++;
    return this;
  };

  // Mock finding an existing duplicate
  Contact.findOne = async function () {
    return {
      _id: 'existing_id_999',
      name: 'Duplicate Sender',
      email: 'dup@example.com',
      message: 'This is a duplicate message for testing.',
    };
  };

  const res = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Duplicate Sender',
      email: 'dup@example.com',
      service: 'General Enquiry',
      message: 'This is a duplicate message for testing.',
    }),
  });

  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.message.includes('already been received'));
  assert.equal(saveCalled, 0, 'Should not create duplicate DB document');
});

test('GET /unknown-route - returns 404 with structured JSON', async () => {
  const res = await fetch(`${baseUrl}/api/v1/nonexistent`);
  assert.equal(res.status, 404);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.message.includes('Route not found'));
});
