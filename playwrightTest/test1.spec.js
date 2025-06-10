//-- TESTES COM NOMES -- //
//COMANDO:
//npx playwright test
// npx playwright test --headed = Com o navegador. Exemplo: npx playwright test -g "basic test"
// npx playwright test --headed --browser=webkit
//com navegador ligado npx playwright test --headed // Todos os navegadores:  npx playwright test --headed --browser=all 
//Um navegador especifico npx playwright test --headed --browser=webkit

const { test, expect } = require('@playwright/test');
 
test.beforeEach(async ({ page }) => { // O que vem antes do teste, preparando o anbiente para todos os testes. 
    await page.goto('https://react-redux.realworld.io/#/login')
 
})

test.describe('Grupo A', () => { //Funciona como uma conjunto fechado de teste
 
test('basic test', async ({ page }) => { // Colocando test.onily, ao executar os testes será executado apenas esse teste. colocando test.skip Ele pulara esse teste especificamente. 
    await expect(page).toHaveTitle('Conduit')
    
    expect(await page.screenshot()).toMatchSnapshot('SignIn.png', {threshold: 0.2});
 
    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
    await page.click('form >> "Sign in"')
    const locator = page.locator('.navbar-brand')
    await expect(locator).toContainText('conduit', {timeout: 30000});
})
 
test('login test', async ({ page }) => {
    await expect(page).toHaveTitle('Conduit')
    
    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
    await page.click('form >> "Sign in"')
    const locator = page.locator('.navbar-brand')
    await expect(locator).toContainText('conduit', {timeout: 30000});
})
})