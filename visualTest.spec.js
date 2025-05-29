require('dotenv').config();
import { test } from '@playwright/test';
import { Eyes, Target } from '@applitools/eyes-playwright';

test('Visual AI Test - Demo App', async ({ page }) => {
  const eyes = new Eyes();
  console.log('Applitools API Key:', process.env.APPLITOOLS_API_KEY); // Debug line
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
  eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
  await eyes.open(page, 'Demo App', 'Visual AI Test');
  await page.goto('https://demo.applitools.com');
  await eyes.check('Login Page', Target.window());
  await eyes.close();
});
