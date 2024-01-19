const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:3000',
    retries: 2,
    viewportHeight: 1000,
    viewportHeight: 660,
      setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});