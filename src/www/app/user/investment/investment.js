'use strict';
angular.module('jym.user.investment', [
        'jym.services.user'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-investment', {
                url: '/user/investment',
                views: {
                    '@': {
                        controller: 'InvestmentCtrl as ctrl',
                        templateUrl: 'app/user/investment/investment.tpl.html'
                    }
                }
            });
    })
    .controller('InvestmentCtrl', function($scope, $timeout, UserService) {
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
            ctrl.viewModel.totalAmount = ((ctrl.model.jBYTotalAmount + ctrl.model.investingPrincipal) / 100).toFixed(2);
            ctrl.viewModel.investingPrincipal = (ctrl.model.investingPrincipal / 100).toFixed(2);
            ctrl.viewModel.yinInvestingPrincipal = (ctrl.model.yinInvestingPrincipal / 100).toFixed(2);                
            ctrl.viewModel.shangInvestingPrincipal = (ctrl.model.shangInvestingPrincipal / 100).toFixed(2);
            ctrl.viewModel.bankInvestingPrincipal = (ctrl.model.bankInvestingPrincipal / 100).toFixed(2);
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
