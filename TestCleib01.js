const {chromium} = require('playwright');

// -- CT001 Validating the researcher -- //

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 90 })
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.jw.org/en/');
    await page.fill('input[type="text"]', 'Dead');
    await page.press('input[type="text"]', 'Enter');
    await browser.close();
})()