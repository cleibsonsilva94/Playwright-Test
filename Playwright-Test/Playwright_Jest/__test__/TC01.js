describe('Post', () => {
	test('Sign In', async () => {
        await page.goto('https://www.saucedemo.com/')

        await page.fill('input[id="user-name"]', 'standard_user')
        await page.fill('input[type="password"]', 'secret_sauce')

        await Promise.all([
          page.waitForNavigation(), 
          page.click('input[type="submit"]') 
        ])
    })
})