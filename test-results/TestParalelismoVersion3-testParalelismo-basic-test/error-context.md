# Test info

- Name: basic test
- Location: C:\Users\CLELIMA\Documents\CDG_Test\TestParalelismoVersion3\testParalelismo.spec.js:13:1

# Error details

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[type = "email"]')

    at C:\Users\CLELIMA\Documents\CDG_Test\TestParalelismoVersion3\testParalelismo.spec.js:15:16
```

# Page snapshot

```yaml
- navigation:
  - link "conduit":
    - /url: "#/"
  - list:
    - listitem:
      - link "Home":
        - /url: "#/"
    - listitem:
      - link "Sign in":
        - /url: "#login"
    - listitem:
      - link "Sign up":
        - /url: "#register"
- heading "conduit" [level=1]
- paragraph: A place to share your knowledge.
- list:
  - listitem:
    - link "Global Feed":
      - /url: ""
- text: Loading...
- paragraph: Popular Tags
- text: Loading Tags...
- link " Fork on GitHub":
  - /url: https://github.com/gothinkster/react-redux-realworld-example-app
```

# Test source

```ts
   1 | // -- TESTES RELACIONADOS A ABAS DISTINTAS DE TRABALHO -- // 
   2 | // -- COMANDO npx playwright test TestParalelismoVersion3
   3 | // -- npx playwright test TestParalelismoVersion3/testParalelismo.spec.js -g "basic test" --// Rodando teste especifico. 
   4 |
   5 |
   6 | const { test, expect } = require('@playwright/test');
   7 |
   8 | test.beforeEach(async ({ page }) => {
   9 |     await page.goto('https://react-redux.realworld.io')
  10 |     console.log('worker: ' + process.env.TEST_WORKER_INDEX)
  11 | })
  12 |
  13 | test('basic test', async ({ page }) => {
  14 |     await expect(page).toHaveTitle('Conduit')
> 15 |     await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
     |                ^ Error: page.fill: Test timeout of 30000ms exceeded.
  16 |     await page.press('input[type = "email"]', 'Tab')
  17 |     await page.type('input[type = "password"]', 'test123')
  18 |     await page.click('form >> "Sign in"')
  19 |     const locator = page.locator('.navbar-brand');
  20 |     await expect(locator).toContainText('conduit', { timeout: 30000 });
  21 | }) 
```