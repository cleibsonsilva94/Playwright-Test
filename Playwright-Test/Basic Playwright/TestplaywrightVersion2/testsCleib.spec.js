const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/', { timeout: 60000 });  // 60s
  });
  
test.describe('JW Research', () => {

    test('Downloading magazine', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="login-credentials"]').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_souce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="continue-shopping"]').click();
    });
});

test.describe('JW Donations', () => {

    test('Donations', async ({ page }) => {
        await page.getByRole('link', { name: 'Donations (opens new window)' }).click();
        const page1 = await page1Promise;
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