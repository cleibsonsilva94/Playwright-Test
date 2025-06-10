// -- EXTRAINDO ELEMENTOS DA PÁGINA -- //

const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123') 
    await page.click('form >> "Sign in"')
    await page.waitForTimeout(5000)

    const logoText = await page.$eval('.navbar-brand', el => el.innerText) // Obtém o texto do elemento com a classe .navbar-brand (logo do topo)
    expect(logoText).toBe('conduit') // Verifica se o texto da logo é igual a 'conduit'

    const logoHref = await page.$eval('.navbar-brand', el => el.href) // Obtém o valor do href do elemento da logo
    expect(logoHref).toBeDefined() // Verifica se o href está definido

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length) // Conta quantas tags populares existem
    expect(popularTagsCount).toBeGreaterThanOrEqual(5) // Verifica se há pelo menos 5 tags
    expect(popularTagsCount).toBeLessThanOrEqual(30) // Verifica se há no máximo 30 tags
    expect(popularTagsCount).toEqual(20) // Verifica se o número de tags é exatamente 20

    const content = await page.textContent('.navbar-brand') // Obtém o conteúdo de texto (sem estilo) da logo
    // console.log('content: ' + content) // Comentado: imprime o conteúdo da logo

    const text = await page.innerText('.navbar-brand') // Obtém o texto visível da logo (pode conter quebra de linha ou formatação)
    // console.log('text: ' + text) // Comentado: imprime o texto

    const html = await page.innerHTML('.feed-toggle') // Obtém o HTML interno do componente de navegação de feed
    expect(html).toMatch('Your Feed') // Verifica se o HTML contém o texto "Your Feed"
    // expect(html).toMatch('Global Feed') // Comentado: verifica se contém "Global Feed"
    expect(html).toMatch('Global Feeds') // Deve falhar: está verificando um texto incorreto de propósito

    const href = await page.getAttribute('.navbar-brand', 'href') // Obtém o atributo href da logo
    expect(href).not.toMatch('https://react-redux.realworld.io') // Verifica se o href não corresponde exatamente ao link (pode conter rota extra, como "/#")

    await browser.close()
})()
