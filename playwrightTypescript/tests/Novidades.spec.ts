// Importa as funções 'test' e 'expect' do Playwright Test
import { test, expect } from '@playwright/test'

// Define um teste chamado 'Simple basic test'
test('Simple basic test', async ({ page }) => {
  // Acessa a página https://www.example.com
  await page.goto('https://www.example.com')

  // Localiza um elemento que contenha o texto 'Example Domain' (exemplo comentado)
  // const pageTitle = await page.locator('text=Example Domain')//Antigo mas ainda funciona

  // Alternativa usando getByText (comentado também) //Novidade
  // const pageTitle = page.getByText('Example Domain')

  // Verifica se existe um elemento com o texto 'Example Domain' na página
  await expect(page.getByText('Example Domain')).toContainText('Example Domain')
})
