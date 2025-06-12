// -- PRIMEIRO EXEMPLO DE TESTES COM JEST E PLAYWRIGHT JUNTOS -- //

const { chromium } = require('playwright');

describe('Post', () => { // Suite de testes
  let browser;
  let context;
  let page;

  beforeAll(async () => { // Configuração do navegador e da página
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => { // Fechamento do navegador após os testes
    await browser.close();
  });

  test('Sign In', async () => {
    await page.goto('https://react-redux.realworld.io/#/login');
    const title = await page.title();
    expect(title).toBe('Conduit');

    await page.fill('input[type="email"]', 'alanvoigt@yahoo.com.br');
    await page.press('input[type="email"]', 'Tab');
    await page.type('input[type="password"]', 'test123');
    
    await page.click('form >> text=Sign in');

    await page.waitForSelector('a[href="#/editor"]', { timeout: 30000 }); 
  }, 80000);

});