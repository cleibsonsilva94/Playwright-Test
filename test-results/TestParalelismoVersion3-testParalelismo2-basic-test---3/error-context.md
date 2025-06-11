# Test info

- Name: basic test - 3
- Location: C:\Users\CLELIMA\Documents\CDG_Test\TestParalelismoVersion3\testParalelismo2.spec.js:8:1

# Error details

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[type = "email"]')

    at C:\Users\CLELIMA\Documents\CDG_Test\TestParalelismoVersion3\testParalelismo2.spec.js:10:16
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
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test.beforeEach(async ({ page }) => {
   4 |     await page.goto('https://react-redux.realworld.io')
   5 |     console.log('worker: ' + process.env.TEST_WORKER_INDEX)
   6 | })
   7 |
   8 | test('basic test - 3', async ({ page }) => {
   9 |     await expect(page).toHaveTitle('Conduit')
> 10 |     await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
     |                ^ Error: page.fill: Test timeout of 30000ms exceeded.
  11 |     await page.press('input[type = "email"]', 'Tab')
  12 |     await page.type('input[type = "password"]', 'test123')
  13 |     await page.click('form >> "Sign in"')
  14 |     const locator = page.locator('.navbar-brand');
  15 |     await expect(locator).toContainText('conduit', { timeout: 30000 });
  16 | })
```