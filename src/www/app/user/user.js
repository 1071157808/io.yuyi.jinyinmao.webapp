angular.module('jym.user', [
    'jym.services.user',
    'jym.user.login'
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
    .controller('UserCtrl', function($scope, $state, $timeout, $ionicHistory, RESOURCES, UserService, JYMAuthService, JYMUtilityService) {
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
            this.viewModel.cellphone = this.model.cellphone;
            this.viewModel.realName = this.model.realName || '未实名认证';
            this.viewModel.credentialNo = this.model.credentialNo || '未实名认证';
        };

        user.loginOut = function() {
            JYMAuthService.clearToken();
            JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_OUT);
            $timeout(function() {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $state.go('jym.user-login', {}, {reload: true});
            }, 500);
        };

        user.doRefresh();
    });
