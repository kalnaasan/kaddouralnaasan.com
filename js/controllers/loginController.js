(function () {
    angular
        .module("myWebSeit")
        .controller("loginController", loginController);

    function loginController($location, authFactory) {
        var ctrl = {}
        ctrl.username = "";
        ctrl.password = "";
        ctrl.login = function () {
            console.log("Do Login");
            if (authFactory.doLogin(ctrl.username, ctrl.password)) {
                $location.path("/management/control-panel")
            } else{
                alert("The Username or Password is wrong.")
            }
        }
        return ctrl
    }

})();