angular.module('jym.services.utility', [])
    .service('JYMUtilityService', function($state, $cordovaInAppBrowser) {
        var service = this;

        /**
         * Matcher.
         */

        var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[:?\d]*)\S*$/;

        /**
         * Loosely validate a URL `string`.
         *
         * @param {String} string
         * @return {Boolean}
         */

        function isUrl(string) {
            return matcher.test(string);
        }

        function open(url) {
            if (service.isUrl(url)) {
                $cordovaInAppBrowser.open(url, '_system');
            } else {
                $state.go(url);
            }
        }

        service.isUrl = isUrl;
        service.open = open;
    });