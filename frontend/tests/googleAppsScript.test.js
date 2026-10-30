import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve('.');

test('Google Apps Script - Code.gs exists and contains required functions and configurations', () => {
  const codeGsPath = path.resolve(projectRoot, '..', 'google-apps-script', 'Code.gs');
  assert.ok(fs.existsSync(codeGsPath), 'google-apps-script/Code.gs exists');

  const content = fs.readFileSync(codeGsPath, 'utf8');

  // Verify core Web App entry points
  assert.ok(content.includes('function doPost(e)'), 'Includes doPost handler');
  assert.ok(content.includes('function doGet(e)'), 'Includes doGet health check handler');
  assert.ok(content.includes('function testSubmission()'), 'Includes testSubmission function');

  // Verify concurrency lock
  assert.ok(content.includes('LockService.getScriptLock()'), 'Uses LockService for concurrency');
  assert.ok(content.includes('lock.tryLock('), 'Implements lock timeout');
  assert.ok(content.includes('lock.releaseLock()'), 'Safely releases lock in finally block');

  // Verify required columns defined
  assert.ok(content.includes('Submission Date'), 'Header includes Submission Date');
  assert.ok(content.includes('Full Name'), 'Header includes Full Name');
  assert.ok(content.includes('Email'), 'Header includes Email');
  assert.ok(content.includes('Phone Number'), 'Header includes Phone Number');
  assert.ok(content.includes('Organization'), 'Header includes Organization');
  assert.ok(content.includes('Service / Subject'), 'Header includes Service / Subject');
  assert.ok(content.includes('Message'), 'Header includes Message');
  assert.ok(content.includes('Status'), 'Header includes Status');

  // Verify MIME type JSON output
  assert.ok(content.includes('ContentService.MimeType.JSON'), 'Returns JSON TextOutput');
});

test('Google Apps Script - README.md contains complete deployment guide', () => {
  const readmePath = path.resolve(projectRoot, '..', 'google-apps-script', 'README.md');
  assert.ok(fs.existsSync(readmePath), 'google-apps-script/README.md exists');

  const content = fs.readFileSync(readmePath, 'utf8');
  assert.ok(content.includes('Execute as'), 'Documents Execute as setting');
  assert.ok(content.includes('Who has access'), 'Documents Who has access setting');
  assert.ok(content.includes('VITE_GOOGLE_SHEETS_SCRIPT_URL'), 'Documents environment variable');
});
