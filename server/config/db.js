import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI environment variable is not set.');

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    isConnected = true;
    console.log('[BNS DB] MongoDB connected successfully.');

    mongoose.connection.on('error', (err) => {
      console.error('[BNS DB] MongoDB connection error:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[BNS DB] MongoDB disconnected.');
      isConnected = false;
    });
  } catch (err) {
    console.error('[BNS DB] MongoDB connection failed:', err.message);
    throw err;
  }
}

export async function disconnectDB() {
  if (!isConnected) return;
  await mongoose.disconnect();
  isConnected = false;
  console.log('[BNS DB] MongoDB disconnected.');
}
