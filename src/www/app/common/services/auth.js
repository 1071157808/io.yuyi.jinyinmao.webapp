angular.module('jym.services.auth', [
    'jym.services.cache'
])
    .service('JYMAuthService', function(JYMCacheService) {
        var service = this;
        var tokenStorage = JYMCacheService.get('authTokenCache');

        service.clearToken = function() {
            tokenStorage.set('auth', '');
        };

        service.getToken = function() {
            return tokenStorage.get('auth') || '';
        };

        service.setToken = function(newToken) {
            if (newToken) {
                tokenStorage.set('auth', newToken);
            }
        };
    });