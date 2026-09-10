# Practice Software Testing - Playwright Automation

## 📌 Overview

This is a hands-on **Playwright + TypeScript test automation project** for the Practice Software Testing web application.

The project demonstrates practical QA automation skills including **Page Object Model (POM), functional testing, positive and negative testing, cross-browser testing, test reporting, and CI/CD with GitHub Actions**.

**Application Under Test:**  
https://practicesoftwaretesting.com

---

## 🎯 Project Objectives

The main objectives of this project are to:

- Build a maintainable Playwright automation framework
- Apply the Page Object Model (POM) design pattern
- Automate key user journeys
- Perform functional and end-to-end testing
- Implement positive and negative test scenarios
- Perform cross-browser testing
- Implement reusable test components
- Generate test reports
- Execute automated tests through GitHub Actions
- Apply TypeScript in a test automation framework

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | Web UI test automation |
| TypeScript | Programming language |
| Node.js | Runtime environment |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Actions | CI/CD automation |

---

## 🧪 Test Coverage

The current automation suite covers key scenarios including:

### Homepage

- Verify homepage loads successfully
- Verify key page elements are displayed
- Verify product information

### Login

- Verify login page
- Verify successful login
- Verify invalid login scenarios
- Verify validation and error messages

### Registration

- Verify registration page
- Verify required field validation
- Verify registration flow

---

## 🧪 Test Data Management

Login tests require careful test-data management when executed in parallel. Using the same account across concurrent tests can result in session conflicts or account-related failures.

The current configuration uses a controlled worker strategy to avoid conflicts with shared test accounts.

Future improvements may include dedicated test accounts to support reliable parallel execution.

---

## 🔧 Playwright Configuration

The Playwright configuration includes:

- Chromium, Firefox and WebKit browser projects
- Configurable base URL
- Controlled worker configuration
- Screenshot capture on test failure
- Trace collection for debugging
- HTML test reporting
- CI execution through GitHub Actions

---

## 🌐 Cross-Browser Testing

The test suite is configured to run against:

- Chromium
- Firefox
- WebKit

This provides broader coverage and helps identify browser-specific issues.

---

## 📊 Test Reporting

Playwright HTML reports are generated after test execution.

Screenshots and traces are also configured to support investigation and debugging of failed tests.

To view the HTML report:

```bash
npx playwright show-report

```
## 🏗️ Framework Structure

The project follows the **Page Object Model (POM)** approach to separate page interactions from test scenarios.

```text
PracticeSoftwareTesting/
│
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── RegistrationPage.ts
│
├── tests/
│   ├── homepage.spec.ts
│   ├── login.spec.ts
│   └── registration.spec.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md

```

### Folder Description

| Folder / File | Description |
|---------------|-------------|
| `pages/` | Page Object classes containing page locators and reusable page actions |
| `tests/` | Playwright test specifications and test scenarios |
| `.github/workflows/` | GitHub Actions CI/CD workflow configuration |
| `playwright.config.ts` | Playwright configuration including browsers, base URL, workers, screenshots, traces and reporting |
| `package.json` | Project dependencies and npm scripts |
| `package-lock.json` | Locked dependency versions |
| `README.md` | Project documentation |
