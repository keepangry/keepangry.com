define(['app', 'home/services/HomeService', ], function (app) {
    app.register.controller('HomeController', ['$scope', '$location', '$timeout','HomeService', function ($scope, $location, $timeout, HomeService) {
        //$scope.rows = [{username:"yangsen",role:"ADMIN"}, {username:"ys",role:"editor"}];
        $scope.note = {type:"微博"};

        $scope.query = function () {
            HomeService.query().then(function (result) {
                $scope.rows = result;
                console.log($scope.rows);
            }, function (result) {
                console.log(result);
            });
        };

        $scope.create = function () {
            if(!$scope.note.content){
                alert("不能为空。");
                return;
            }

            HomeService.create($scope.note).then(function (result) {
                //立刻执行?
            }, function (result) {
                //成功后回调
                $scope.query();
                $scope.note.content='';
                console.log(result);
            });
            
            
        };

        
        $scope.query();
        // $scope.create = function () {
        //     LoginService.create().then(function (result) {
        //         console.log(result);
        //     }, function (result) {
        //         console.log(result);
        //     });
        // };
        // $scope.update = function () {
        //     LoginService.update().then(function (result) {
        //         console.log(result);
        //     }, function (result) {
        //         console.log(result);
        //     });
        // };
        // $scope.delete = function () {
        //     LoginService.delete().then(function (result) {
        //         console.log(result);
        //     }, function (result) {
        //         console.log(result);
        //     });
        // };

    }]);
});