define(['app'], function (app) {
    app.register.factory('HomeService', ['$http', '$q', '$log',
        function ($http, $q, $log) {
            var query_url = "/home/note/";

            return {
                query: function () {
                    var d = $q.defer();
                    $http.get(query_url+'query').success(function (data) {
                        if (data.status === 0) {
                            d.resolve(data.data);
                        } else {
                            d.reject(data);
                        }
                    }).error(function (data, status, headers, config) {
                        d.reject(data);
                    }).then(function (response) {
                    });
                    return d.promise;
                },

                create: function (note) {
                    var d = $q.defer();
                    $http.post(query_url+'create', note).success(function (data) {
                        if (data.status === 0) {
                            d.resolve(data.data);
                        } else {
                            d.reject(data);
                        }
                    }).error(function (data, status, headers, config) {
                        d.reject(data);
                    }).then(function (response) {
                    });
                    return d.promise;
                },
                // update: function () {
                //     var d = $q.defer();
                //     $http.post('/Home/Update', {
                //         id:1,
                //         username: 'sold_car1',
                //         password: 'car_id1',
                //         role: 'sold_agent1'
                //     }).success(function (data) {
                //         if (data.status === 0) {
                //             d.resolve(data.data);
                //         } else {
                //             d.reject(data);
                //         }
                //     }).error(function (data, status, headers, config) {
                //         d.reject(data);
                //     }).then(function (response) {
                //     });
                //     return d.promise;
                // },
                // delete: function () {
                //     var d = $q.defer();
                //     $http.post('/Home/Delete', {
                //         id: 7
                //     }).success(function (data) {
                //         if (data.status === 0) {
                //             d.resolve(data.data);
                //         } else {
                //             d.reject(data);
                //         }
                //     }).error(function (data, status, headers, config) {
                //         d.reject(data);
                //     }).then(function (response) {
                //     });
                //     return d.promise;
                // }
            };
        }
    ]);
});
