'use strict';
angular.module('jym.user.detail', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-detail', {
                url: '/user/detail',
                views: {
                    '@': {
                        controller: 'DetailCtrl as ctrl',
                        templateUrl: 'app/user/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('DetailCtrl', function($scope, $timeout, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.cellphone = ctrl.model.cellphone;
            ctrl.viewModel.realName = ctrl.model.realName;
            ctrl.viewModel.credentialNo = ctrl.model.credentialNo;
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
