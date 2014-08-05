module.exports = function () {
    this.World = require('../support/world.js').World;
    
    this.Given(/^I'm on the homepage$/, function (callback) {
        this.browser.get('http://localhost');
        callback();
    });

    this.When(/^the page has been loaded$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I should see Hello World text$/, function (callback) {
        
        this.browser.quit();
    });
};
