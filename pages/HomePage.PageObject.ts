import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  // 1. Explicitly type your senior locators
  public readonly pageTitle: Locator;
  public readonly testingGuideButton: Locator;
  public readonly bugHuntingButton: Locator;
  public readonly home: Locator;
  public readonly categories: Locator;
  public readonly contact: Locator;
  public readonly signIn: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // 2. Define the exact non-CSS locators you created
    this.pageTitle = page.getByText(/Practice Black Box Testing/i);
    this.testingGuideButton = page.getByRole('button', { name: 'Testing Guide' });
    this.bugHuntingButton = page.getByRole('button', { name: '🐛 Bug Hunting' });
    this.home = page.getByRole('link', { name: 'Home' });
    this.categories = page.getByTestId('nav-categories');
    this.contact = page.getByRole('link', { name: 'Contact' });
    this.signIn = page.getByRole('link', { name: 'Sign in' });
  }

  // 3. Encapsulate actions inside easy methods
  async navigateTo() {
    await this.page.goto('/');
  }
}
