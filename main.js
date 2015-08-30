require.config({

    baseUrl: "js",

    paths: {

        //本地
        angular: '../vendor/angular-1.3.0/angular',
        ngRoute: '../vendor/angular-1.3.0/angular-route',
        ngResource: '../vendor/angular-1.3.0/angular-resource',
        ngAMD: '../vendor/angular-1.3.0/angularAMD',
        jquery: '../vendor/jquery-1.11.1',
        bootstrap: '../vendor/bootstrap-3.2.0/js/bootstrap',
        datetimepicker: '../vendor/bootstrap-3.2.0/datetimepicker/bootstrap-datetimepicker',

        //moxie: '../vendor/plupload-2.1.2/moxie.min',
        //plupload: '../vendor/plupload-2.1.2/plupload.min',
        //qiniu: '../vendor/plupload-2.1.2/qiniu.min',

        //CarListController: 'car/controllers/carListController',
        //CarEditController: 'car/controllers/carEditController',
        //CarCreateController: 'car/controllers/carCreateController',
        //OwnerController: 'owner/controllers/ownerController',
        LoginController: 'login/controllers/LoginController',
        HomeController: 'home/controllers/HomeController',

        //notification: '../vendor/angular-notifications/notification',
        //canvasToblob: '../vendor/canvas-to-blob/canvas-to-blob.min'
    },

    shim: {
        'jquery': {
            'exports': 'jquery'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'datetimepicker': {
            deps: ['bootstrap']
        },
        //'plupload': {
        //    deps: ['moxie']
        //},
        //'qiniu': {
        //    deps: ['plupload']
        //},
        'angular': {
            deps: ['jquery', 'bootstrap'],
            exports: 'angular'
        },
        'ngResource': {
            deps: ['angular']
        },
        'ngRoute': {
            deps: ['angular']
        },
        'ngAMD': {
            deps: ['angular']
        },
        //'notification': {
        //    deps: ['angular']
        //},
        //'canvasToblob': {
        //    deps: []
        //}
    },

    priority: [
      "jquery",
      "angular",
      "bootstrap",
      "datetimepicker"
    ],

    // kick start application
    deps: ['app']

});