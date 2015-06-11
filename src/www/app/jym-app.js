angular.module('JYM', [
    'ionic',
    'ngCordova',
    'jym.controllers',
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
    .config(function($ionicConfigProvider) {
        $ionicConfigProvider.views.transition('ios');
        $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back');
    })
    .config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push('globalInterceptor');
        $httpProvider.interceptors.push('loadingInterceptor');
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('jym', {
            url: "",
            abstract: true
        });

        $urlRouterProvider.otherwise('/jinbaoyin');
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
    })
    .run(function($rootScope, $ionicLoading) {
        $rootScope.$on('loading:show', function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        });

        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide()
        });
    });

