angular.module('jym.user', [
    'jym.services.user',
    'jym.user.bank-card',
    'jym.user.login',
    'jym.user.security',
    'jym.user.settle-account'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user', {
                url: '/user',
                views: {
                    'user': {
                        controller: 'UserCtrl as user',
                        templateUrl: 'app/user/index.tpl.html'
                    }
                }
            });
    })
    .controller('UserCtrl', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.doRefresh = function() {
            user.refreshUser()
                .then(function(result) {
                    user.model = result;
                    user.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        user.refreshUser = function() {
            return UserService.getUserInfo();
        };

        user.refreshViewModel = function() {
            user.viewModel.cellphone = user.model.cellphone;
            user.viewModel.realName = user.model.realName || '未实名认证';
            user.viewModel.credentialNo = user.model.credentialNo || '未实名认证';
        };

        user.loginOut = function() {
            UserService.loginOut();
            JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_OUT);
            $timeout(function() {
                JYMUtilityService.goWithDisableBack('jym.user-login', {}, {reload: true})
            }, 1000);
        };

        $scope.$on('$ionicView.enter', function() {
            user.doRefresh();
        });

        user.doRefresh();
    });
