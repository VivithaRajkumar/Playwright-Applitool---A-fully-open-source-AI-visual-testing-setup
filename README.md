Install dependencies
npm install

Add your Applitools API key
Create a .env file in the root:
env
APPLITOOLS_API_KEY=your_key_here

Run Tests

# Run sanity suite
npx playwright test tests/sanity.spec.js

# Run regression suite
npx playwright test tests/regression.spec.js

# 🎯 Playwright + Applitools: AI-Powered Visual Testing Framework

This is a fully open-source AI visual regression testing setup using **Playwright** and **Applitools Eyes**. 
It supports modular test design, separates sanity and regression test suites, and will be extended for data-driven testing.

---

Folder Structure

ai-visual-testing-demo/
│
├── testData/
│   ├── sanityData.js
│   └── regressionData.js
│
├── tests/
│   ├── sanity.spec.js
│   └── regression.spec.js
│
├── .env
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md

## 🚀 Features

- 🤖 AI-based visual comparison using Applitools
- 🎭 Playwright for browser automation
- ✅ Sanity and regression suite separation
- 🛠️ Modular setup using utility functions
- 🔐 API key handling via `.env`
- 🔄 Data-driven testing (coming soon)

 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 With Applitools Visual AI:
	1. Captures a DOM-aware Screenshot
It snapshots the page and understands elements in context—not just raw pixels.
	2. Performs AI-powered Visual Comparison

The AI:
		○ Knows the difference between real UI bugs vs expected differences (e.g., dynamic data like a date).
		○ Understands layout shifts, font changes, missing buttons.
		○ Ignores "noise" and only flags true regressions.
	3. Cross-Browser & Cross-Device Intelligence
It uses trained ML models to simulate how your page would render on different devices, screen sizes, and browsers.

What You Gain
Traditional QA	With Visual AI (Applitools)
Flaky pixel checks	Smart visual difference detection
Missed cross-browser bugs	Auto checks multiple browsers/devices
Tedious maintenance	Easy updates via baseline snapshots
Low test confidence	High accuracy visual validations








![image](https://github.com/user-attachments/assets/d1487956-bc2c-44e6-8880-d1975af1d6c5)
