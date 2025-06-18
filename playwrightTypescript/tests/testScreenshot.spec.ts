//Comando para rodar: npx playwright test --grep "@Simple basic test3" --headed

import { test, expect } from '@playwright/test'

test('@Simple basic test3', async ({ page }) => {
  await page.goto('https://www.example.com')
  // Verifica se o texto "Example Domain" está presente na página
  await expect(page.getByText('Example Domain')).toContainText('Example Domain')
  // Compara um screenshot atual da tela com uma imagem salva (homePage.png)
  expect(await page.screenshot()).toMatchSnapshot('homePage.png');
})

// Basicamente, o teste compara um screenshot da tela a fim de validá-lo.
// Quando executado pela primeira vez, geralmente falha porque ainda não existe um snapshot de referência.
// Na segunda execução, ele já consegue comparar a tela atual com a imagem salva.
// Esse recurso é ideal para testes de validação de interface, que normalmente são feitos manualmente.