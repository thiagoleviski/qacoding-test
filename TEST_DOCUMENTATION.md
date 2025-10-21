# Test Documentation

## Overview

This document provides technical details about the E2E test implementation for Google Search functionality.

## Test Design

### Test Suite: Google Search UI Tests

**Purpose:** Validate core Google Search functionality through automated browser testing

**Test Framework:** Cypress 15.5.0

**Design Pattern:** Page Object Model (POM)

## Test Cases

### TC-001: Valid Search
**Priority:** High  
**Type:** Functional  
**Automation Status:** ✅ Automated

**Description:**  
Verifies that a user can successfully perform a search on Google and view results.

**Preconditions:**
- Google homepage is accessible
- Browser supports JavaScript

**Test Data:**
- Search Query: "Cypress testing framework"

**Test Steps:**
1. Navigate to https://www.google.com
2. Locate search input field
3. Enter search query
4. Submit search (press Enter)
5. Wait for results page to load
6. Verify results container is visible
7. Verify at least one result is displayed
8. Verify URL contains search query parameters

**Expected Results:**
- Search results page loads successfully
- URL contains: `google.com/search?q=Cypress+testing+framework`
- Results container displays on page
- Multiple search results are visible

**Actual Result:** ✅ Pass

---

### TC-002: Search Result Navigation
**Priority:** High  
**Type:** Functional  
**Automation Status:** ✅ Automated

**Description:**  
Verifies that a user can navigate to external pages by clicking search results.

**Preconditions:**
- Google homepage is accessible
- Search functionality is working

**Test Data:**
- Search Query: "GitHub"

**Test Steps:**
1. Navigate to https://www.google.com
2. Perform search for "GitHub"
3. Wait for search results
4. Click first search result link
5. Wait for navigation
6. Verify URL no longer contains google.com/search

**Expected Results:**
- First search result is clickable
- Browser navigates to external URL
- New page loads successfully
- URL does not contain Google search path

**Actual Result:** ✅ Pass

---

## Element Locators

### Element Selection Strategy

Following 2025 best practices, selectors are chosen in this priority order:

1. ✅ **Semantic attributes** (name, type, role)
2. ✅ **Structural selectors** (parent > child relationships)
3. ✅ **Semantic HTML elements** (h3, a, input)
4. ⚠️ **Stable IDs** (when available)
5. ❌ **Avoid obfuscated classes** (auto-generated names)

### Current Selectors

| Element | Selector | Type | Stability |
|---------|----------|------|-----------|
| Search Input | `textarea[name="q"]` | Attribute | High |
| Results Container | `div[id="rso"]` | Attribute + ID | High |
| Result Items | `div[id="rso"] > div` | Structural | Medium |
| Result Links | `div[id="rso"] h3 a` | Semantic | Medium |

**Note:** Google frequently updates their HTML structure. These selectors prioritize semantic and structural patterns that are less likely to change than auto-generated class names.

## Page Object Model

### GoogleSearchPage Class

**Location:** `cypress/e2e/pageObjects/GoogleSearchPage.js`

**Methods:**

#### `visit()`
Navigates to Google homepage using baseUrl from config.

**Returns:** `this` (for method chaining)

#### `performSearch(query)`
Executes complete search workflow: types query, submits, waits for results.

**Parameters:**
- `query` (string): Search term to enter

**Returns:** `this` (for method chaining)

#### `verifySearchResultsExist()`
Validates that search results are visible and contain items.

**Assertions:**
- Results container is visible
- At least one result item exists

**Returns:** `this` (for method chaining)

#### `clickFirstSearchResult()`
Clicks the first search result link.

**Returns:** `this` (for method chaining)

## Configuration

### Cypress Config (`cypress.config.js`)

```javascript
{
  baseUrl: 'https://www.google.com',
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  retries: {
    runMode: 2,      // CI/CD: retry failed tests twice
    openMode: 0      // Dev: no retries for faster debugging
  }
}
```

### Timeouts

| Operation | Timeout | Reason |
|-----------|---------|--------|
| Default Command | 10s | Standard wait for elements |
| Page Load | 30s | External site may be slower |
| Results Container | 10s | Explicit wait after search |

## CI/CD Integration

### Recommended Pipeline

```yaml
# Example GitHub Actions workflow
- name: Run E2E Tests
  run: npm test
  
- name: Upload Test Videos
  if: failure()
  uses: actions/upload-artifact@v3
  with:
    name: cypress-videos
    path: cypress/videos
```

### Test Execution

- **Retries:** 2 attempts in CI mode
- **Video Recording:** Always enabled
- **Screenshots:** Captured on failure
- **Browser:** Chrome (default)

## Known Limitations

1. **CAPTCHA Detection**
   - Google may show CAPTCHA when detecting automation
   - No reliable workaround for third-party sites
   - Tests may fail if CAPTCHA appears

2. **Selector Stability**
   - Google updates their HTML structure frequently
   - Some selectors may require periodic updates
   - Structural selectors are more resilient than classes

3. **Rate Limiting**
   - Running tests too frequently may trigger rate limits
   - Consider adding delays in CI/CD pipelines

## Maintenance Guidelines

### When Google Updates Their UI

1. Run tests to identify broken selectors
2. Inspect current HTML structure in DevTools
3. Update selectors in `GoogleSearchElements.js`
4. Prioritize semantic/structural selectors
5. Avoid obfuscated class names
6. Re-run tests to verify fixes

### Adding New Tests

1. Identify test scenario
2. Add elements to `GoogleSearchElements.js` if needed
3. Add methods to `GoogleSearchPage.js` if needed
4. Create test case in `google-search.cy.js`
5. Follow naming convention: `should [action] [expected result]`
6. Ensure tests are independent and can run in any order

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025 | Initial implementation with 2025 best practices |

---

**Last Updated:** 2025  
**Maintained by:** Thiago QA Engineer
