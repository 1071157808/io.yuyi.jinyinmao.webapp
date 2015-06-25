angular.module('jym.user-info', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.user-info', {
                url: '/userInfo',
                views: {
                    'user':{
                        controller: 'UserInfoCtrl as userInfoCtrl',
                        templateUrl: 'app/user/info/user-info.tpl.html'
                    }
                }
            })
            .state('jym.user-bankCards', {
                url: '/bankCards',
                views: {
                    'user-info':{
                        controller: 'UserInfoBankCardsCtrl as userInfoBankCardsCtrl',
                        templateUrl: 'app/user/info/user-bankCards.tpl.html'
                    }
                }
            })
            .state('jym.user-bankCards-detail', {
                url: '/bankCards/detail',
                views: {
                    'user-info':{
                        controller: 'UserInfoBankCardsDetailCtrl as userInfoBankCardsDetailCtrl',
                        templateUrl: 'app/user/info/user-bankCards-detail.tpl.html'
                    }
                }
            })
            .state('jym.user-bankCards-add', {
                url: '/bankCards/add',
                views: {
                    'user-info':{
                        controller: 'UserInfoBankCardsAddCtrl as userInfoBankCardsAddCtrl',
                        templateUrl: 'app/user/info/user-bankCards-add.tpl.html'
                    }
                }
            })
            .state('jym.user-jbyAccount', {
                url: '/jbyAccount',
                views: {
                    'user-info':{
                        controller: 'UserInfoJbyAccountCtrl as userInfoJbyAccountCtrl',
                        templateUrl: 'app/user/info/user-jby-account.tpl.html'
                    }
                }
            })
            .state('jym.user-jbyAccount-info', {
                url: '/jbyAccount/info',
                views: {
                    'user-info':{
                        controller: 'UserInfoJbyAccountInfoCtrl as userInfoJbyAccountInfoCtrl',
                        templateUrl: 'app/user/info/user-jby-account-info.tpl.html'
                    }
                }
            })
            .state('jym.user-jbyAccount-info-list', {
                url: '/jbyAccount/info-list',
                views: {
                    'user-info':{
                        //controller: 'UserInfoJbyAccountInfoListCtrl as userInfoJbyAccountInfoListCtrl',
                        templateUrl: 'app/user/info/user-jby-account-info-list.tpl.html'
                    }
                }
            })
            .state('jym.user-jbyAccount-deposit', {
                url: '/jbyAccount/deposit',
                views: {
                    'user-info':{
                        //controller: 'UserInfoJbyAccountInfoListCtrl as userInfoJbyAccountInfoListCtrl',
                        templateUrl: 'app/user/info/user-jby-account-deposit.tpl.html'
                    }
                }
            })
            .state('jym.user-jbyAccount-withdrawal', {
                url: '/jbyAccount/withdrawal',
                views: {
                    'user-info':{
                        //controller: 'UserInfoJbyAccountInfoListCtrl as userInfoJbyAccountInfoListCtrl',
                        templateUrl: 'app/user/info/user-jby-account-withdrawal.tpl.html'
                    }
                }
            })
            .state('jym.user-orders', {
                url: '/orders',
                views: {
                    'user-info':{
                        controller: 'UserInfoOrdersCtrl as userInfoOrdersCtrl',
                        templateUrl: 'app/user/info/user-orders.tpl.html'
                    }
                }
            })
            .state('jym.user-orders-list', {
                url: '/orders/list',
                views: {
                    'user-info':{
                        //controller: 'UserInfoOrdersCtrl as userInfoOrdersCtrl',
                        templateUrl: 'app/user/info/user-orders-list.tpl.html'
                    }
                }
            })
            .state('jym.user-orders-detail', {
                url: '/orders/detail',
                views: {
                    'user-info':{
                        //controller: 'UserInfoOrdersCtrl as userInfoOrdersCtrl',
                        templateUrl: 'app/user/info/user-orders-detail.tpl.html'
                    }
                }
            })
            .state('jym.user-security', {
                url: '/security',
                views: {
                    'user-info':{
                        controller: 'UserInfoSecurityCtrl as userInfoSecurityCtrl',
                        templateUrl: 'app/user/info/user-security.tpl.html'
                    }
                }
            })
            .state('jym.user-settleAccount', {
                url: '/settleAccount',
                views: {
                    'user-info':{
                        controller: 'UserInfoSettleAccountCtrl as userInfoSettleAccountCtrl',
                        templateUrl: 'app/user/info/user-settle-account.tpl.html'
                    }
                }
            });
    })
    .controller('UserInfoCtrl', function() {
        var userInfoCtrl = this;

    })
    .controller('UserInfoBankCardsCtrl', function() {
        var userInfoBankCardsCtrl = this;

    })
    .controller('UserInfoBankCardsDetailCtrl', function() {
        var userInfoBankCardsDetailCtrl = this;

    })
    .controller('UserInfoBankCardsAddCtrl', function() {
        var userInfoBankCardsAddCtrl = this;

    })
    .controller('UserInfoJbyAccountCtrl', function() {
        var userInfoJbyAccountCtrl = this;

    })
    .controller('UserInfoJbyAccountInfoCtrl', function() {
        var userInfoJbyAccountInfoCtrl = this;

    })
    .controller('UserInfoOrdersCtrl', function() {
        var userInfoOrdersCtrl = this;

    })
    .controller('UserInfoSecurityCtrl', function() {
        var userInfoSecurityCtrl = this;

    })
    .controller('UserInfoSettleAccountCtrl', function() {
        var userInfoSettleAccountCtrl = this;

    });
