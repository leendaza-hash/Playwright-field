import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests sequentially
  fullyParallel: false,
  

  // Retry failed tests only in CI
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  // Run tests using a single worker
  workers: 1,

  // HTML report
  reporter: 'html',

  use: {
    // Swag Labs URL
    baseURL: 'https://www.saucedemo.com',

    // Take screenshot when test fails
    screenshot: 'only-on-failure',

    // Use data-test as the test ID attribute
    testIdAttribute: 'data-test',

    // Collect trace on retry
    trace: 'on-first-retry',
  },

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