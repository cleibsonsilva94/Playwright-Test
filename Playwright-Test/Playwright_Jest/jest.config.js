module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: ['**/__test__/**/*.js'],
  testEnvironment: './CustomEnvironment.js', // <- Caminho para seu ambiente customizado
}