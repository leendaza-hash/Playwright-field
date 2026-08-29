import {test as base} from '@playwright/test';
import { LoginPage } from '../src/pages/Login.PageObject';
import { HomePage } from '../src/pages/HomePage.PageObject';

type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});