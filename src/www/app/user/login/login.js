angular.module('jym.user.login', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-login', {
                url: '/user/login/{backState}',
                views: {
                    'user': {
                        controller: 'UserLoginCtrl as user',
                        templateUrl: 'app/user/login/login.tpl.html'
                    }
                }
            })
    })
    .controller('UserLoginCtrl', function($stateParams, RESOURCES, REGEX, UserService, JYMUtilityService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.checkInput = function(showAlert) {
            showAlert = showAlert || false;
            var message = '';

            if (!user.viewModel.cellphone || !REGEX.CELLPHONE.test(user.viewModel.cellphone)) {
                message = RESOURCES.TIP.INVALID_CELLPHONE;
            } else if (!user.viewModel.password || !REGEX.PASSWORD.test(user.viewModel.password)) {
                message = RESOURCES.TIP.INVALID_PASSWORD;
            } else {
                return true;
            }

            if(showAlert) {
                JYMUtilityService.showAlert(message);
            }

            return false;
        };

        user.login = function() {
            if (user.checkInput(true)) {
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

                        var backState = 'jym.user';
                        if($stateParams.backState) {
                            backState = $stateParams.backState;
                        }

                        JYMUtilityService.goWithDisableBack(backState);
                    });

            }
        };
    });