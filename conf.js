exports.config = {
    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['*.spec.js'],

    capabilities: {
        browserName: 'chrome',
        // shardTestFiles: true,
        // maxInstances: 1
    },

    baseUrl: 'https://www.freeletics.com/en',

    onPrepare: function(){
        global.customMatchers = require('./customMatchers');

        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };

        require('./customLocators');
    }

};