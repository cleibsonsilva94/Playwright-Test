// --- COMO SÃO TRATADAS AS PAUSAS, ESPERAS POR ELEMENTOS E CARREGAMENTO DE PÁGINAS NO PLAYWRIGHT --- //

const { chromium } = require('playwright');
const expect = require('expect');

(async () => {

  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  context.setDefaultTimeout(45000);

  const page = await context.newPage();
  page.setDefaultTimeout(45000);

  await page.goto('https://react-redux.realworld.io/#/login');
  const title = await page.title();
  expect(title).toBe('Conduit');
  
  await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com');
  await page.press('input[type = "email"]', 'Tab');
  await page.type('input[type = "password"]', 'test123');
  await page.click('form >> "Sign in"', { timeout: 45000 });

  // Espera um tempo fixo de 5 segundos — uso recomendado apenas para testes simples ou debugging
  await page.waitForTimeout(5000);

  // Aguarda até que o seletor '.ion-compose' esteja presente na página, garantindo que o elemento carregou
  await page.waitForSelector('.ion-compose');

  /*
  // Exemplo comentado: esperar a navegação após o clique no botão de login,
  // garantindo que a página foi carregada antes de prosseguir
  await Promise.all([
      page.waitForNavigation(),
      await page.click('form >> "Sign in"'),
    ]);
  */

  // Aguarda a abertura de uma nova aba ao clicar em um link com target="_blank"
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[target="_blank"]') // Abre uma nova aba
  ]);

  // Espera o carregamento completo da página atual antes de continuar
  await page.waitForLoadState();
  await browser.close();

})();