'use strict';
angular.module('jym.controllers', [
    'jym.services'
])
    .controller('SlidesCtrl', function($timeout, $ionicSlideBoxDelegate, JYMConfigService, JYMUtilityService) {
        var ctrl = this;

        ctrl.slides = [];
        ctrl.activeSlideIndex = 0;

        JYMConfigService.getSlidesConfig()
            .then(function(result) {
                ctrl.slides = result;
            })
            .then(function() {
                $ionicSlideBoxDelegate.update();
            });

        ctrl.clickSlide = function(url) {
            JYMUtilityService.open(url);
        };

        ctrl.onSlideChanged = function() {
            if (ctrl.activeSlideIndex === ctrl.slides.length - 2) {
                $timeout(function() {
                    ctrl.activeSlideIndex = 0;
                }, 5000);
            }
        };
    })
    .controller('TabsCtrl', function($scope, $rootScope, $state) {
        var indexPage = ['jym.jinbaoyin', 'jym.shangpiao', 'jym.user', 'jym.yinpiao', 'jym.zhuanqu'];
        $rootScope.$on('$ionicView.beforeEnter', function() {
            var pageName = $state.current.name;
            $rootScope.hideTabs = indexPage.indexOf(pageName) < 0;
        });
        $rootScope.$on('$ionicView.enter', function() {
            var pageName = $state.current.name;
            $rootScope.hideTabs = indexPage.indexOf(pageName) < 0;
        });
    });
