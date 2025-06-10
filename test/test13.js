//--  TESTE (MOBILE) EMULADOR  --//

const { chromium, devices } = require('playwright');
const expect = require('expect');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Lança o navegador (não em modo headless)

  const iPhone11 = devices["iPhone 11 Pro"]; // Mais tipos de aparelhos podem ser testados; consulte a documentação.
  const context = await browser.newContext({ ...iPhone11 }); // Indicando que será aberto como um iPhone 11.

  const page = await context.newPage();

  await page.goto('https://www.jw.org/Pt'); // Acessa a página inicial do site
})();