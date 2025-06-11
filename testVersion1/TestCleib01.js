const { chromium } = require('playwright');
const expect = require('expect');

// -- CT001 Validating the researcher -- //
/*
(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 90 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.jw.org/en/');
  await page.fill('input[type="text"]', 'Dead');
  await page.press('input[type="text"]', 'Enter');
  await page.waitForTimeout(5000);

  await browser.close();
})();
*/


// -- CT002 Validating research results and applying many functions -- //
/*
(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 90 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.jw.org/en/');
  await page.reload();
  await page.fill('input[type="text"]', 'Dead');
  await page.press('input[type="text"]', 'Enter');
  await page.waitForTimeout(5000);
  await page.goBack();
  await page.waitForTimeout(5000);
  await page.goForward();
  await page.waitForTimeout(5000);

  const result = await page.locator('text=What Hope for the Dead?').first().isVisible();
  await page.screenshot({path: 'SignIn.png', fullPage: true})
  expect(result).toBe(true);

  await browser.close();
})();

// -- CT002 Validating search with if -- //
/*
(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 90 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.jw.org/en/');
  await page.fill('input[type="text"]', 'Dead');
  await page.press('input[type="text"]', 'Enter');

  await page.waitForTimeout(5000);

  const result = await page.locator('text=What Hope for the Dead?').first().isVisible();

  if (result) {
    console.log('Resultado encontrado: O item "What Hope for the Dead?" está visível.');
  } else {
    console.error('Resultado não encontrado: O item "What Hope for the Dead?" não está visível.');
    process.exit(1); // para encerrar com erro se estiver em CI/CD
  }

  await browser.close();
})();
*/

// -- CT003 Downloading magazine -- //

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 90 });
  const context = await browser.newContext({
    acceptDownloads: true
  }); // Garantindo que o contexto faça o download

  const page = await context.newPage();
  // Interagindo com o pesquisador
  await page.goto('https://www.jw.org/en/');
  await page.waitForLoadState();
  await page.fill('input[type="text"]', 'Dead');
  await page.press('input[type="text"]', 'Enter');
  await page.waitForTimeout(5000);
  // Escolhendo publicação
  const magazine = await page.$('text="Is There Hope for the Dead?"');
  await magazine.click(); 
  // Clicando para baixar
  const magazinePdf = await page.$('//div[@class="digitalPubFormat jsWrittenFormat"]');
  await magazinePdf.click();
  await page.waitForTimeout(3000);

  // Esperar e capturar o download corretamente
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('.fileSize')
  ]);

  // Salvar o arquivo baixado
  const downloadPath = await download.path();
  console.log('Arquivo temporário:', downloadPath); // Salvando em arquivo temporário

  await download.saveAs('./downloads/revista.pdf');
  console.log('Download salvo com sucesso.');

  await browser.close();
})();

  //const [ download ] = await Promise.all([
   // page.waitForEvent('standardModal-content'), 
   // page.click('//a[@href="https://akamd1.jw-cdn.org/sg2/p/0c24b23/1/o/wp_E_20131001.pdf"]')
//])

//const path = await download.path()
//console.log(path)

//download.saveAs('./download.zip')

// -- CT004 Save credentials -- //

(async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  
  await page.goto('https://www.saucedemo.com/')
  await page.fill('input[data-test="username"]', 'standard_user')
  await page.press('input[data-test="username"]', 'Tab')
  await page.type('input[data-test="password"]', 'secret_sauce')
  await page.click('form >> "Login"')
  //const html = await page.innerHTML('.shopping_cart_link')
  //expect(html).toMatch('shopping_cart_link')

  const html = await page.$('//a[contains(@class, "shopping_cart_link")]')
if (html) {
  console.log('✅ Você está na home!')
} else {
  console.error('❌ Você não está na home')
}
await context.storageState({ path: 'state.json' })
  await browser.close()
})()