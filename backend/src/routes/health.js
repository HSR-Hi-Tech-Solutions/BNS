import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// GET /api/v1/health
router.get('/', (_req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus = ['disconnected', 'connected', 'connecting', 'disconnecting'][dbState] || 'unknown';

  res.status(200).json({
    success: true,
    service: 'BNS API',
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: dbStatus,
  });
});

export default router;
