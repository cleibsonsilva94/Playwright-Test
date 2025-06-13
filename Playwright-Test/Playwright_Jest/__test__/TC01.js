const data = require('../data/data.json');

describe('Post', () => {
	test('Sign In', async () => {
		await page.goto(data.url);

		await page.fill('input[id="user-name"]', data.user);
		await page.fill('input[type="password"]', data.password);

		await Promise.all([
			page.waitForNavigation(), 
			page.click('input[type="submit"]') 
		]);
	});
});