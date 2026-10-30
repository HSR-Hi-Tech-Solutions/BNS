import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';

test('contactService - throws when endpoint is unconfigured or placeholder', async () => {
  // Save original env
  const origEnv = process.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;

  try {
    delete process.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;
    // Dynamic import to test unconfigured state
    const { contactService } = await import(`../src/services/api.js?t=${Date.now()}`);

    await assert.rejects(
      async () => {
        await contactService.submit({
          name: 'Test Visitor',
          email: 'test@example.com',
          message: 'This is a test message to verify error handling.',
        });
      },
      (err) => {
        assert.ok(err.message.includes('not configured'), 'Error message mentions not configured');
        return true;
      }
    );
  } finally {
    if (origEnv !== undefined) {
      process.env.VITE_GOOGLE_SHEETS_SCRIPT_URL = origEnv;
    }
  }
});

test('contactService - successfully submits payload and follows redirects with text/plain', async (t) => {
  // Create a mock server that simulates Google Apps Script Web App behavior:
  // Step 1: Receives POST with text/plain;charset=utf-8
  // Step 2: Responds with 302 Found redirect to an echo endpoint
  // Step 3: Echo endpoint returns CORS-friendly JSON
  let receivedMethod = '';
  let receivedContentType = '';
  let receivedBody = '';

  const server = http.createServer((req, res) => {
    if (req.url === '/exec' && req.method === 'POST') {
      receivedMethod = req.method;
      receivedContentType = req.headers['content-type'];

      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        receivedBody = body;
        res.writeHead(302, {
          Location: `/echo?payload=ok`,
        });
        res.end();
      });
      return;
    }

    if (req.url?.startsWith('/echo')) {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(
        JSON.stringify({
          success: true,
          message: 'Your enquiry has been received. We will respond within 2 business days.',
          ref: 'BNS-TEST-123',
        })
      );
      return;
    }

    res.writeHead(404);
    res.end();
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const mockUrl = `http://127.0.0.1:${port}/exec`;

  t.after(() => {
    server.close();
  });

  process.env.VITE_GOOGLE_SHEETS_SCRIPT_URL = mockUrl;
  const { contactService } = await import(`../src/services/api.js?t=${Date.now()}`);

  const payload = {
    name: 'Subhasish Mukherjee',
    email: 'contact@bengalnewsservice.com',
    phone: '+91 9876543210',
    organization: 'BNS Test',
    service: 'General Enquiry',
    message: 'Testing serverless Google Apps Script submission.',
  };

  const response = await contactService.submit(payload);

  assert.equal(response.success, true);
  assert.equal(receivedMethod, 'POST');
  assert.ok(
    receivedContentType.includes('text/plain'),
    'Content-Type must be text/plain to avoid preflight OPTIONS'
  );
  assert.deepEqual(JSON.parse(receivedBody), payload);
});

test('contactService - throws when Google Apps Script returns success: false', async (t) => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(
      JSON.stringify({
        success: false,
        message: 'Validation failed: A valid email address is required.',
      })
    );
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const mockUrl = `http://127.0.0.1:${port}/exec`;

  t.after(() => {
    server.close();
  });

  process.env.VITE_GOOGLE_SHEETS_SCRIPT_URL = mockUrl;
  const { contactService } = await import(`../src/services/api.js?t=${Date.now()}`);

  await assert.rejects(
    async () => {
      await contactService.submit({
        name: 'Test',
        email: 'bad-email',
        message: 'Valid message content here.',
      });
    },
    (err) => {
      assert.ok(err.message.includes('Validation failed'), 'Error preserves server validation message');
      return true;
    }
  );
});

test('contactService - throws when HTTP status is not ok (e.g. 500)', async (t) => {
  const server = http.createServer((req, res) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const mockUrl = `http://127.0.0.1:${port}/exec`;

  t.after(() => {
    server.close();
  });

  process.env.VITE_GOOGLE_SHEETS_SCRIPT_URL = mockUrl;
  const { contactService } = await import(`../src/services/api.js?t=${Date.now()}`);

  await assert.rejects(
    async () => {
      await contactService.submit({
        name: 'Test',
        email: 'test@example.com',
        message: 'Valid message content here.',
      });
    },
    (err) => {
      assert.ok(err.message.includes('HTTP 500'), 'Error reflects HTTP status');
      return true;
    }
  );
});
