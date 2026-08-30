import {expect, type Page, type Locator } from '@playwright/test';

export class RegistrationPage {
    public readonly formLabel: Locator;
    public readonly firstNameFieldLabel: Locator;
    public readonly firstNameField: Locator;
    public readonly lastNameFieldLabel: Locator;
    public readonly lastNameField: Locator;
    public readonly dateOfBirthLabel: Locator;
    public readonly dateOfBirthField: Locator;
    public readonly countryLabel: Locator;
    public readonly countryDropdown: Locator;
    public readonly postcodeLookupHint: Locator;
    public readonly postalCodeFieldLabel: Locator;
    public readonly postalCodeField: Locator;
    public readonly houseNumberField: Locator;
    public readonly streetLabel: Locator;
    public readonly streetField: Locator;
    public readonly cityLabel: Locator;
    public readonly cityField: Locator;
    public readonly stateFieldLabel: Locator;
    public readonly stateField: Locator;
    public readonly phoneFieldLabel: Locator;
    public readonly phoneField: Locator;
    public readonly emailaddressLabel: Locator;
    public readonly emailaddressField: Locator;
    public readonly passwordLabel: Locator;
    public readonly passwordField: Locator;
    public readonly passwordStrength: Locator;
    public readonly registerButton: Locator;
    public readonly errorMessageEmail: Locator;
    public readonly errorMessagePassword: Locator;










constructor(private readonly page: Page) {
    this.formLabel = page.getByRole('heading', { name: 'Customer registration' });
    this.firstNameFieldLabel = page.locator('label[for="first_name"]');
    this.firstNameField = page.getByTestId('first-name');
    this.lastNameFieldLabel = page.locator('label[for="last_name"]');
    this.lastNameField = page.getByTestId('last-name');
    this.dateOfBirthLabel = page.locator('label[for="dob"]');
    this.dateOfBirthField = page.getByTestId('dob');
    this.countryLabel = page.locator('label[for="country"]');
    this.countryDropdown = page.locator('[data-test="country"]');
    this.postcodeLookupHint = page.getByTestId('postcode-lookup-hint');
    this.postalCodeFieldLabel = page.locator('label[for="postal_code"]');
    this.postalCodeField = page.getByLabel('Postal code');
    this.houseNumberField = page.getByRole('textbox', { name: 'House number' });
    this.streetLabel = page.locator('label[for="street"]');
    this.streetField = page.getByLabel('street');
    this.cityLabel = page.locator('label[for="city"]');
    this.cityField = page.getByLabel('City');
    this.stateFieldLabel = page.locator('label[for="state"]');
    this.stateField = page.getByLabel('State');
    this.phoneFieldLabel = page.locator('label[for="phone"]');
    this.phoneField = page.getByLabel('Phone');
    this.emailaddressLabel = page.locator('label[for="email"]');
    this.emailaddressField = page.getByLabel('Email address');
    this.passwordLabel = page.locator('label[for="password"]');
    this.passwordField = page.getByLabel('Password');
    this.passwordStrength = page.getByText('Password strength:');
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.errorMessageEmail = page.getByText('Email format is invalid');
    this.errorMessagePassword = page.getByText('Password can not include invalid characters.');


  }
  async fillfirstNameField(name: string) {
    await this.firstNameField.fill(name);
  }

  async filllastNameField(name: string) {
    await this.lastNameField.fill(name);
  }

  async selectcountryDropdown(country: string) {
    await this.countryDropdown.selectOption({ label: country });
  }


  async verifyPostcodeLookupMessage(message: string) {
  await expect(this.postcodeLookupHint).toHaveText(message);
}

  async fillPostalCodeField(postalCode: string) {
    await this.postalCodeField.fill(postalCode.toString());
  }

  async fillHouseNumberField(houseNumber: string) {
    await this.houseNumberField.fill(houseNumber);
  }

  async fillStreetField(street: string) {
    await this.streetField.fill(street);
  }   

  async fillCityField(city: string) {
    await this.cityField.fill(city);
  }     

  async fillStateField(state: string) {
    await this.stateField.fill(state);
  }

  async fillPhoneField(phone: string) {
    await this.phoneField.fill(phone);
  }

  async fillEmailAddressField(email: string) {
    await this.emailaddressField.fill(email);
  }     

  async verifyPasswordField(password: string) {
    await expect(this.passwordField).toHaveText([
      'Be at least 8 characters long',
      'Contain both uppercase and lowercase letters',
      'To include at least one number',
      'Have at least one special symbol (e.g., @, #, $, etc.) '
    ]);
  }

}