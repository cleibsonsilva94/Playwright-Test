const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.jw.org/en/')
});

test.describe('Grupo B JW', () => {

    test('Downloading magazine', async ({ page }) => {
        await page.fill('input[type="text"]', 'Dead');
        await page.press('input[type="text"]', 'Enter');
        await page.waitForTimeout(5000);
        const magazine = await page.$('text="Is There Hope for the Dead?"');
        await magazine.click();
        const magazinePdf = await page.$('//div[@class="digitalPubFormat jsWrittenFormat"]');
        await magazinePdf.click();
        await page.waitForTimeout(3000);
    });
});

test.describe('Grupo C JW Donations', () => {
    // Outro teste de login (sem captura de tela)
    test('Donations', async ({ page }) => {
        await page.goto('https://www.jw.org/en/');
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Donations (opens new window)' }).click();
        const page1 = await page1Promise;
        await page1.goto('https://donate.jw.org/en/BRA/home');
        await page1.getByRole('link', { name: 'Your Congregation' }).click();
        await page1.getByRole('button', { name: 'Find Your Congregation' }).click();
        await page1.getByRole('combobox', { name: 'Congregation' }).click();
        await page1.getByRole('combobox', { name: 'Congregation' }).press('CapsLock');
        await page1.getByRole('combobox', { name: 'Congregation' }).fill('Iputinga');
        await page1.getByText('Iputinga - Recife PE').click();
        await page1.locator('div').filter({ hasText: /^Iputinga - Recife PE$/ }).nth(1).click();
        await page1.getByRole('definition').filter({ hasText: 'Est. do Barbalho, 249' }).click();
        await page1.getByText('Iputinga - Recife PE').click();
        await page1.getByTestId('ptrn-modal-content').getByRole('button', { name: 'Select' }).click();
        await page1.getByRole('textbox', { name: 'Amount (BRL)' }).fill('2005118181');
        await page.screenshot({ path: 'SignIn.png', fullPage: true })
    });
});