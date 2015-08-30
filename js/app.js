define(['jquery', 'angular', 'ngRoute', 'ngAMD'], function (jquery, angular, ngRoute, ngAMD) {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', '$httpProvider',
      function ($routeProvider, $locationProvider, $httpProvider) {
          // $locationProvider.html5Mode(true).hashPrefix('!');

          // 相同的templateUrl可以给不同的controller
          $routeProvider
            .when('/', ngAMD.route({
                templateUrl: 'views/home/index.html',
                controller: 'HomeController'
            }))
            .otherwise({
                redirectTo: '/'
            });
            //.when('/car/list', ngAMD.route({
            //    templateUrl: 'views/car/list.html',
            //    controller: 'CarListController'
            //}))
            //.when('/car/create', ngAMD.route({
            //    template: "<h2>正在生成车辆编号，请稍等……</h2>",
            //    controller: 'CarCreateController'
            //}))
            //.when('/car/edit/:id', ngAMD.route({
            //    templateUrl: 'views/car/edit.html',
            //    controller: 'CarEditController'
            //}))
            //.when('/owner', ngAMD.route({
            //    templateUrl: 'views/owner/edit.html',
            //    controller: 'OwnerController'
            //}))
            
      }
    ]);

    // Bootstrap Angular when DOM is ready
    ngAMD.bootstrap(app);

    return app;
});