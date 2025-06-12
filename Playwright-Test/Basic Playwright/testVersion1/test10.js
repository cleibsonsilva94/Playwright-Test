// - UPLOAD E DOWNLOAD DE ARQUIVOS -- //

const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 })
    const context = await browser.newContext({ acceptDownloads: true })
    const page = await context.newPage()

    await page.goto('https://github.com/gothinkster/react-redux-realworld-example-app')
    
    await page.click("summary[class='prc-Button-ButtonContent-HKbr-']")
    
    const [ download ] = await Promise.all([
        page.waitForEvent('download'), 
        page.click('.octicon-file-zip')
    ])

    const path = await download.path()
    console.log(path)

    download.saveAs('./download.zip')
    
    await browser.close()
})()

/*
(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')
    
    await page.setInputFiles('input[type="file"]', './TestFile.pdf')

    await page.click('input[type="submit"]')

    const html = await page.innerHTML('p')
    expect(html).toMatch("You've uploaded a file.")
    
    await browser.close()
})()
*/