# Playwright E2E Tests

End-to-end test suite built with [Playwright](https://playwright.dev/) using the **Page Object Model** pattern and custom test fixtures.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd e2etests/tests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Configure environment variables

Create a `.env` file in the project root with the following variables:

```env
APP_URL=https://your-app-url.com/login
APP_USERNAME=your-email@example.com
APP_PASSWORD=your-password
```

> **Note:** Never commit the `.env` file to version control. It is already listed in `.gitignore`.

## Project Structure

```
├── playwright.config.ts           # Playwright configuration
├── .env                           # Environment variables (not committed)
├── package.json                   # Dependencies and scripts
│
└── tests/
    ├── config/
    │   └── test-data.ts           # Test data and env variable loading
    │
    ├── fixtures/
    │   ├── test-fixtures.ts       # Custom Playwright fixtures (page object DI)
    │   └── test-pages.ts          # TypeScript type definitions for fixtures
    │
    ├── pages/
    │   ├── shared/                # Shared page objects (used across domains)
    │   │   ├── loginPage.ts       # Login page actions and locators
    │   │   ├── menuProfilePage.ts # Profile menu (language switch, etc.)
    │   │   └── sidebarMenuPage.ts # Sidebar navigation menu
    │   │
    │   ├── orders/                # Order domain page objects
    │   │   └── orderCreation.ts   # Order creation flow
    │   │
    │   └── materials/             # Materials domain page objects
    │       └── materialsPage.ts   # Materials page navigation
    │
    ├── specs/                     # Test specifications (organized by domain)
    │   ├── orders/
    │   │   └── order-creation.spec.ts
    │   └── smoke/                 # Smoke tests (placeholder)
    │
    └── utils/                     # Utility/helper functions (placeholder)
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test specs/orders/order-creation.spec.ts

# Run tests for a specific domain
npx playwright test specs/orders/

# Run in headed mode (browser visible)
npx playwright test --headed

# Run in UI mode (interactive)
npx playwright test --ui

# Run only on Chromium
npx playwright test --project=chromium
```

## Viewing Test Reports

After running tests, an HTML report is generated automatically:

```bash
npx playwright show-report
```

## Adding a New Test

1. Create a new `.spec.ts` file under `tests/specs/<domain>/`
2. Import the custom fixtures:
   ```ts
   import { test } from '../../fixtures/test-fixtures';
   ```
3. Write your test using the injected page objects:
   ```ts
   test('my new test', async ({ loginPage, testData, sidebarMenuPage }) => {
     await loginPage.goto(testData.appUrl);
     await loginPage.loginWithUsernameAndPassword(testData.username, testData.password);
     // ... test steps
   });
   ```

## Adding a New Page Object

1. Create a new class file under `tests/pages/<domain>/`
2. Add the type to [`tests/fixtures/test-pages.ts`](tests/fixtures/test-pages.ts)
3. Register the fixture in [`tests/fixtures/test-fixtures.ts`](tests/fixtures/test-fixtures.ts)
4. Use it in any test via destructuring

## Configured Browser Projects

| Project        | Device          |
|----------------|-----------------|
| Chromium       | Desktop Chrome  |
| Firefox        | Desktop Firefox |
| WebKit         | Desktop Safari  |
| Mobile Safari  | iPhone 13       |
