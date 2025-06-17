import { test, expect } from '@playwright/test';

test('Deve retornar os dados corretos do usuário com id 2', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');
  const responseBody = await response.json();

  const user = responseBody.data;

  console.log(user); // Opcional, para visualizar a resposta no terminal

  expect(response.status()).toBe(200);
  expect(user.id).toBe(2);
  expect(user.email).toBe('cleibson.weaver@reqres.in');
  expect(user.first_name).toBe('Janet');
  expect(user.last_name).toBe('Weaver');
  expect(user.avatar).toBe('https://reqres.in/img/faces/2-image.jpg');
});
