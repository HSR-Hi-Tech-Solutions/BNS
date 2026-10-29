const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * 404 handler — called when no route matched
 */
export function notFound(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

/**
 * Centralised error handler
 */
export function errorHandler(err, req, res, _next) {
  // Determine status code
  const statusCode = err.statusCode || err.status || 500;

  // Log error details server-side (full stack in dev)
  if (NODE_ENV === 'development') {
    console.error('[BNS Error]', err);
  } else {
    console.error(`[BNS Error] ${statusCode} — ${err.message}`);
  }

  // Never expose stack traces in production
  const response = {
    success: false,
    message:
      statusCode === 500
        ? 'An internal server error occurred. Please try again later.'
        : err.message || 'An error occurred.',
  };

  if (NODE_ENV === 'development' && err.stack) {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
}
