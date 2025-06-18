// COMANDOS PARA RODAR:
// npx playwright test mockAPI.spec.js          → Executa apenas esse teste específico
// npx playwright test mockAPI.spec.js --ui     → Abre a interface gráfica do Playwright para rodar os testes

import { test, expect } from '@playwright/test';
test.describe('Mocking an API call', () => { 
  test.only('mocks a fruit and does not call api', async ({ page }) => { // Executa apenas esse teste isoladamente
    await page.route('*/**/api/v1/fruits', async (route) => { // Intercepta a chamada para a rota da API de frutas
      const json = [{ name: 'Lime', id: 21 }]; // Define a resposta falsa (mockada) com a fruta "Lime"
      await route.fulfill({ json }); // Retorna a resposta mockada sem chamar a API real
    });

    await page.goto('https://demo.playwright.dev/api-mocking'); // Acessa a página de exemplo do Playwright

    await expect(page.getByText('Lime')).toBeVisible(); // Verifica se a fruta "Lime" está visível na tela
  });

});
