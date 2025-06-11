// -- TRABALHANDO COM MÚLTIPLAS PÁGINAS/POPUP/USERS -- //

const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')
    
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('a[target="_blank"]') // Opens a new tab
    ])

    console.log(await page.title())
    console.log(await newPage.title())

    await browser.close()
})()


(async () => {
    const browser = await chromium.launch()

    const userContext = await browser.newContext()
    const adminContext = await browser.newContext()

    await browser.close()
})()

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    // ....
    
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open')    // Opens a popup
    ])
    
    // ....

    await browser.close()
})()

const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const pageOne = await context.newPage()
    const pageTwo = await context.newPage()

    await browser.close()
})()