import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';

process.env.NODE_ENV = 'test';
process.env.ALLOWED_ORIGINS = 'http://localhost:5173,http://127.0.0.1';

const { default: app } = await import('../src/app.js');

let server;
let baseUrl;

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
  assert.ok(res.headers.get('x-content-type-options'), 'Should have X-Content-Type-Options');
  assert.ok(res.headers.get('content-security-policy'), 'Should have CSP');
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

test('POST /api/v1/contact - accepts valid submission', async () => {
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
});

test('GET /unknown-route - returns 404 with structured JSON', async () => {
  const res = await fetch(`${baseUrl}/api/v1/nonexistent`);
  assert.equal(res.status, 404);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.message.includes('Route not found'));
});
