const { chromium, expect } = require("@playwright/test");
exports.LoginPage = class LoginPage {
  constructor(page, expect) {
    this.page = page;
    this.username_field = page.getByPlaceholder("Email");
    this.password_field = page.getByPlaceholder("Password");
    this.login_button = page.locator('[data-id="submit-login-btn"]');
    this.drop_down = page.locator('[alt="DropDown Button"]');
    this.log_out = page.locator('[data-id="nav-dropdown-logout"]');
  }
  async gotoLoginPage() {
    await this.page.goto("https://talent500.co/auth/signin");
  }
  async login(username, password) {
    await this.username_field.fill(username);
    await this.password_field.fill(password);
    await this.login_button.click();
  }
  async homePage(homeContent) {
    const text = await this.page.locator('//div[@id="progress-bar"]').textContent();
    expect(text).toContain(homeContent);
  }
  async logout() {
    await this.drop_down.click();
    await this.log_out.click();
  }
};
