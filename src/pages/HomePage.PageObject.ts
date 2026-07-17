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
  public readonly sort: Locator;
  public readonly priceRange: Locator;
  public readonly searchInput: Locator;
  public readonly filter: Locator;
  public readonly byBrand: Locator;
  public readonly sustainability: Locator;

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
    this.sort = page.getByRole('heading', { name: 'Sort', exact: true });
    this.priceRange = page.getByRole('heading', { name: 'Price Range', exact: true });
    this.searchInput = page.getByRole('heading', { name: 'Search' });
    this.filter = page.getByRole('heading', { name: 'Filters', exact: true });
    this.byBrand = page.getByRole('heading', { name: 'By brand:',exact: true });
    this.sustainability = page.getByRole('heading', { name: 'Sustainability:',exact: true });
  }

  // 3. Encapsulate actions inside easy methods
  async navigateTo() {
    await this.page.goto('/');
  }
}
