/*jshint -W024 */
'use strict';
angular.module('jym.jinbaoyin', [
        'jym.services.jinbaoyin',
        'jym.jinbaoyin.detail',
        'jym.constants'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/jinbaoyin',
                views: {
                    '@': {
                        controller: 'JinbaoyinCtrl as ctrl',
                        templateUrl: 'app/jinbaoyin/jinbaoyin.tpl.html'
                    }
                }
            });
    })
    .controller('JinbaoyinCtrl', function($scope, $timeout, $ionicDeploy, RESOURCES, APP, JinbaoyinService) {
        var ctrl = this;
        ctrl.model = {};
        ctrl.viewModel = {};
        ctrl.viewModel.yield = RESOURCES.JBYINFO.YIELD;
        ctrl.viewModel.title = RESOURCES.JBYINFO.TITLE;

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshProduct = function() {
            JinbaoyinService.getIndex()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.viewModel.title = result.productName + ' ' + '第' + result.issueNo + '期';
                    ctrl.viewModel.yield = result.yield / 100;
                    ctrl.viewModel.unitPrice = (result.unitPrice / 100).toFixed(0);
                });
        };

        ctrl.doRefresh();
    });
