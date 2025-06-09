const { chromium } = require('playwright');

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

/*
(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 90 })
  const context = await browser.newContext({ storageState: 'state.json' })
  const page = await context.newPage()
  
  await page.goto('https://www.saucedemo.com/')
  const html = await page.$('//a[contains(@class, "shopping_cart_link")]')
  //expect(html).toMatch('Your Feed')
  if (html) {
    console.log('✅ Você está na home!')
  } else {
    console.error('❌ Você não está na home')
  }

  await browser.close()
})()
*/