const {chromium} = require('playwright'); 

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://react-redux.realworld.io/#/login');

    // ---------------------------------------------------------
    // Abaixo, temos 4 formas de localizar elementos na página
    // ---------------------------------------------------------

    // --- 1. Localização por atributo HTML ---
    // const signIn = await page.$('.btn'); // Usa a classe do botão como seletor

    // --- 2. Localização por seletor CSS ---
    // const signIn = await page.$('css=button'); // Forma explícita usando "css="
    // const signIn = await page.$('button');     // Forma simplificada

    // --- 3. Localização por XPath ---
    // const signIn = await page.$('xpath=//button[@type="submit"]'); // Usando XPath de forma explícita
    // const signIn = await page.$('//button[@type="submit"]');       // Forma simplificada (omitindo "xpath=")

    // --- 4. Localização por texto visível ---
    // const signIn = await page.$('text="Sign in"');
    // const signIn = await page.$('text=Sign in');
    // const signIn = await page.$('"Sign in"');
    // const signIn = await page.$("'Sign in'");

    // ---------------------------------------------------------
    // 5. Localização de texto dentro de um formulário
    // ---------------------------------------------------------

    // Primeira forma: encontrar o formulário e depois localizar o botão dentro dele
    // const form = await page.$('css=form');
    // const signIn = await form.$("'Sign in'");

    // Segunda forma: localiza diretamente o botão "Sign in" dentro do formulário
    // const signIn = await page.$("css=form >> 'Sign in'");
    
    // Terceira forma (mais limpa): busca o botão "Sign in" dentro do <form>
    const signIn = await page.$("form >> 'Sign in'");
    await signIn.click(); // Clica no botão localizado

    // ---------------------------------------------------------
    // 6. Identificando TODOS os elementos com a mesma classe
    // ---------------------------------------------------------

    // Localiza todos os inputs com a classe "form-control"
    const input = await page.$$('.form-control');

    // Clica nos dois primeiros inputs (usuário e senha, por exemplo)
    await input[0].click();
    await input[1].click();

    // Fecha o navegador
    await browser.close();
})()