const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bq48ee',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
