import {test} from '@playwright/test';

test("Login Test", async ({ page }) => {
  console.log('Filled username field with testuser');
  await page.goto('https://practicesoftwaretesting.com');
  //await page.fill('#username', 'testuser'); 

 

});


test("Login Test2", async ({ page }) => {
  console.log('Filled username field with testuser');
  await page.goto('https://practicesoftwaretesting.com');
  //await page.fill('#username', 'testuser'); 

  

});

