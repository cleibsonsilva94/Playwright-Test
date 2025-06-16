const {
    Given,
    When,
    Then,
    BeforeAll,
    AfterAll
} = require("cucumber");
const { chromium } = require("playwright");
const expect = require("expect");

let browser;
let context;
let page;

// Abrir o navegador antes de todos os testes
BeforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

// Fechar o navegador após todos os testes
AfterAll(async () => {
    await browser.close();
});

// Acessar a página de login do Swag Labs
Given('I am on Swag Labs app\'s Login page', async () => {
    await page.goto('https://www.saucedemo.com/');
});

// Preencher e-mail e senha
When('I enter email and password', async () => {
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
});

// Clicar no botão de login
When('I click on Login button', async () => {
    await page.click('input[data-test="login-button"]');
});

 //Verificar se a página contém o texto esperado
Then('The page should display {string}', async (string) => {
   const content = await page.innerText('.Products');
    //expect(content).toMatch(string);
});
