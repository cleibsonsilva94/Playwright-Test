const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.jw.org/en/')
});

test.describe('Grupo B JW', () => {

    test('Downloading magazine', async ({ page }) => {
        await expect(page).toHaveTitle('Conduit');
        await page.waitForLoadState();
        await page.fill('input[type="text"]', 'Dead');
        await page.press('input[type="text"]', 'Enter');
        await page.waitForTimeout(5000);
        const magazine = await page.$('text="Is There Hope for the Dead?"');
        await magazine.click();
        const magazinePdf = await page.$('//div[@class="digitalPubFormat jsWrittenFormat"]');
        await magazinePdf.click();
        await page.waitForTimeout(3000);
    });

    // Outro teste de login (sem captura de tela)
    test('login test', async ({ page }) => {
        await expect(page).toHaveTitle('Conduit');

        await page.fill('input[type="email"]', 'alanvoigt@yahoo.com.br');
        await page.press('input[type="email"]', 'Tab');
        await page.type('input[type="password"]', 'test123');
        await page.click('form >> "Sign in"');

        const locator = page.locator('.navbar-brand');
        await expect(locator).toContainText('conduit', { timeout: 30000 });
    });
});
