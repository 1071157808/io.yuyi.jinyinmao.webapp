angular.module('jym.userInfo', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.userInfo', {
                url: '/userInfo',
                views: {
                    'content@':{
                        controller: 'UserInfoCtrl as userInfoCtrl',
                        templateUrl: 'app/user/info/user-info.tpl.html'
                    }
                }
            })
            .state('jym.userInfo.bankCards', {
                url: '/bankCards',
                views: {
                    'user-info':{
                        controller: 'UserInfoBankCardsCtrl as userInfoBankCardsCtrl',
                        templateUrl: 'app/user/info/user-bankCards.tpl.html'
                    }
                }
            });
    })
    .controller('UserInfoCtrl', function() {
        var userInfoCtrl = this;

    })
    .controller('UserInfoBankCardsCtrl', function() {
        var userInfoBankCardsCtrl = this;

    });
