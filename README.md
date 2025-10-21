# Google Search - E2E Test Suite

Automated UI tests for Google Search functionality using Cypress following 2025 best practices.

## 📋 Test Coverage

This test suite covers two core user scenarios:

1. **Valid Search** - Verifies search functionality and results display
2. **Search Result Navigation** - Validates navigation when clicking search results

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
npm install
```

### Running Tests

```bash
# Run all tests (headless)
npm test

# Run tests with visible browser
npm run test:headed

# Open Cypress Test Runner
npm run open

# Run tests in specific browser
npm run test:chrome
npm run test:firefox
```

## 📁 Project Structure

```
qa-test/
├── cypress/
│   ├── e2e/
│   │   ├── elements/
│   │   │   └── GoogleSearchElements.js    # Element locators
│   │   ├── pageObjects/
│   │   │   └── GoogleSearchPage.js        # Page Object Model
│   │   └── tests/
│   │       └── google-search.cy.js        # Test specifications
│   └── support/
│       ├── commands.js                     # Custom commands
│       └── e2e.js                          # Global configuration
├── cypress.config.js                       # Cypress configuration
└── package.json                            # Dependencies and scripts
```

## 🧪 Test Cases

### Test 1: Valid Search
**Objective:** Verify that users can perform a search and see results

**Steps:**
1. Navigate to Google homepage
2. Enter search query "Cypress testing framework"
3. Submit search
4. Verify search results are displayed
5. Verify URL contains search parameters

**Expected Result:** Search results page displays with relevant results

### Test 2: Search Result Navigation
**Objective:** Verify that users can navigate to search results

**Steps:**
1. Navigate to Google homepage
2. Perform search for "GitHub"
3. Click on first search result
4. Verify navigation to external URL

**Expected Result:** User is redirected to the clicked result's page

## 🏗️ Architecture

This project follows industry-standard patterns:

- **Page Object Model (POM):** Encapsulates page interactions and elements
- **Separation of Concerns:** Elements, actions, and tests are separated
- **Reusability:** Page objects can be reused across multiple tests
- **Maintainability:** Changes to UI only require updates in one place

## ⚙️ Configuration

Key Cypress configurations:

- **Viewport:** 1920x1080 (Full HD)
- **Timeout:** 10s default, 30s page load
- **Retries:** 2 attempts in CI/CD, 0 in interactive mode
- **Video:** Enabled for debugging
- **Screenshots:** Captured on test failures

## 📝 Best Practices Applied

✅ Structural selectors (avoiding obfuscated classes)  
✅ Semantic HTML targeting (h3, a tags)  
✅ Explicit waits (no arbitrary timeouts)  
✅ Method chaining support (return this)  
✅ Clear test descriptions  
✅ Consistent code formatting  
✅ No `force: true` clicks  
✅ Proper error handling

## 🐛 Troubleshooting

**CAPTCHA Issues:** Google may show CAPTCHA during automated tests. This is expected behavior when detecting automation.

**Flaky Tests:** If tests fail intermittently, check:
- Network connectivity
- Google's rate limiting
- Element selector changes (Google updates frequently)

## 📄 License

ISC

## 👤 Author

Thiago QA Engineer
