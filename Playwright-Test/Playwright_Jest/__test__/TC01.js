describe('Post', () => {
	test('Sign In', async () => {
        await page.goto('https://www.saucedemo.com/')
        const title = await page.title()
        expect(title).toBe('Swag Labs')
      
        await page.fill('input[type = "email"]', 'standard_user')
		    await page.press('input[type = "email"]', 'Tsecret_sauce')
		    await page.type('input[type = "password"]', 'test123')
        await Promise.all([
          page.waitForNavigation(), 
          await page.click('form >> "Sign in"') 
        ]);
    })
})