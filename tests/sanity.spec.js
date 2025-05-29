const { test } = require('@playwright/test');
const { Eyes, Target } = require('@applitools/eyes-playwright');
const testData = require('../testData/sanityData');

test.describe('Sanity - Visual AI Tests', () => {
  for (const { url, name } of testData) {
    test(`Sanity Check - ${name}`, async ({ page }) => {
      const eyes = new Eyes();
      eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

      await eyes.open(page, 'Visual AI - Sanity Suite', `Sanity - ${name}`);
      await page.goto(url);
      await eyes.check(name, Target.window());
      await eyes.close();
    });
  }
});
