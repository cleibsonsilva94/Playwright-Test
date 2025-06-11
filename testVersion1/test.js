// -- COMANDOS INICIAIS E INTERAÇÃO BASICA --//
// Rodar: node test.js

const {chromium} = require('playwright'); // Importa o navegador Chromium do Playwright

(async() => {
    const browser = await chromium.launch({headless: false}) // Inicia o navegador Chromium em modo visível (não headless)
    const context = await browser.newContext() // Cria um novo contexto de navegação (como uma janela separada)
    //const page = await context.newPage() // Abre uma nova aba (página) dentro do contexto criado
    const page = await browser.newPage() // Alternativa: cria uma nova aba diretamente no navegador (sem contexto)
    await page.goto('https://pomofocus.io/') // Acessa o site especificado
    await page.screenshot({path: `todo.png`}) // Tira um screenshot da página e salva com o nome "todo.png"
    await browser.close() // Fecha o navegador após a execução
})()
