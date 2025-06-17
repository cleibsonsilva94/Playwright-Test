const { chromium, webkit, firefox } = require('playwright');//Adicionando os navegadores no inicio. 

(async () => {
    for (const browserType of [chromium, webkit, firefox]){//Adicionando uma variavel ao navegador. 
        const browser = await browserType.launch({ headless: false }) //Usando a variavel criada.
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://react-redux.realworld.io/#/login')
        await page.screenshot({path: `output/${browserType.name()}.png`});

        await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
        await page.press('input[type = "email"]', 'Tab')
        await page.type('input[type = "password"]', 'test123')
        await page.click('form >> "Sign in"')

        await page.waitForTimeout(5000)
        console.log('Browser Type: ' + browserType.name)
        const logoText = await page.$eval('.navbar-brand', el => el.innerText)
        console.log('logoText: ' + logoText)

        const logoHref = await page.$eval('.navbar-brand', el => el.href)
        console.log('logoHref: ' + logoHref)

        const popularTagsCount = await page.$$eval('.tag-default', el => el.length)
        console.log('popularTagsCount: ' + popularTagsCount)


        const content = await page.textContent('.navbar-brand')
        console.log('content: ' + content)

        const text = await page.innerText('.navbar-brand')
        console.log('text: ' + text)

        const html = await page.innerHTML('.feed-toggle')
        console.log('html: ' + html)

        const href = await page.getAttribute('.navbar-brand', 'href')
        console.log('href: ' + href)

        await browser.close()
    }
})()