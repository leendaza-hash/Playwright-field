import { test, expect } from '@playwright/test';

test('Verify UI elements on home page', async ({ page }) => {
// Navigate to the home page of the application
  await page.goto('https://practicesoftwaretesting.com/');
// Verify that the "Home" link is visible
  await expect(page.locator('//a[text()="Home"]')).toBeVisible();
// Verify that the "Categories" link is visible
  await expect(page.locator('//*[@id="navbarSupportedContent"]/ul/li[2]/button')).toBeVisible();
// Verify that the "About" link is visible
  await expect(page.locator('//*[@id="navbarSupportedContent"]/ul/li[3]/a')).toBeVisible();
// Verify that the "Contact" link is visible
  await expect(page.locator('//*[@id="navbarSupportedContent"]/ul/li[4]/a')).toBeVisible();


});
