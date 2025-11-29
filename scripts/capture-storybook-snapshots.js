/* GENERATED_BY: Antigravity QAAgent */
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:6006'); // Storybook

    // Logic to iterate stories and screenshot
    await page.screenshot({ path: 'tests/snapshots/example.png' });

    await browser.close();
})();
