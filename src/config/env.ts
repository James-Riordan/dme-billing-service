import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || '3001',
  LAGO_API_KEY: process.env.LAGO_API_KEY || '',
  LAGO_API_URL: process.env.LAGO_API_URL || 'https://api.getlago.com',
};

if (!ENV.LAGO_API_KEY) {
  console.error('❌ Missing LAGO_API_KEY in environment variables!');
  process.exit(1);
}
