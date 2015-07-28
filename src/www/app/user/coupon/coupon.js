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


        ctrl.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: ' ',
                template: '是否删除该优惠券？',
                okText: '是',
                cancelText: '否'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };
    });
