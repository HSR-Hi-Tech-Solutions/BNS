import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters.'],
      maxlength: [120, 'Name must not exceed 120 characters.'],
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address.'],
      maxlength: [254, 'Email must not exceed 254 characters.'],
    },
    phone: {
      type: String,
      trim: true,
      maxlength: [25, 'Phone must not exceed 25 characters.'],
      default: '',
    },
    organization: {
      type: String,
      trim: true,
      maxlength: [200, 'Organisation must not exceed 200 characters.'],
      default: '',
    },
    service: {
      type: String,
      trim: true,
      maxlength: [100, 'Service field must not exceed 100 characters.'],
      default: '',
    },
    message: {
      type: String,
      required: [true, 'Message is required.'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters.'],
      maxlength: [2000, 'Message must not exceed 2000 characters.'],
    },
    ipHash: {
      type: String, // Store a hashed IP for spam detection, not raw IP
      default: '',
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new',
    },
    notificationStatus: {
      type: String,
      enum: ['pending', 'sent', 'failed', 'skipped'],
      default: 'pending',
    },
    notificationError: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    // Do not expose internal fields by default
    toJSON: {
      transform: (_doc, ret) => {
        delete ret.__v;
        delete ret.ipHash;
        return ret;
      },
    },
  }
);

// Index for admin queries and monitoring
contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1 });
contactSchema.index({ notificationStatus: 1 });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
