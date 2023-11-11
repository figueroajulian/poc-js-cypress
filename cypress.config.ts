const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:{
    baseUrl: 'https://the-internet.herokuapp.com/',
    baseUrlAPI: 'https://rickandmortyapi.com/api',

    experimentalRunAllSpecs: true,
    trashAssetsBeforeRuns: true,
    experimentalTaskAutomation: true,
    setupNodeEvents(on, config) {
      return config
    },
  },
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'QA Cypress Report',
    ignoreVideos: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  screenshotOnRunFailure: true,
})
