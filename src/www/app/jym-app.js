angular.module('JYM', [
    'ionic',
    'ngCordova',
    'jym.jinbaoyin'
])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('jym', {
            url: "",
            abstract: true
        });

        $urlRouterProvider.otherwise('/');
    });
