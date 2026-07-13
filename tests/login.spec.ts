import { test, expect } from '@playwright/test';

test.describe('Homepage UI Validation', () => {
  test.beforeEach(async ({ page }) => {
    // 1. URL is kept dynamic. The root "/" pulls from playwright.config.ts baseURL.
    // This allows for easy switching between environments (dev, staging, prod) without changing the test code.
    await page.goto('/');
  });

  test('Validate homescreen UI elements', async ({ page }) => {
    const pagetitle = page.getByText('Practice Black Box Testing &');
    const testingguidebutton = page.getByRole('button', { name: 'Testing Guide' });
    const bughuntingbutton = page.getByRole('button', { name: '🐛 Bug Hunting' });

    // To validate the presence of the elements on the homepage
    await expect(pagetitle).toBeVisible();
    await expect(testingguidebutton).toBeVisible();
    await expect(bughuntingbutton).toBeVisible();
  });
});

