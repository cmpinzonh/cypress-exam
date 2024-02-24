const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver;

Given('I am on the Twitter login page', async () => {
  driver = new Builder().forBrowser('chrome').build();
  await driver.get('https://playwright.dev/');
});

When('I enter valid credentials', async () => {
  
  await driver.findElement(By.css('.getStarted_Sjon')).click();

  // await docsButton.sendKeys('your_twitter_username');
});

Then('I should be logged in', async () => {
  await driver.wait(until.titleIs('Installation | Playwright'), 5000);
  await driver.quit();
});
