(function () {
    angular
        .module("myWebSeit")
        .factory('authFactory', authFactory);

    function authFactory($cookies) {
        var fty = {};
        fty.doLogin = function (username, password) {
            if (username == "kaddour" && password == "123456") {
                $cookies.put('auth', username + password)
                return true;
            } else {
                return false;
            }

        };

        fty.getAuthStatus = function () {
            var status = $cookies.get('auth');
            if (status) {
                return true;
            } else {
                return false;
            }
        }

        return fty;
    }
})();