// -- GEOLOCATION --//

const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
  const browser = await chromium.launch({headless: false})
  const context = await browser.newContext({
      geolocation: { longitude: -34.8813, latitude: -8.05428},//Recife
      permissions: ['geolocation'],
  })

  await context.grantPermissions(['geolocation'])

  const page = await context.newPage()
  await page.goto('https://www.maps.ie/coordinates.html')
  await page.click('#find-loc')
})()