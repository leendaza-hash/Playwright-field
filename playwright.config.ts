import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  /* Run tests sequentially to avoid conflicts with shared test accounts */
  fullyParallel: false,

  /* Fail the build on CI if you accidentally left test.only */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Use a single worker because tests share the same account */
  workers: 1,

  /* Reporter */
  reporter: 'html',

  /* Shared settings */
  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    screenshot: 'only-on-failure',
    testIdAttribute: 'data-test',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});