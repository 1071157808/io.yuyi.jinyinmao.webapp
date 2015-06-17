angular.module('jym.services.user', [
    'jym.services'
])
    .service('UserService', function($http, URLS, RESOURCES, JYMCacheService) {
        var service = this;

        var currentUser = {};

        service.getUserInfo = function() {
            return $http.get(URLS.USER.GETINFO, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                currentUser = result.data;
                return currentUser;
            });
        };

        service.getCurrentUser = function() {
            service.getUserInfo();
            return currentUser;
        };

        service.checkUserPurchaseStatus = function() {
            service.getUserInfo()
                .then(function(user) {
                    if(user.closed === true) {
                        throw RESOURCES.USER.CLOSED;
                    }

                    if(user.hasSetPaymentPassword === false) {
                        throw RESOURCES.USER.PAYMENT_PASSWORD_NEED_RESET;
                    }

                    if(user.hasSetPaymentPassword >= 5) {
                        throw RESOURCES.USER.PAYMENT_PASSWORD_NEED_RESET
                    }

                    return user;
                })
        }

    });
