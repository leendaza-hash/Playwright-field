import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    public readonly loginTitle: Locator;
    public readonly googleButton: Locator;
    public readonly emailFieldTitle: Locator;
    public readonly emailFieldPlaceholder: Locator;
    public readonly passwordFieldTitle: Locator;
    public readonly passwordFieldPlaceholder: Locator;
    public readonly bulletEye: Locator;
    public readonly loginButton: Locator;
    public readonly loginFooter: Locator;
    public readonly registerLink: Locator;
    public readonly forgotPassword: Locator;




constructor(private readonly page: Page) {
    this.loginTitle = page.getByRole('heading', { name: 'Login' })
    this.googleButton = page.getByRole("button", { name: 'Sign in with Google' });
    this.emailFieldTitle = page.getByText('Email address *');
    this.emailFieldPlaceholder = page.getByPlaceholder('Your Email');
    this.passwordFieldTitle = page.getByText('Password *');
    this.passwordFieldPlaceholder = page.getByPlaceholder('Your Password');
    this.bulletEye = page.getByTestId('login-form').getByRole('button', { name: '' });
    this.loginButton = page.getByTestId('login-submit');
    this.loginFooter = page.getByText('Not yet an account? Register');
    this.registerLink = page.getByTestId('register-link');
    this.forgotPassword = page.getByTestId('forgot-password-link');

  }

async navigateTo() {
    await this.page.goto('/');
  }
}