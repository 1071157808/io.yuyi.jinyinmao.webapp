'use strict';
angular.module('jym.user.about', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-about', {
                url: '/about',
                views: {
                    user: {
                        controller: 'AboutCtrl as ctrl',
                        templateUrl: 'app/user/about/about.tpl.html'
                    }
                }
            });
    })
    .controller('AboutCtrl', function(APP) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.viewModel = APP.VERSION;
    });
