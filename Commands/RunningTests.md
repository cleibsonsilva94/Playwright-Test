# 📘 Comandos úteis para execução de testes com Playwright

Este guia foi criado para ajudar na execução de testes automatizados utilizando o [Playwright](https://playwright.dev/). Abaixo estão listados os principais comandos e dicas práticas para facilitar seu dia a dia com os testes :) 

## ✅ Executando os testes

### 1. Executar todos os testes do projeto
```bash
npx playwright test
```
Executa todos os testes configurados no projeto.

### 2. Executar todos os testes de um arquivo específico
```bash
npx playwright test testsCleib.spec.js
```
Executa todos os testes definidos no arquivo `testsCleib.spec.js`.

### 3. Executar todos os testes com o navegador visível (modo headed)
```bash
npx playwright test --headed
```
Abre o navegador durante a execução dos testes, útil para observar o comportamento em tempo real.

---

## 🔍 Filtrando testes por nome

### 4. Executar testes específicos pelo nome
```bash
npx playwright test -g "basic test"
```
Executa apenas o teste chamado `"basic test"`.

### 5. Executar testes específicos pelo nome com navegador visível
```bash
npx playwright test -g "basic test" --headed
```

Outro exemplo real:
```bash
npx playwright test -g "Downloading magazine" --headed
```
Executa apenas o teste chamado `"Downloading magazine"` com o navegador aberto.

---

## 🌐 Escolhendo o navegador

### 6. Executar os testes com o navegador WebKit
```bash
npx playwright test --headed --browser=webkit
```
Executa os testes com o navegador **WebKit**, útil para verificar compatibilidade.

### 7. Executar os testes em todos os navegadores (Chromium, Firefox, WebKit)
```bash
npx playwright test --headed --browser=all
```
Executa os testes nos três principais navegadores suportados pelo Playwright.

---

## 🧪 Executando testes dentro de uma pasta específica e arquivo com filtro por nome

Se o seu teste estiver dentro de uma pasta, por exemplo `TestParalelismoVersion3`, e o arquivo for `testParalelismo.spec.js`, para rodar um teste específico pelo nome, utilize:

```bash
npx playwright test TestParalelismoVersion3/testParalelismo.spec.js -g "basic test"
```

Esse comando executa apenas o teste chamado `"basic test"` dentro do arquivo e pasta especificados.

---

## ⚙️ Controlando a quantidade de workers (processos paralelos)

Para executar testes de forma sequencial (sem paralelismo), especialmente útil para testes que compartilham estado ou dependem de ordem:

```bash
npx playwright test TestParalelismoVersion3/testParalelismo.spec.js --workers 1
```

Esse comando força o Playwright a rodar os testes um por vez no arquivo indicado, sem paralelismo.

---

## 🧪 Executando grupos de testes

### 8. Executar um grupo específico de testes
```bash
npx playwright test -g "Grupo A"
```
Executa apenas os testes que pertencem ao grupo chamado `"Grupo A"`.

---

## 💡 Dicas adicionais

- Utilize `test.only` para executar apenas um teste específico durante o desenvolvimento:
  ```js
  test.only('meu teste específico', async ({ page }) => {
    // ...
  });
  ```

- Utilize `test.skip` para pular temporariamente um teste:
  ```js
  test.skip('teste que será ignorado por enquanto', async ({ page }) => {
    // ...
  });
  ```

✨ Com esses comandos e exemplos, você pode realizar testes com mais controle e eficiência durante o desenvolvimento e validação da sua aplicação.
