angular.module('jym.controllers', [
    'jym.services'
])
    .controller('SlidesCtrl', function($state, $timeout, $ionicSlideBoxDelegate, JYMConfigService,JYMUtilityService) {
        var ctrl = this;

        ctrl.slides = [];
        ctrl.activeSlideIndex = 0;

        JYMConfigService.getSlidesConfig()
            .then(function (result) {
                ctrl.slides = result;
            })
            .then(function () {
                $ionicSlideBoxDelegate.update();
            });

        ctrl.clickSlide = function(url){
            JYMUtilityService.open(url);
        };

        ctrl.onSlideChanged = function() {
            if(ctrl.activeSlideIndex === ctrl.slides.length - 2){
                $timeout(function() {
                    ctrl.activeSlideIndex = 0;
                }, 5000);
            }
        }
    });