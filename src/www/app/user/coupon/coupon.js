'use strict';
angular.module('jym.user.coupon', ['ionic'])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-coupon', {
                url: '/user/coupon',
                views: {
                    '@': {
                        controller: 'CouponCtrl as ctrl',
                        templateUrl: 'app/user/coupon/coupon.tpl.html'
                    }
                }
            });
    })
    .controller('CouponCtrl', function($scope, $timeout, $ionicPopup) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        //ctrl.doRefresh = function() {
        //  ctrl.refreshCouponCard()
        //    .then(function(result) {
        //      ctrl.model = result;
        //      ctrl.refreshViewModel();
        //      return result;
        //    });
        //
        //  $timeout(function() {
        //    $scope.$broadcast('scroll.refreshComplete');
        //  }, 1500);
        //};


        ctrl.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: ' ',
                template: '是否删除该优惠券？',
                okText: '是',
                cancelText: '否'
                //templateUrl: 'app/common/templates/confirm.tpl.html'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    console.log('You are sure');
                    //ctrl.removeCard();
                } else {
                    console.log('You are not sure');
                }
            });
        };

        //ctrl.doRefresh = function() {
        //  ctrl.refreshCoupon()
        //    .then(function(result) {
        //      ctrl.model = result;
        //      ctrl.refreshViewModel();
        //      return result;
        //    });
        //
        //  $timeout(function() {
        //    $scope.$broadcast('scroll.refreshComplete');
        //  }, 1500);
        //};
        //
        //$scope.$on('$ionicView.enter', function() {
        //  ctrl.doRefresh();
        //});
        //
        //ctrl.doRefresh();
        //
    });
