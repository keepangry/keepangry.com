define(['app', 'login/services/LoginService', ], function (app) {
    app.register.controller('LoginController', ['$scope', '$location', '$timeout', 'LoginService', function ($scope, $location, $timeout, LoginService) {
        $scope.rows = [{username:"yangsen",role:"ADMIN"}, {username:"ys",role:"editor"}];

        

        $scope.query = function () {
            LoginService.query().then(function (result) {
                $scope.rows = result.users;
                console.log($scope.rows);
            }, function (result) {
                console.log(result);
            });
        };
        $scope.create = function () {
            LoginService.create().then(function (result) {
                console.log(result);
            }, function (result) {
                console.log(result);
            });
        };
        $scope.update = function () {
            LoginService.update().then(function (result) {
                console.log(result);
            }, function (result) {
                console.log(result);
            });
        };
        $scope.delete = function () {
            LoginService.delete().then(function (result) {
                console.log(result);
            }, function (result) {
                console.log(result);
            });
        };

    }]);
});