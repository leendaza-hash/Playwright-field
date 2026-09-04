import {test, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/Login.PageObject';
//import { HomePage } from '../src/pages/HomePage.PageObject';

test.describe('Login Page', () => {


test.beforeEach(async ({ page }) => {
        await page.goto('/auth/login', { waitUntil: 'domcontentloaded' });
        //const homePage = new HomePage(page);
        //await homePage.signIn.click();
        const signIn = page.getByTestId('nav-sign-in');
        //await page.getByRole('link', { name: 'Sign in' }).click();
        await expect(signIn).toBeVisible();
        await expect(signIn).toBeEnabled();

        await signIn.click();
        //await expect(page).toHaveURL(/\/auth\/login/);
});


// To verify login page elements are visible
    test('Should display all login page elements', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await expect(loginPage.loginTitle).toBeVisible();
        await expect(loginPage.googleButton).toBeVisible();
        await expect(loginPage.emailFieldTitle).toBeVisible();
        await expect(loginPage.emailField).toBeVisible();
        await expect(loginPage.passwordFieldTitle).toBeVisible();   
        await expect(loginPage.passwordField).toBeVisible();     
        await expect(loginPage.bulletEye).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
        await expect(loginPage.loginFooter).toBeVisible();
        await expect(loginPage.registerLink).toBeVisible();
        await expect(loginPage.forgotPassword).toBeVisible();
    }

  );


//To verify Login page with invalid email & password

  test('Should display error message for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.emailField.fill('invalid@example.com');
    await loginPage.passwordField.fill('invalidpassword');
    await loginPage.loginButton.click();

    await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
  }
  );


//To verify Login page with valid email & invalid password

 test('Should display error message for valid email and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.emailField.fill('testuser02@gmail.com');
    await loginPage.passwordField.fill('invalidpassword');
    await loginPage.loginButton.click();

    await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
  }
  );


//To verify Login page with invalid email & valid password

test('Should display error message for invalid email and valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.emailField.fill('invalid@gmail.com');
    await loginPage.passwordField.fill('T3st1234@');
    await loginPage.loginButton.click();

    await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
  }
  );



// To verify Login flow with valid email & valid password

test('Should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.emailField.fill('testuser03@gmail.com');
    await loginPage.passwordField.fill('T3st1234@');
    await loginPage.loginButton.click();
    //await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    //await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
  }
  );
});