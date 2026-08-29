import {test, expect} from '@playwright/test';
import { HomePage } from '../src/pages/HomePage.PageObject';
import { LoginPage } from '../src/pages/Login.PageObject';
import { RegistrationPage } from '../src/pages/Registration.PageObject';
import { getRegistrationData } from '../src/testdata/Registration.data';


test.describe('Registration Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/', {
        waitUntil: 'domcontentloaded'
    });

       
        const homePage = new HomePage(page);
        await expect(homePage.signIn).toBeVisible();
        await homePage.signIn.click();
        const loginPage = new LoginPage(page);
        await expect(loginPage.registerLink).toBeVisible();
        await loginPage.registerLink.click();
});


// To verify registration page elements are visible
    test('Should display all registration page elements', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await expect(registrationPage.formLabel).toBeVisible();
        await expect(registrationPage.firstNameFieldLabel).toBeVisible();
        await expect(registrationPage.lastNameFieldLabel).toBeVisible();
        await expect(registrationPage.dateOfBirthLabel).toBeVisible();  
        await expect(registrationPage.countryLabel).toBeVisible();
        await expect(registrationPage.postcodeLookupHint).toBeVisible();  
        await expect(registrationPage.postalCodeFieldLabel).toBeVisible();
        await expect(registrationPage.streetLabel).toBeVisible();
        await expect(registrationPage.cityLabel).toBeVisible();
        await expect(registrationPage.stateFieldLabel).toBeVisible();
        await expect(registrationPage.phoneFieldLabel).toBeVisible();
        await expect(registrationPage.emailaddressLabel).toBeVisible();
        await expect(registrationPage.passwordLabel).toBeVisible();
        await expect(registrationPage.registerButton).toBeVisible();
    }
    );


    test('Should display error message for invalid email and password', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        const user = getRegistrationData()[0];

        await registrationPage.firstNameField.fill(user.firstName);
        await registrationPage.lastNameField.fill(user.lastName);
        await registrationPage.dateOfBirthField.fill('2000-01-01');
        await registrationPage.countryDropdown.selectOption('MY');
        await registrationPage.postalCodeField.fill(user.postalCode);
        await registrationPage.houseNumberField.fill(user.houseNumber);
        await registrationPage.streetField.fill(user.street);
        await registrationPage.cityField.fill(user.city);
        await registrationPage.stateField.fill(user.state);
        await registrationPage.phoneField.fill(user.phone);
        await registrationPage.emailaddressField.fill('invalidemail.com');
        await registrationPage.passwordField.fill('password123');
        await registrationPage.registerButton.click();
        await expect(registrationPage.errorMessageEmail).toHaveText('Email format is invalid');
        await expect(registrationPage.errorMessagePassword).toHaveText('Password can not include invalid characters.');
    }
    );

    test('Should successfully register a new user', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        const loginPage = new LoginPage(page);
        const email = `testuser-${Date.now()}@gmail.com`;
        const user = getRegistrationData()[0];

        await registrationPage.firstNameField.fill(user.firstName);
        await registrationPage.lastNameField.fill(user.lastName);
        await registrationPage.dateOfBirthField.fill(user.dateOfBirth);
        await registrationPage.countryDropdown.selectOption(user.country);
        await registrationPage.postalCodeField.fill(user.postalCode);
        await registrationPage.houseNumberField.fill(user.houseNumber);
        // Wait until address lookup has completed
        await expect(page.getByText('Looking up your address...')).toBeHidden();
        // Verify the form is ready - due to webkit failed to wait for the address lookup to complete, we check if the register button is enabled
        await expect(registrationPage.registerButton).toBeEnabled();
        await registrationPage.streetField.fill(user.street);
        await registrationPage.cityField.fill(user.city);
        await registrationPage.stateField.fill(user.state);
        await registrationPage.phoneField.fill(user.phone);
        await registrationPage.emailaddressField.fill(email);
        await registrationPage.passwordField.fill('T3st1234@');
        await registrationPage.registerButton.click();
        await expect(page).toHaveURL(/auth\/login/);
        await expect(loginPage.loginTitle).toBeVisible();
});
    
        
});

