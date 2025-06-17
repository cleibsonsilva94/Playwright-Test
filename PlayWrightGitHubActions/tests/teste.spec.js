const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test('basic test', async () => {
    const browser = await chromium.launch({headless:true})
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://www.saucedemo.com/')

    await page.fill('input[id="user-name"]', 'visual_user')
    await page.press('input[id="user-name"]', 'Tab')
    await page.type('input[type = "password"]', 'secret_sauce')
    await page.press('input[type="text"]', 'Enter');


    const html = await page.innerHTML('html');
    expect(html).toContain('shopping_cart_link');


    // Screenshot
    await page.screenshot({path: 'SignIng.png', fullPage: true})

    await browser.close()
})