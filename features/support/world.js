var webDriver = require('selenium-webdriver');

module.exports.World = function (callback) {
    this.webDriver = webDriver;
    this.browser = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();    

    callback();
};