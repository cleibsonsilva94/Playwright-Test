module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: ['**/__test__/**/*.js'],
  testEnvironment: './CustomEnvironment.js',
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './html-report',
      filename: 'report.html',
      expand: true
    }]
  ]
};
