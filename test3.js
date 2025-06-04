const {chromium} = require('playwright');

// -- CT002 Interacting with elements -- //

/* (async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 })// Inicia o navegador com interface visível e atraso de 50ms entre ações
    const context = await browser.newContext();// Cria um novo contexto de navegação isolado
    const page = await context.newPage();// Abre uma nova aba/página dentro do contexto

    await page.goto('https://react-redux.realworld.io/#/login');

    await page.fill('input[type="email"]', 'alanvoigt@yahoo.com.br');// Preenche o campo de e-mail com o valor fornecido
    await page.press('input[type="email"]', 'Tab');// Pressiona a tecla Tab para mover o foco para o campo de senha
    await page.type('input[type="password"]', 'test123');// Digita a senha simulando digitação real
    await browser.close();

    // -- EXPLICAÇÃO DE FUNÇÕES -- //
    //await page.click('form >> "Sign in"', { // Clica no botão "Sign in" com opções adicionais:
    // position: { x: 4, y: 0 },// - Coordenadas específicas dentro do botão
    // button: 'right',// - Usa o botão direito do mouse
    // modifiers: ['Shift'],// - Mantém a tecla Shift pressionada durante o clique
    //force: true,// - Força o clique mesmo que o elemento esteja oculto ou desabilitado
    //timeout: 45000// - Tempo máximo de espera de 45 segundos para o clique acontecer
    // await page.dblclick('form >> "Sign in"');//Executa clique duplo no botão "Sign in"
    // await page.focus('form >> "Sign in"');// Dá foco no botão "Sign in" como se fosse via Tab
    // await page.dblclick('form >> "Sign in"')//Outro exemplo de clique duplo
}); */


// -- CT003 Interacting with elements jw -- //
(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 90 })
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.jw.org/en/');
    await page.fill('input[type="text"]', 'Dead');
    await page.press('input[type="text"]', 'Enter');
    await browser.close();
})()

/*
(async() => {
    const browser = await chromium.launch({headless:false, slowMo:50})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('http://todomvc.com/examples/react/#/')

    await page.fill('.new-todo', 'Task_1')
    await page.press('.new-todo', 'Enter')

    await page.fill('.new-todo', 'Task_2')
    await page.press('.new-todo', 'Enter')

    await page.check('.toggle')
    
    const elements = await page.$$('.toggle')
    elements.forEach(element => element.check())
    
}) () */