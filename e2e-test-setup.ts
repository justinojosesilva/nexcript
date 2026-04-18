#!/usr/bin/env tsx
/**
 * E2E Test Setup: Register test user and get JWT token
 */

import axios from 'axios';

const API_URL = 'http://localhost:3002';

async function setup() {
  try {
    console.log('Setting up E2E test environment...\n');

    // 1. Try to register a test user
    const testEmail = `test-${Date.now()}@nexvideo.dev`;
    const testPassword = 'TestPassword123!';

    console.log(`📝 Attempting to register test user: ${testEmail}`);

    try {
      const registerResponse = await axios.post(`${API_URL}/auth/register`, {
        email: testEmail,
        password: testPassword,
        name: 'E2E Test User'
      });

      console.log(`✅ User registered successfully`);
      const token = registerResponse.data?.access_token || registerResponse.data?.token;

      if (token) {
        console.log(`\n✅ Setup complete!`);
        console.log(`\nYou can now run tests with this token:`);
        console.log(`\n  Authorization: Bearer ${token}`);
        console.log(`\nOr set environment variable:`);
        console.log(`  export JWT_TOKEN="${token}"`);
        console.log(`  export TEST_EMAIL="${testEmail}"`);
        console.log(`  export TEST_PASSWORD="${testPassword}"`);
      }
    } catch (registerError: any) {
      if (registerError.response?.status === 409) {
        console.log(`ℹ️ User already exists, attempting login...`);

        const loginResponse = await axios.post(`${API_URL}/auth/login`, {
          email: testEmail,
          password: testPassword
        });

        const token = loginResponse.data?.access_token || loginResponse.data?.token;

        if (token) {
          console.log(`✅ Login successful`);
          console.log(`\n✅ Setup complete!`);
          console.log(`\nToken: ${token}`);
        }
      } else {
        throw registerError;
      }
    }
  } catch (error) {
    console.error('Setup failed:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

setup();
