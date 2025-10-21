const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {
      return config;
    },
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    watchForFileChanges: true,
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 0
    }
  }
});
