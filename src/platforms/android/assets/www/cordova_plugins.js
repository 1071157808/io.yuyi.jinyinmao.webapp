cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.deploy/www/ionicdeploy.js",
        "id": "com.ionic.deploy.IonicDeploy",
        "clobbers": [
            "IonicDeploy"
        ]
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.toast/www/Toast.js",
        "id": "nl.x-services.plugins.toast.Toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.toast/test/tests.js",
        "id": "nl.x-services.plugins.toast.tests"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.deploy": "0.2.1",
    "com.ionic.keyboard": "1.0.4",
    "cordova-plugin-inappbrowser": "1.0.0",
    "cordova-plugin-statusbar": "1.0.0",
    "nl.x-services.plugins.toast": "2.0.4"
}
// BOTTOM OF METADATA
});