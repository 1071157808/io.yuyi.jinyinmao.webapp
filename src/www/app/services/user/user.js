angular.module('jym.services.user', [
    'jym.services'
])
    .service('UserService', function($http, URLS, RESOURCES, JYMAuthService, JYMCacheService, JYMUtilityService) {
        var service = this;

        var currentUser = {};

        service.checkUserPurchaseStatus = function() {
            return service.getUserInfo()
                .then(function(user) {
                    if (user.closed === true) {
                        throw RESOURCES.USER.CLOSED;
                    }

                    if (user.hasSetPaymentPassword === false) {
                        throw RESOURCES.USER.PAYMENT_PASSWORD_NEED_RESET;
                    }

                    if (user.hasSetPaymentPassword >= 5) {
                        throw RESOURCES.USER.PAYMENT_PASSWORD_NEED_RESET
                    }

                    return user;
                });
        };

        service.getBankCard = function(bankCardNo) {
            var url = URLS.BANKCARD.INFO + bankCardNo;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getBankCards = function() {
            var url = URLS.BANKCARD.LIST;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getCurrentUser = function() {
            service.getUserInfo();
            return currentUser;
        };

        service.getSettelAccountList = function(pageIndex) {
            var url = URLS.SETTLEACCOUNT.LIST + pageIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getUserInfo = function() {
            return $http.get(URLS.USER.GETINFO, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                currentUser = result.data;
                return currentUser;
            });
        };

        service.login = function(loginName, password) {
            return $http.post(URLS.USER.SIGNIN, {
                loginName: loginName,
                password: password
            })
                .then(function(result) {
                    return result.data;
                });
        };

        service.loginOut = function() {
            JYMAuthService.clearToken();
        };

        service.removeCard = function(bankCardNo) {
            var url = URLS.BANKCARD.REMOVE;

            return $http.post(url, {
                bankCardNo: bankCardNo
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.resetLoginPassword = function(password, token) {
            var url = URLS.USER.RESETLOGINPASSWORD;

            return $http.post(url, {
                password: password,
                token: token
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.sendVeriCode = function(cellphone, type) {
            var url = URLS.USER.SENDVERICODE;

            return $http.post(url, {
                cellphone: cellphone,
                type: parseInt(type)
            })
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    if (!result.success || result.remainCount < 0) {
                        JYMUtilityService.showAlert(RESOURCES.ALERT.USER.TOO_MANY_VERI_CODE);
                        return false;
                    }

                    return true;
                });
        };

        service.verifyVeriCode = function(cellphone, type, code) {
            var url = URLS.USER.VERIFYVERICODE;

            return $http.post(url, {
                cellphone: cellphone,
                type: parseInt(type),
                code: code
            })
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    if (!result.success || result.remainCount < 0) {
                        JYMUtilityService.showAlert(RESOURCES.ALERT.USER.VERI_CODE_FAIL);
                        return false;
                    }

                    return result;
                });
        };
    });
