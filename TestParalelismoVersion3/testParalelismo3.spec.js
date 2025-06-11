const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/#/login')
    console.log('worker: ' + process.env.TEST_WORKER_INDEX)
})

test('basic test - 3', async ({ page }) => {
    await expect(page).toHaveTitle('Conduit')
    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
    await page.click('form >> "Sign in"')
    const locator = page.locator('.navbar-brand');
    await expect(locator).toContainText('conduit', { timeout: 30000 });
})