import express from 'express';
import { submitContact, contactRateLimit } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/v1/contact
router.post('/', contactRateLimit, submitContact);

export default router;
