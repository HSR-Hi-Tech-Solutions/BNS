import app from './app.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

async function start() {
  // Connect to MongoDB (optional — server still starts if DB not configured)
  if (process.env.MONGODB_URI) {
    await connectDB();
  } else {
    console.warn(
      '[BNS Server] MONGODB_URI not set. Running without database — contact submissions will not be persisted.'
    );
  }

  const server = app.listen(PORT, () => {
    console.log(`[BNS Server] Running in ${NODE_ENV} mode on port ${PORT}`);
  });

  // Graceful shutdown
  const shutdown = (signal) => {
    console.log(`[BNS Server] ${signal} received — shutting down gracefully…`);
    server.close(() => {
      console.log('[BNS Server] HTTP server closed.');
      process.exit(0);
    });
    setTimeout(() => {
      console.error('[BNS Server] Force shutdown after timeout.');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));

  return server;
}

if (process.env.NODE_ENV !== 'test') {
  start().catch((err) => {
    console.error('[BNS Server] Failed to start:', err.message);
    process.exit(1);
  });
}

export { start };
export default app;
