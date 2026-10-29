import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import { connectDB } from './config/db.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/requestLogger.js';
import contactRoutes from './routes/contact.js';
import healthRoutes from './routes/health.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ── Security headers ──────────────────────────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:', 'https:'],
        scriptSrc: ["'self'"],
        connectSrc: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

// ── CORS ──────────────────────────────────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., mobile apps, curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS policy: Origin '${origin}' not allowed.`));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
  })
);

// ── Body parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// ── NoSQL injection prevention ────────────────────────────────────────────────
app.use(mongoSanitize());

// ── Request logging ───────────────────────────────────────────────────────────
app.use(requestLogger);

// ── Global rate limit ─────────────────────────────────────────────────────────
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many requests. Please try again later.' },
  })
);

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/v1/health', healthRoutes);
app.use('/api/v1/contact', contactRoutes);

// ── 404 & Error handler ───────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ── Start ─────────────────────────────────────────────────────────────────────
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
}

if (process.env.NODE_ENV !== 'test') {
  start().catch((err) => {
    console.error('[BNS Server] Failed to start:', err.message);
    process.exit(1);
  });
}

export { app, start };
export default app;
