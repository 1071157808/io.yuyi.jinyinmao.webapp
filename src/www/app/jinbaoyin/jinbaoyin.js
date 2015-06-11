angular.module('jym.jinbaoyin', [
    'jym.services'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/jinbaoyin',
                views: {
                    '@':{
                        controller: 'JinbaoyinCtrl as jinbaoyinCtrl',
                        templateUrl: 'app/jinbaoyin/index.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinCtrl', function() {
        var jinbaoyinCtrl = this;

    })
    .controller('JinbaoyinIndexSlideBoxCtrl', function($ionicSlideBoxDelegate, $timeout, JYMConfigService, JYMUtilityService) {
        var jinbaoyinIndexSlideBoxCtrl = this;
        jinbaoyinIndexSlideBoxCtrl.slides = [];
        jinbaoyinIndexSlideBoxCtrl.activeSlideIndex = 0;

        JYMConfigService.getSlidesConfig()
            .then(function (result) {
                jinbaoyinIndexSlideBoxCtrl.slides = result;
            })
            .then(function () {
                $ionicSlideBoxDelegate.update();
            });

        jinbaoyinIndexSlideBoxCtrl.clickSlide = function(url){
            JYMUtilityService.open(url);
        };

        jinbaoyinIndexSlideBoxCtrl.onSlideChanged = function() {
            if(jinbaoyinIndexSlideBoxCtrl.activeSlideIndex === jinbaoyinIndexSlideBoxCtrl.slides.length - 2){
                $timeout(function() {
                    jinbaoyinIndexSlideBoxCtrl.activeSlideIndex = 0;
                }, 5000);
            }
        }

    });
