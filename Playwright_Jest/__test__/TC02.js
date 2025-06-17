const Login = require('../pageObjects/login');

describe('Post', () => {
  let login;

  beforeAll(async () => {
    await page.goto('https://www.saucedemo.com/');
    login = new Login(page);
  });

  test('Sign In', async () => {
    //const title = await page.title();
    //expect(title).toBe('Swag Labs');

    const userField = await login.User();
    await userField.fill('standard_user');
    await userField.press('Tab');

    await login.password_fill('secret_sauce');
    await login.signInButton_click();

    const html = await page.innerHTML('html');
    expect(html).toMatch('shopping_cart_link');
  });

  afterAll(async () => {
    await browser.close();
  });
});

