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
        $httpProvider.interceptors.push('globalInterceptor');
        $httpProvider.defaults.withCredentials = true;
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
    .controller('JYMCtrl', function($rootScope, $state) {
        $rootScope.isJinbaoyin = $state.includes('jym.jinbaoyin');
        $rootScope.isYinhangzhuanqu = $state.includes('jym.yinhangzhuanqu');
        $rootScope.isYinpiao = $state.includes('jym.yinpiao');
        $rootScope.isShangpiao = $state.includes('jym.shangpiao');
        $rootScope.isUser = $state.includes('jym.user');

        $rootScope.indexTabs = [{
            sref: 'jym.user',
            'class': 'jym-icon-user'
        },{
            sref: 'jym.shangpiao',
            'class': 'jym-icon-shang'
        },{
            sref: 'jym.yinpiao',
            'class': 'jym-icon-yin'
        },{
            sref: 'jym.yinhangzhuanqu',
            'class': 'jym-icon-zhuan'
        },{
            sref: 'jym.jinbaoyin',
            'class': 'jym-icon-home'
        }]
    });

