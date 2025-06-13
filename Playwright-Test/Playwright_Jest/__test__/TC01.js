const data = require('../data/data.json');

describe('Post', () => {
	test('Sign In', async () => {
		await page.goto(data.url);

		await page.fill('input[id="user-name"]', data.user);
		await page.fill('input[type="password"]', data.password);

        await Promise.all([
          page.waitForNavigation(), 
          page.click('input[type="submit"]') 
        ])
    })
})

/*
const Login = require('../pageObjects/login');
describe('Post', () => {
  // Criação de uma nova instância da classe Login (Page Object)
  const login = new Login();

  // Antes de todos os testes, acessar a página de login
  beforeAll(async () => {
    await page.goto('https://react-redux.realworld.io/#/login');
  });

  test('Sign In', async () => {
    // Verifica se o título da página está correto
    const title = await page.title();
    expect(title).toBe('Conduit');

    // Preenche o campo de e-mail
    const email = await login.email();
    await email.fill('alanvoigt@yahoo.com.br'); // <- Corrigido: faltava a aspa final
    await email.press('Tab'); // Avança para o próximo campo (senha)

    // Preenche o campo de senha usando método encapsulado no Page Object
    await login.password_fill('test123');

    // Clica no botão de login usando método encapsulado
    await login.signInButton_click();

    // Verifica se o login foi bem-sucedido conferindo o conteúdo da página
    const html = await page.innerHTML('.feed-toggle');
    expect(html).toMatch('Your Feed');
  });

  // Após todos os testes, fecha o navegador
  afterAll(async () => {
    await browser.close();
  });
});
*/