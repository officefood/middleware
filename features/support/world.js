var webDriver = require('selenium-webdriver');

module.exports.World = function (callback) {
    console.log(arguments);
    this.browser = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();    

    callback();
};