const { test } = require("@playwright/test");
const { LoginPage } = require("../Pages/loginPage.spec");
test("Login test", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("applitoolsautomation@yopmail.com", "Test@123");
  await Login.homePage("PROFILE");
  await Login.logout();
});
