const { test } = require('@playwright/test');
const { Eyes, Target } = require('@applitools/eyes-playwright');
const testData = require('../testData/regressionData');

test.describe('Regression - Visual AI Tests', () => {
  for (const { url, name } of testData) {
    test(`Regression Check - ${name}`, async ({ page }) => {
      const eyes = new Eyes();
      eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

      await eyes.open(page, 'Visual AI - Regression Suite', `Regression - ${name}`);
      await page.goto(url);
      await eyes.check(name, Target.window());
      await eyes.close();
    });
  }
});
