const { defineConfig } = require('cypress');
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Base URL for your tests
    baseUrl: 'https://opensource-demo.orangehrmlive.com',

    // Folder where your test files are located
    specPattern: 'cypress/e2e/',

    // Support file where commands.js and POM imports are
    supportFile: 'cypress/support/e2e.js',
  },

};
