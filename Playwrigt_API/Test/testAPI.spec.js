import { test, expect } from '@playwright/test';

// Define um teste com uma descrição
test('Deve retornar os dados corretos do usuário com id 2', async ({ request }) => {
  // Faz uma requisição GET para a API pública do Reqres, buscando o usuário com id 2
  const response = await request.get('https://reqres.in/api/users/2');
  // Converte a resposta em JSON para acessar os dados
  const responseBody = await response.json();
  // Extrai o objeto "data" do corpo da resposta (que contém os dados do usuário)
  const user = responseBody.data;
  // Exibe os dados do usuário no terminal
  console.log(user);

  // Valida se o status da resposta foi 401 (não autorizado)
  // ⚠️ Observação: Essa validação provavelmente vai falhar, pois a API normalmente retorna 200
  expect(response.status()).toBe(401);
  // Verifica se o ID do usuário retornado é 3
  // ⚠️ Outro erro proposital? O ID real da resposta para /users/2 é 2
  expect(user.id).toBe(3);
  // Verifica se o email do usuário está correto
  expect(user.email).toBe('cleibson.weaver@reqres.in'); // ⚠️ Este email não existe na resposta real
  // Verifica se o primeiro nome do usuário é "Janet"
  expect(user.first_name).toBe('Janet'); // ✔️ Este dado é verdadeiro na resposta real
  // Verifica se o sobrenome do usuário é "Weaver"
  expect(user.last_name).toBe('Weaver'); // ✔️ Também está correto
  // Verifica se o avatar do usuário é o esperado
  expect(user.avatar).toBe('https://reqres.in/img/faces/2-image.jpg'); // ✔️ Este também é verdadeiro
});
