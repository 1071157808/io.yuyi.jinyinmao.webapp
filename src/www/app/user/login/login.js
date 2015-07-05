angular.module('jym.user.login', [
    'jym.services.user',
    'jym.user.signup'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-login', {
                url: '/user/login/{backState}',
                views: {
                    user: {
                        controller: 'UserLoginCtrl as user',
                        templateUrl: 'app/user/login/login.tpl.html'
                    }
                }
            })
    })
    .controller('UserLoginCtrl', function($scope, $stateParams, $timeout, RESOURCES, REGEX, UserService, JYMUtilityService) {
        var user = this;

        user.viewModel = {};
        user.viewModel.cellphone = undefined;
        user.viewModel.password = undefined;

        user.doRefresh = function() {
            user.viewModel.password = undefined;
        };

        user.login = function() {
            if (user.loginButtonEnable()) {
                UserService.login(user.viewModel.cellphone, user.viewModel.password)
                    .then(function(result) {
                        if (!result.userExist) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_NOT_EXIST);
                            return;
                        }

                        if (result.lock) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_PASSWORD_LOCK);
                            return;
                        }

                        if (result.remainCount < 3) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_PASSWORD_REMIAN_LESS);
                            return;
                        }

                        if (!result.success) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_FAIL);
                            return;
                        }

                        JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_SUCCESS);

                        $timeout(function() {
                            JYMUtilityService.goWithDisableBack('jym.user');
                        }, 1000);
                    });

            }
        };

        user.loginButtonEnable = function() {
            return user.viewModel.cellphone && user.viewModel.password;
        };

        $scope.$on('$ionicView.enter', function() {
            user.doRefresh();
        });
    });
