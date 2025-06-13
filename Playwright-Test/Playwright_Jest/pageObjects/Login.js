class login {
    async email() {
        return await page.$('input[type="email"]')
    }
    async password_fill(test) {
        return await page.type('input[type = "password"]', test)
    }
    async signInButton_click() {
        return await page.click("form >> 'Sign in'")
    }
}
module.exports = login