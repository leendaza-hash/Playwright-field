import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.PageObject';

test.describe('Homepage UI Validation', () => {
   let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
   homePage = new HomePage(page);
   await page.goto('/');
  });

  test('Validate homescreen UI elements', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateTo();
  });

  test('should validate homescreen UI elements', async () => {
    // Assertions remain in the test file, cleanly reading from the page object
    // To validate the presence of the elements on the homepage
    await expect(homePage.pageTitle).toBeVisible();
    await expect(homePage.testingGuideButton).toBeVisible();
    await expect(homePage.bugHuntingButton).toBeVisible();
    await expect(homePage.home).toBeVisible();
    await expect(homePage.categories).toBeVisible();
    await expect(homePage.contact).toBeVisible();
    await expect(homePage.signIn).toBeVisible();
    await expect(homePage.sort).toBeVisible();
    await expect(homePage.priceRange).toBeVisible();
    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.filter).toBeVisible();
    await expect(homePage.byBrand).toBeVisible();
    await expect(homePage.sustainability).toBeVisible();
  });
});

