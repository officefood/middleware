var expect = require('chai').expect;

module.exports = function () {
    this.World = require('../support/world.js').World;
    
    this.Given(/^I'm on the homepage$/, function (callback) {
        this.browser.get('http://localhost:1337').then(function () {
            callback();
        });
    });

    this.When(/^the page has been loaded$/, function (callback) {
        this.browser.wait(function () {
            callback();
        }, 5000);
    });

    this.Then(/^I should see Hello World text$/, function (callback) {
        this.browser.findElement(this.webDriver.By.css('body')).getText().then(function (body) {
            console.log(body);
            expect(body).to.contain('Hello World');
            callback();
        });
    });
};