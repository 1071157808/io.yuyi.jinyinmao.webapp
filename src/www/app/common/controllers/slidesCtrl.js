angular.module('jym.controllers', [])
    .controller('SlidesCtrl', function($state) {
        var slidesCtrl = this;

        slidesCtrl.isJinbaoyin = $state.includes('jym.jinbaoyin');
        slidesCtrl.isYinhangzhuanqu = $state.includes('jym.yinhangzhuanqu');
        slidesCtrl.isYinpiao = $state.includes('jym.yinpiao');
        slidesCtrl.isShangpiao = $state.includes('jym.shangpiao');
        slidesCtrl.isUser = $state.includes('jym.user');

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

        slidesCtrl.indexTabs = [{
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
    });