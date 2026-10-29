import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve('.');

test('Asset verification - logos exist and are valid files', () => {
  const iconLogo = path.join(projectRoot, 'public', 'bns-logo-icon.png');
  const fullLogo = path.join(projectRoot, 'public', 'bns-logo-full.png');

  assert.ok(fs.existsSync(iconLogo), 'bns-logo-icon.png exists');
  assert.ok(fs.existsSync(fullLogo), 'bns-logo-full.png exists');

  const iconStat = fs.statSync(iconLogo);
  const fullStat = fs.statSync(fullLogo);

  assert.ok(iconStat.size > 1000, 'icon logo has non-trivial size');
  assert.ok(fullStat.size > 1000, 'full logo has non-trivial size');
});

test('SEO verification - robots.txt and sitemap.xml exist', () => {
  const robots = path.join(projectRoot, 'public', 'robots.txt');
  const sitemap = path.join(projectRoot, 'public', 'sitemap.xml');

  assert.ok(fs.existsSync(robots), 'robots.txt exists');
  assert.ok(fs.existsSync(sitemap), 'sitemap.xml exists');

  const robotsContent = fs.readFileSync(robots, 'utf8');
  assert.ok(robotsContent.includes('User-agent: *'));
  assert.ok(robotsContent.includes('sitemap.xml'));

  const sitemapContent = fs.readFileSync(sitemap, 'utf8');
  assert.ok(sitemapContent.includes('bengalnewsservice.com/about'));
  assert.ok(sitemapContent.includes('bengalnewsservice.com/services'));
  assert.ok(sitemapContent.includes('bengalnewsservice.com/leadership'));
  assert.ok(sitemapContent.includes('bengalnewsservice.com/contact'));
});

test('Build output verification - dist directory contains generated assets', () => {
  const dist = path.join(projectRoot, 'dist');
  assert.ok(fs.existsSync(dist), 'dist directory exists');

  const indexHtml = path.join(dist, 'index.html');
  assert.ok(fs.existsSync(indexHtml), 'dist/index.html exists');

  const htmlContent = fs.readFileSync(indexHtml, 'utf8');
  assert.ok(htmlContent.includes('Bengal News Service'), 'HTML includes brand title');
  assert.ok(htmlContent.includes('Voice Of Bengal'), 'HTML includes tagline');
});

test('Environment verification - no secrets committed', () => {
  // Verify .env files are either not present or gitignored
  const gitignore = fs.readFileSync(path.join(projectRoot, '.gitignore'), 'utf8');
  assert.ok(gitignore.includes('.env'), '.gitignore excludes .env');
  assert.ok(gitignore.includes('node_modules/'), '.gitignore excludes node_modules');
  assert.ok(gitignore.includes('dist/'), '.gitignore excludes dist');
});
