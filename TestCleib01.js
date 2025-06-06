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
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.jw.org/en/');
  await page.fill('input[type="text"]', 'Dead');
  await page.press('input[type="text"]', 'Enter');
  await page.waitForTimeout(5000);
  const magazine = await page.$('text="Is There Hope for the Dead?"');
  await magazine.click();
  const magazinePdf = await page.$('//div[@class="digitalPubFormat jsWrittenFormat"]');
  await magazinePdf.click();

  await browser.close();
})();
