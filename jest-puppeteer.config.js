// jest-puppeteer.config.js
module.exports = {
  launch: {
    headless: false,
    slowMo: 500,
    args: ['--no-sandbox'], // to fix error when launching browser
  }
}