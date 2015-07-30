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
    .controller('CouponCtrl', function($scope, $timeout, $ionicPopup, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};
        ctrl.viewModel.items = [];

        var getViewItem = function(modelItem) {
            var item = {};
            item.addTime = modelItem.addTime;
            item.amount = (modelItem.amount / 100).toFixed();
            item.effectiveEndTime = modelItem.effectiveEndTime;
            item.effectiveStartTime = modelItem.effectiveStartTime;
            item.id = modelItem.id;
            item.remark = modelItem.remark;
            item.useFlag = modelItem.useFlag;
            item.useTime = modelItem.useTime;

            return item;
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refreshCoupons()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshCoupons = function() {
            return UserService.getCoupons();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.items = ctrl.model;
            _.forEach(ctrl.model.items, function(i) {
                ctrl.viewModel.items.push(getViewItem(i));
            });
        };

        ctrl.removeCoupon = function(couponId) {
            UserService.removeCoupon(couponId)
                .then(function() {
                    JYMUtilityService.showAlert(RESOURCES.TIP.COUPON.REMOVE_SUCCESS);

                    $timeout(function() {
                        ctrl.doRefresh();
                    }, 1000);
                });
        };

        ctrl.showConfirm = function(couponId) {
            var confirmPopup = $ionicPopup.confirm({
                title: ' ',
                template: '是否删除该优惠券？',
                okText: '是',
                cancelText: '否'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    ctrl.removeCoupon(couponId);
                }
            });
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
