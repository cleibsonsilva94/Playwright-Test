const { test, expect } = require('@playwright/test');
// -- COMANDOS ÚTEIS PARA EXECUÇÃO DE TESTES COM PLAYWRIGHT -- //

// ------------------------------------------------------------
// Executa todos os testes com o navegador visível (modo headed)
// ------------------------------------------------------------
//npx playwright test --headed

// Executa todos os testes do arquivo com navegador visível
// (o arquivo atual, se o comando for executado dentro da pasta)
//npx playwright test --headed 

// ------------------------------------------------------------
// Executa todos os testes de um arquivo específico
// ------------------------------------------------------------
//px playwright test testsCleib.spec.js

// ------------------------------------------------------------
// Executa os testes com navegador visível filtrando pelo nome do teste
// ------------------------------------------------------------
// Exemplo:
//npx playwright test -g "basic test" --headed
//npx playwright test -g "Downloading magazine" --headed

// ------------------------------------------------------------
// Executa testes de um grupo específico pelo nome do grupo
// ------------------------------------------------------------
//npx playwright test -g "Grupo A"

// ------------------------------------------------------------
// Executa os testes no navegador WebKit com navegador visível
// ------------------------------------------------------------
//npx playwright test --headed --browser=webkit

// ------------------------------------------------------------
// Executa os testes com todos os navegadores visíveis (Chromium, Firefox, WebKit)
// ------------------------------------------------------------
//npx playwright test --headed --browser=all

// ------------------------------------------------------------
// Dicas úteis dentro do código dos testes:
// ------------------------------------------------------------
// - Use `test.only` para executar apenas um teste específico
// - Use `test.skip` para pular a execução de um teste específico


test.beforeEach(async ({ page }) => { // Executa antes de cada teste. Aqui é onde preparamos o ambiente de teste.
    await page.goto('https://react-redux.realworld.io/#/login');
});

test.afterEach(async ({ page }) => { // Executa após cada teste. Aqui indicamos que o navegador pode ser fechado. (O Playwright já faz isso automaticamente, mas mantemos para clareza.)
    await page.close();
});

// Agrupamento de testes sob o nome "Grupo A"
test.describe('Grupo A', () => {
    
    test('basic test', async ({ page }) => {
        await expect(page).toHaveTitle('Conduit');

        // Captura de tela e comparação com imagem esperada
        expect(await page.screenshot()).toMatchSnapshot('SignIn.png', { threshold: 0.2 });

        await page.fill('input[type="email"]', 'alanvoigt@yahoo.com.br');
        await page.press('input[type="email"]', 'Tab');
        await page.type('input[type="password"]', 'test123');
        await page.click('form >> "Sign in"');

        const locator = page.locator('.navbar-brand');
        await expect(locator).toContainText('conduit', { timeout: 30000 });
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