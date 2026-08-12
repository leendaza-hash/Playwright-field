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










constructor(private readonly page: Page) {
    this.formLabel = page.getByRole('heading', { name: 'Customer registration' });
    this.firstNameFieldLabel = page.getByText('First Name *');
    this.firstNameField = page.getByTestId('first-name').getByPlaceholder('Your First Name*');
    this.lastNameFieldLabel = page.getByText('Last Name *');
    this.lastNameField = page.getByTestId('last-name').getByPlaceholder('Your Last Name*');
    this.dateOfBirthLabel = page.getByText('Date of Birth *');
    this.dateOfBirthField = page.getByTestId('dob').getByPlaceholder('DD/MM/YYYY');
    this.countryLabel = page.getByText('Country *');
    this.countryDropdown = page.locator('[data-test="country"]').getByRole('combobox');
    this.postcodeLookupHint = page.getByTestId('postcode-lookup-hint');
    this.postalCodeFieldLabel = page.getByText('Postal Code');
    this.postalCodeField = page.getByTestId('postcode').getByPlaceholder('Your Postal Code*');
    this.houseNumberField = page.getByTestId('house-number').getByPlaceholder('Your House Number*');
    this.streetLabel = page.getByText('Street');
    this.streetField = page.getByTestId('street').getByPlaceholder('Your Street*');
    this.cityLabel = page.getByText('City');
    this.cityField = page.getByTestId('city').getByPlaceholder('Your City*');
    this.stateFieldLabel = page.getByText('State');
    this.stateField = page.getByTestId('state').getByPlaceholder('Your State*');
    this.phoneFieldLabel = page.getByText('Phone');
    this.phoneField = page.getByTestId('phone').getByPlaceholder('Your Phone*');
    this.emailaddressLabel = page.getByText('Email Address *');
    this.emailaddressField = page.getByTestId('email').getByPlaceholder('Your Email Address*');
    this.passwordLabel = page.getByText('Password *');
    this.passwordField = page.getByTestId('password').getByPlaceholder('Your Password*');
    this.passwordStrength = page.getByText('Password strength:');
    this.registerButton = page.getByRole('button', { name: 'Register' });

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