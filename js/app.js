(function () {
    angular
        .module('myWebSeit', ['ngRoute', 'ngCookies'])
        .config(routeProvider)
        .run(runFunc);

    function routeProvider($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/management/login', {
                templateUrl: '/templates/management/login.html',
                controller: 'loginController',
                controllerAs: 'mainCtrl',
                authenticated: true
            })
            .otherwise('/management/login');
    }
    function runFunc($rootScope, $location, authFactory) {
        $rootScope.$on("$routeChangeStart",
            function (event, next, current) {
                if (next.$$route.authenticated) {
                    if (!authFactory.getAuthStatus()) {
                        $location.path("/management/login");
                    } else if (authFactory.getAuthStatus() == true && next.$$route.originalPath == "/management/login") {
                        $location.path("/management/control-panel");
                    } else if (authFactory.getAuthStatus() == true) {
                        $location.path(next.$$route.originalPath)
                    }
                }
            });
    }
})();