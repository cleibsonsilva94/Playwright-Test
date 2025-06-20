//-- TESTE DE CRIAÇÃO DE PDF --//

const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 90 });
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://www.jw.org/en/')

    //await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    //await page.press('input[type = "email"]', 'Tab')
    //await page.type('input[type = "password"]', 'test123')
    //await page.click("form >> 'Sign in'")

    //const html = await page.innerHTML('.feed-toggle')
   // expect(html).toMatch('Your Feed')

    await page.pdf({ path:'mypage.pdf' })

    await browser.close()
})()