/**
 * Minimal request logger — does NOT log request bodies or sensitive headers
 */
export function requestLogger(req, _res, next) {
  const now = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  // Log only method and path, never body/headers which may contain PII
  console.info(`[BNS] ${now} ${method} ${url}`);
  next();
}
