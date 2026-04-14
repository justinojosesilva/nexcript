const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Override invalid env values for E2E test environment
if (!process.env.APP_URL || !process.env.APP_URL.startsWith('http')) {
  process.env.APP_URL = 'http://localhost:3001';
}
if (!process.env.ADMIN_API_KEY) {
  process.env.ADMIN_API_KEY = 'test-admin-api-key-minimum-32-characters-long';
}
