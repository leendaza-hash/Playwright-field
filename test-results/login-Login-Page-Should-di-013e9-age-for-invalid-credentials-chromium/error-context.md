# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Page >> Should display error message for invalid credentials
- Location: tests\login.spec.ts:36:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByText('Invalid email or password')
Expected: "Invalid email or password"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByText('Invalid email or password')

```

```yaml
- text: View the
- link "Documentation":
  - /url: https://testsmith-io.github.io/practice-software-testing/#/
- text: for this application. Practice Black Box Testing & Bug Hunting
- button "Testing Guide"
- button "🐛 Bug Hunting"
- navigation:
  - link "Practice Software Testing - Toolshop":
    - /url: /
    - img
  - menubar "Main menu":
    - menuitem "Home":
      - link "Home":
        - /url: /
    - menuitem "Categories":
      - button "Categories"
    - menuitem "Contact":
      - link "Contact":
        - /url: /contact
    - menuitem "Sign in":
      - link "Sign in":
        - /url: /auth/login
  - button "Select language": EN
- heading "Login" [level=3]
- button "Sign in with Google"
- text: or use Email address *
- textbox "Email address *":
  - /placeholder: Your email
  - text: invalid@example.com
- text: Password *
- textbox "Password *":
  - /placeholder: Your password
  - text: invalidpassword
- button
- button "Login"
- paragraph:
  - text: Not yet an account?
  - link "Register your account":
    - /url: /auth/register
  - link "Forgot your Password?":
    - /url: /auth/forgot-password
- contentinfo:
  - text: This is a DEMO application (
  - link "GitHub repo":
    - /url: https://github.com/testsmith-io/practice-software-testing
  - text: ), used for software testing training purpose. |
  - link "Privacy Policy":
    - /url: /privacy
  - text: "| Banner photo by"
  - link "Barn Images":
    - /url: https://unsplash.com/@barnimages
  - text: "on"
  - link "Unsplash":
    - /url: https://unsplash.com/photos/t5YUoHW6zRo
  - text: . v2.4 | Built 2026-08-14 | Angular 20.0.5
- button "Open chat":
  - img
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage } from '../src/pages/Login.PageObject';
  3  | import { HomePage } from '../src/pages/HomePage.PageObject';
  4  | 
  5  | test.describe('Login Page', () => {
  6  | 
  7  | 
  8  | test.beforeEach(async ({ page }) => {
  9  |         await page.goto('/');
  10 |         const homePage = new HomePage(page);
  11 |         await homePage.signIn.click();
  12 | });
  13 | 
  14 | 
  15 | // To verify login page elements are visible
  16 |     test('Should display all login page elements', async ({ page }) => {
  17 |         const loginPage = new LoginPage(page);
  18 |         await expect(loginPage.loginTitle).toBeVisible();
  19 |         await expect(loginPage.googleButton).toBeVisible();
  20 |         await expect(loginPage.emailFieldTitle).toBeVisible();
  21 |         await expect(loginPage.emailFieldPlaceholder).toBeVisible();
  22 |         await expect(loginPage.passwordFieldTitle).toBeVisible();   
  23 |         await expect(loginPage.passwordFieldPlaceholder).toBeVisible();     
  24 |         await expect(loginPage.bulletEye).toBeVisible();
  25 |         await expect(loginPage.loginButton).toBeVisible();
  26 |         await expect(loginPage.loginFooter).toBeVisible();
  27 |         await expect(loginPage.registerLink).toBeVisible();
  28 |         await expect(loginPage.forgotPassword).toBeVisible();
  29 |     }
  30 | 
  31 |   );
  32 | 
  33 | 
  34 | //To verify Login page with invalid email & password
  35 | 
  36 |   test('Should display error message for invalid credentials', async ({ page }) => {
  37 |     const loginPage = new LoginPage(page);
  38 |     await loginPage.emailFieldPlaceholder.fill('invalid@example.com');
  39 |     await loginPage.passwordFieldPlaceholder.fill('invalidpassword');
  40 |     await loginPage.loginButton.click();
  41 | 
> 42 |     await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  43 |   }
  44 |   );
  45 | 
  46 | 
  47 | //To verify Login page with valid email & invalid password
  48 | 
  49 |  test('Should display error message for valid email and invalid password', async ({ page }) => {
  50 |     const loginPage = new LoginPage(page);
  51 |     await loginPage.emailFieldPlaceholder.fill('testuser02@gmail.com');
  52 |     await loginPage.passwordFieldPlaceholder.fill('invalidpassword');
  53 |     await loginPage.loginButton.click();
  54 | 
  55 |     await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
  56 |   }
  57 |   );
  58 | 
  59 | 
  60 | //To verify Login page with invalid email & valid password
  61 | 
  62 | test('Should display error message for invalid email and valid password', async ({ page }) => {
  63 |     const loginPage = new LoginPage(page);
  64 |     await loginPage.emailFieldPlaceholder.fill('invalid@gmail.com');
  65 |     await loginPage.passwordFieldPlaceholder.fill('T3st1234@');
  66 |     await loginPage.loginButton.click();
  67 | 
  68 |     await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
  69 |   }
  70 |   );
  71 | 
  72 | 
  73 | 
  74 | // To verify Login flow with valid email & valid password
  75 | 
  76 | test('Should login successfully with valid credentials', async ({ page }) => {
  77 |     const loginPage = new LoginPage(page);
  78 |     const email = 'testuser03@gmail.com';
  79 |     const password = 'T3st1234@';
  80 |     await loginPage.emailFieldPlaceholder.fill(email);
  81 |     await loginPage.passwordFieldPlaceholder.fill(password);
  82 |     await loginPage.loginButton.click();
  83 |     await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  84 | 
  85 |     //await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
  86 |   }
  87 |   );
  88 | });
```