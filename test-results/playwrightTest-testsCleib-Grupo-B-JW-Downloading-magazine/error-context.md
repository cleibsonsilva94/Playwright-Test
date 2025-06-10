# Test info

- Name: Grupo B JW >> Downloading magazine
- Location: C:\Users\CLELIMA\Documents\CDG_Test\playwrightTest\testsCleib.spec.js:9:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.jw.org/en/", waiting until "load"

    at C:\Users\CLELIMA\Documents\CDG_Test\playwrightTest\testsCleib.spec.js:4:16
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test.beforeEach(async ({ page }) => {
>  4 |     await page.goto('https://www.jw.org/en/')
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
   5 | });
   6 |
   7 | test.describe('Grupo B JW', () => {
   8 |
   9 |     test('Downloading magazine', async ({ page }) => {
  10 |         await expect(page).toHaveTitle('Conduit');
  11 |         await page.waitForLoadState();
  12 |         await page.fill('input[type="text"]', 'Dead');
  13 |         await page.press('input[type="text"]', 'Enter');
  14 |         await page.waitForTimeout(5000);
  15 |         const magazine = await page.$('text="Is There Hope for the Dead?"');
  16 |         await magazine.click();
  17 |         const magazinePdf = await page.$('//div[@class="digitalPubFormat jsWrittenFormat"]');
  18 |         await magazinePdf.click();
  19 |         await page.waitForTimeout(3000);
  20 |     });
  21 |
  22 |     // Outro teste de login (sem captura de tela)
  23 |     test('login test', async ({ page }) => {
  24 |         await expect(page).toHaveTitle('Conduit');
  25 |
  26 |         await page.fill('input[type="email"]', 'alanvoigt@yahoo.com.br');
  27 |         await page.press('input[type="email"]', 'Tab');
  28 |         await page.type('input[type="password"]', 'test123');
  29 |         await page.click('form >> "Sign in"');
  30 |
  31 |         const locator = page.locator('.navbar-brand');
  32 |         await expect(locator).toContainText('conduit', { timeout: 30000 });
  33 |     });
  34 | });
  35 |
```