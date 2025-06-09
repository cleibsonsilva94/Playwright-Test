// -- RECORDERS - GERAÇÃO DE CÓDIGOS INSTANTÂNEOS COM BASE NA NAVEGAÇÃO (1 FORMA) -- //
// -- ATENÇÃO COMANDO = npx playwright codegen + URL
// -- 2 FORMA POR MEIO DO Headless Recorder -- //
const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page = await context.newPage();

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
}) ()