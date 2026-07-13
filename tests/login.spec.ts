import { test, expect } from '@playwright/test';

test.describe('Homepage UI Validation', () => {
  test.beforeEach(async ({ page }) => {
    // 1. URL is kept dynamic. The root "/" pulls from playwright.config.ts baseURL.
    // This allows for easy switching between environments (dev, staging, prod) without changing the test code.
    await page.goto('/');
  });

  test('Validate homescreen UI elements', async ({ page }) => {
    const Pagetitle = page.getByText('Practice Black Box Testing &');
    const Testingguidebutton = page.getByRole('button', { name: 'Testing Guide' });
    const Bughuntingbutton = page.getByRole('button', { name: '🐛 Bug Hunting' });
    const Home = page.getByText('Home');
    const Categories = page.getByTestId('nav-categories');
    const Contact = page.getByText('Contact');
    const Signin = page.getByRole('link', { name: 'Sign in' });

    // To validate the presence of the elements on the homepage
    await expect(Pagetitle).toBeVisible();
    await expect(Testingguidebutton).toBeVisible();
    await expect(Bughuntingbutton).toBeVisible();
    await expect(Home).toBeVisible();
    await expect(Categories).toBeVisible();
    await expect(Contact).toBeVisible();
    await expect(Signin).toBeVisible();
  });
});

