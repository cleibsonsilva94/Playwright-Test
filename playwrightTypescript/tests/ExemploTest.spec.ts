// Comando para rodar npx playwright test --grep "@Simple basic test 2 Login" --headed

import { test, expect } from '@playwright/test';

test('@Simple basic test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.locator('h1');
  await expect(title).toHaveText('Example Domain');
});

test('@Simple basic test 2 Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('input[data-test="username"]', 'standard_user');
  await page.press('input[data-test="username"]', 'Tab');
  await page.type('input[data-test="password"]', 'secret_sauce');
  await page.click('form >> text=Login');

  const htmlHandle = await page.$('//a[contains(@class, "shopping_cart_link")]');

  if (htmlHandle) {
    console.log('✅ Você está na home!');
  } else {
    console.error('❌ Você não está na home');
  }
  // await page.context().browser()?.close();
});

// =================== Diferenças entre TypeScript e JavaScript ===================

// 1. TypeScript é uma linguagem baseada em JavaScript, mas adiciona TIPAGEM ESTÁTICA.
//    Isso significa que você pode (e deve) dizer qual é o tipo de cada variável, como string, number, etc.

// 2. Em JavaScript, você pode fazer isso:
//      let nome = "Cleibson";
//      nome = 123; // Isso é permitido, mesmo que seja confuso ou cause erros.
//    Já no TypeScript:
//      let nome: string = "Cleibson";
//      nome = 123; // ❌ Erro! TypeScript avisa que está tentando usar um número onde era esperado um texto.

// 3. TypeScript ajuda o editor (como o VSCode) a te dar sugestões mais inteligentes,
//    já que ele sabe o tipo de cada variável e função.

// 4. Em projetos maiores, TypeScript reduz erros bobos que só aparecem em tempo de execução no JavaScript.

// 5. Código TypeScript precisa ser "compilado" para JavaScript com o comando `tsc`, porque os navegadores entendem só JavaScript.

// 6. TypeScript obriga você a ser mais organizado. Por exemplo, em vez de usar variáveis soltas,
//    você define tipos, interfaces e sabe exatamente o que esperar em cada parte do código.

// 7. Em resumo: JavaScript é mais solto e flexível, mas TypeScript é mais seguro e previsível.
//    Se JavaScript fosse escrever um bilhete rápido, TypeScript seria escrever um contrato bem detalhado.
