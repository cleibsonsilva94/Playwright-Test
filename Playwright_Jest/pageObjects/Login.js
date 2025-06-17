class Login {
    constructor(page) {
        this.page = page;
    }

    async User() {
        return await this.page.$('input[id="user-name"]');
    }

    async password_fill(password) {
        await this.page.type('input[type="password"]', password);
    }

    async signInButton_click() {
        await this.page.click("input[name='login-button']");
    }
}

module.exports = Login;