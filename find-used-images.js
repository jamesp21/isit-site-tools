//const getNotUsed = require('./image-help/index').getNotUsed;
const configSettings = require('./image-help/index').configSettings;

const elfConfig = require('isit-code-lastname').elfConfig;

elfConfig.load(function() {
    console.log('CONFIG SETTINGS:', configSettings);
    console.log(configSettings.getSelectedElvenImage('testImages'));
    /*
        getNotUsed.loadConfig(function(report) {
            console.log(report);
        });
    */

});
