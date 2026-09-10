# Practice Software Testing - Playwright Automation

##  Overview

This project is a hands-on test automation project built using **Playwright and TypeScript** against the Practice Software Testing web application.

The project was created to strengthen my practical skills in modern web test automation, including **Page Object Model (POM), cross-browser testing, test configuration, assertions, test reporting, and CI/CD with GitHub Actions**.

Application under test:

https://practicesoftwaretesting.com

---

## 🎯 Project Objectives

The main objectives of this project are to:

- Build a maintainable Playwright automation framework
- Apply the Page Object Model (POM) design pattern
- Automate key user journeys
- Practice functional and end-to-end testing
- Perform cross-browser testing
- Implement reusable test components
- Generate test reports
- Execute automated tests through GitHub Actions
- Gain hands-on experience with TypeScript

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
- Verify validation/error messages

### Registration
- Verify registration page
- Verify required field validation
- Verify registration flow

---

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
