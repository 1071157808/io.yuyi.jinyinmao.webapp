angular.module('JYM', [
    'ionic',
    'ngCordova',
    'angular-progress-arc',
    'jym.controllers',
    'jym.interceptors',
    'jym.jinbaoyin',
    'jym.shangpiao',
    'jym.user',
    'jym.yinhangzhuanqu',
    'jym.yinpiao',
    'jym.misc'
])
    .constant('URLS', {
        CONFIG: {
            FETCH: 'https://jymstoredev.blob.core.chinacloudapi.cn/publicfiles/Configs/AppConfig/3.0.0'
        },
        JINBOAYIN: {
            FETCH: 'https://jym-dev-api.jinyinmao.com.cn/Product/Current/JBY'
        },
        INVESTING: {
            JBY: 'https://jym-dev-api.jinyinmao.com.cn/Investing/JBY'
        },
        USER: {
            GETINFO: 'https://jym-dev-api.jinyinmao.com.cn/User',
            SIGNIN: 'https://jym-dev-api.jinyinmao.com.cn/User/Auth/SignIn'
        }
    })
    .constant('RESOURCES', {
        ALERT: {
            PRODUCT: {
                NOT_ON_SALE: '该产品未开售，请耐心等待',
                SOLD_OUT: '该产品已经售罄，请期待下一期',
                SHARE_INSUFFICIENT: '产品剩余份额不足',
                AMOUNT_INCORRECT: '购买金额错误'

            },
            USER: {
                CLOSED: '账户被禁用，如需帮助，请联系金银猫客服',
                HAS_NOT_SET_PAYMENT_PASSWORD: '请先设置支付密码',
                PAYMENT_PASSWORD_NEED_RESET: '支付密码被锁定，请重置后使用',
                USER_LOGIN_PASSWORD_LOCK: '登录密码被锁定，请重置后使用',
                USER_NOT_EXIST: '用户名或者密码错误，请确认后再试',
                USER_LOGIN_FAIL: '用户名或者密码错误，请确认后再试',
                USER_LOGIN_PASSWORD_REMIAN_LESS: '用户名或者密码错误次数过多，请核实后再试'
            }
        }
    })
    .config(function($ionicConfigProvider) {
        $ionicConfigProvider.views.transition('ios');
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back');
    })
    .config(function($httpProvider) {
        //$httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push('globalInterceptor');
        $httpProvider.interceptors.push('loadingInterceptor');
    })
    .config(function($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('jym', {
            url: "",
            abstract: true,
            templateUrl: 'app/index.tpl.html'
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
                template: '<ion-spinner icon="spiral" class="spinner-energized"></ion-spinner>'
            });
        });

        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide();
        });

        $rootScope.$on('http:requestError', function() {
            $ionicLoading.show({
                template: '请求失败',
                duration: 3000
            });
        });

        $rootScope.$on('http:responseError-500', function() {
            $ionicLoading.show({
                template: '请稍后再试',
                duration: 3000
            });
        });
    });

