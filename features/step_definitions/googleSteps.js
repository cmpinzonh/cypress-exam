const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver;

Given('I am on the Twitter login page', async () => {
  driver = new Builder().forBrowser('chrome').build();
  await driver.get('https://twitter.com/login');
});

When('I enter valid credentials', async () => {
  await driver.quit();
  const usernameField = await driver.findElement(By.name('session[username_or_email]'));
  const passwordField = await driver.findElement(By.name('session[password]'));

  await usernameField.sendKeys('your_twitter_username');
  await passwordField.sendKeys('your_twitter_password', Key.RETURN);
});

Then('I should be logged in', async () => {
  await driver.wait(until.titleIs('Twitter'), 5000);
  console.log('Successfully logged in!');
  await driver.quit();
});
