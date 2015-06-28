angular.module('jym.user.security', [
    'jym.user.security-password',
    'jym.user.security-payment-password'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-security', {
                url: '/user/security',
                views: {
                    'user': {
                        controller: 'UserSecurityCtrl as ctrl',
                        templateUrl: 'app/user/security/security.tpl.html'
                    }
                }
            });
    })
    .controller('UserSecurityCtrl', function($scope, $stateParams, $timeout, RESOURCES, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.hasSetPaymentPassword = ctrl.model.user.verified;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });
    });
