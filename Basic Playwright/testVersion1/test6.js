// -- BOTÕES DA PÁGINA: VOLTAR, AVANÇAR E ATUALIZAR (REFRESH) -- //

const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');

    const title = await page.title();
    expect(title).toBe('Conduit'); // Valida o título da página

    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br');
    await page.press('input[type = "email"]', 'Tab');
    await page.type('input[type = "password"]', 'test123');
    await page.click('form >> "Sign in"');

    await page.click('.ion-compose'); // Acessa a uma URL
    const url = await page.url();
    expect(url).toContain('editor'); // Valida que a URL contém a palavra 'editor'

    await page.goBack(); // Volta para a página anterior
    await page.waitForTimeout(2000);

    await page.goForward(); // Avança para a próxima página
    await page.waitForTimeout(2000);

    await page.reload(); // Recarrega a página (equivalente ao F5)

    await browser.close();
})();
