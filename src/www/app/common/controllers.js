angular.module('jym.controllers', [
    'jym.services'
])
    .controller('HeaderCtrl', function($state) {
        var headerCtrl = this;

        headerCtrl.isJinbaoyin = $state.includes('jym.jinbaoyin');
        headerCtrl.isYinhangzhuanqu = $state.includes('jym.yinhangzhuanqu');
        headerCtrl.isYinpiao = $state.includes('jym.yinpiao');
        headerCtrl.isShangpiao = $state.includes('jym.shangpiao');
        headerCtrl.isUser = $state.includes('jym.user');

        function getJinbaoyinTabClass() {
            return $state.includes('jym.jinbaoyin') ?
                'jym-icon-home active' : 'jym-icon-home';
        }

        function getYinhangzhuanquTabClass() {
            return $state.includes('jym.yinhangzhuanqu') ?
                'jym-icon-zhuan active' : 'jym-icon-zhuan';
        }

        function getYinpiaoTabClass() {
            return $state.includes('jym.yinpiao') ?
                'jym-icon-yin active' : 'jym-icon-yin';
        }

        function getShangpiaoTabClass() {
            return $state.includes('jym.shangpiao') ?
                'jym-icon-shang active' : 'jym-icon-shang';
        }

        function getUserTabClass() {
            return $state.includes('jym.user') ?
                'jym-icon-user active' : 'jym-icon-user';
        }

        headerCtrl.indexTabs = [{
            sref: 'jym.user',
            'class': getUserTabClass()
        }, {
            sref: 'jym.shangpiao',
            'class': getShangpiaoTabClass()
        }, {
            sref: 'jym.yinpiao',
            'class': getYinpiaoTabClass()
        }, {
            sref: 'jym.yinhangzhuanqu',
            'class': getYinhangzhuanquTabClass()
        }, {
            sref: 'jym.jinbaoyin',
            'class': getJinbaoyinTabClass()
        }];
    })
    .controller('SlidesCtrl', function($state, JYMConfigService,JYMUtilityService) {
        var slidesCtrl = this;

        slidesCtrl.slides = [];
        slidesCtrl.activeSlideIndex = 0;

        JYMConfigService.getSlidesConfig()
            .then(function (result) {
                slidesCtrl.slides = result;
            })
            .then(function () {
                $ionicSlideBoxDelegate.update();
            });

        slidesCtrl.clickSlide = function(url){
            JYMUtilityService.open(url);
        };

        slidesCtrl.onSlideChanged = function() {
            if(slidesCtrl.activeSlideIndex === slidesCtrl.slides.length - 2){
                $timeout(function() {
                    slidesCtrl.activeSlideIndex = 0;
                }, 5000);
            }
        }
    });