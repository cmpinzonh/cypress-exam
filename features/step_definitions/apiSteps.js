const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const superagent = require('superagent');

const query = {
    name: 'John',
    age: '31',
    city: 'New York'
  };

let urlBase;
Given('I am a Github user', async () => {
    urlBase = 'https://api.github.com';
    this.githubUserName = 'cmpinzonh';
});

When('I call a github API', async () => {
    
    this.response = await superagent
    .get('https://httpbin.org/ip')
    .send(query)
    .query(query);

});

Then('I should receive a json response', async () => {
    
  const statusCode = await this.response.status;
  assert.strictEqual(statusCode, 200);
  assert.equal(this.response.body.origin, '190.24.102.189')
});
