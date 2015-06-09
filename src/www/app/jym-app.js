angular.module('JYM', [
    'ionic',
    'ngCordova',
    'jym.interceptors',
    'jym.jinbaoyin',
    'jym.shangpiao',
    'jym.user',
    'jym.yinhangzhuanqu',
    'jym.yinpiao'
])
    .constant('URLS', {
        CONFIG: {
            FETCH: 'https://jymstoredev.blob.core.chinacloudapi.cn/publicfiles/Configs/AppConfig/3.0.0'
        }
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('jym', {
            url: "",
            abstract: true,
            templateUrl: 'index.html'
        });

        $urlRouterProvider.otherwise('/');
    })
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('globalInterceptor');
        $httpProvider.defaults.withCredentials = true;
    })
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
    });

