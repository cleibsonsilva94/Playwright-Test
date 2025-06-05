const { chromium } = require('playwright');

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

const logoText = await page.$eval('.navbar-brand', el => el.innerText) // Captura o texto visível dentro do elemento com a classe 'navbar-brand'
console.log('logoText: ' + logoText)

const logoHref = await page.$eval('.navbar-brand', el => el.href) // Captura o valor do atributo href do elemento com a classe 'navbar-brand'
console.log('logoHref: ' + logoHref)

const popularTagsCount = await page.$$eval('.tag-default', el => el.length) // Conta quantos elementos possuem a classe 'tag-default'
console.log('popularTagsCount: ' + popularTagsCount)

const content = await page.textContent('.navbar-brand') // Obtém todo o conteúdo de texto (incluindo textos invisíveis) do seletor informado
console.log('content: ' + content)

const text = await page.innerText('.navbar-brand') // Obtém apenas o texto visível (renderizado) do seletor informado
console.log('text: ' + text)

const html = await page.innerHTML('.feed-toggle') // Captura o HTML interno do elemento com a classe 'feed-toggle'
console.log('html: ' + html)

const href = await page.getAttribute('.navbar-brand', 'href') // Obtém o valor do atributo 'href' do elemento com a classe 'navbar-brand'
console.log('href: ' + href)

await browser.close() // Fecha o navegador após a execução dos comandos
})()






/* Diferença entre os métodos e propriedades utilizados:

 $eval(selector, callback):
 Executa um código dentro da página e retorna o resultado da função de callback.
 Útil para acessar e manipular elementos específicos (por exemplo: el.innerText, el.href).

 $$eval(selector, callback):
 Semelhante ao $eval, mas funciona com vários elementos (uma lista).
 O callback recebe um array com todos os elementos que correspondem ao seletor.

 textContent:
 Retorna todo o texto contido no elemento, inclusive espaços e textos ocultos pelo CSS.
 Exemplo: pode retornar texto de elementos com display: none.

 innerText:
 Retorna apenas o texto visível (renderizado na tela), respeitando o estilo visual da página.
 Exemplo: ignora texto de elementos ocultos ou fora da área visível.

 innerHTML:
 Retorna o HTML interno do elemento selecionado (tags + conteúdo).
 Exemplo: pode retornar algo como "<strong>Texto</strong>".

 getAttribute(selector, attribute):
 Retorna o valor de um atributo específico de um elemento.
 Exemplo: pode ser usado para obter 'href', 'src', 'alt', etc.
 
 */