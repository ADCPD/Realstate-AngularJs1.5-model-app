'use strict';

angular.module('realstateApp.view1', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/logements', {
            templateUrl: 'view1/view1.html',
            controller: 'getListController'
        })
            .when('/logements/list', {
                templateUrl: 'view1/view1.html',
                controller: 'getListController'
            })
            .otherwise({
                    redirectTo: '/logements/list',
                    reloadOnSearch: true
                }
            )
    }])


    .controller('getListController', ['$scope', 'DataManagerService', 'LoadingService',
        function ($scope, DataManagerService, LoadingService) {
            var KEYS = {
                LIST: 'LIST'
            };

            $scope.currentView = null;
            $scope.loading = LoadingService.loading;

            LoadingService.start([KEYS.LIST]);

            $scope.entities = [];
            DataManagerService.getData()
                .then(function (res) {
                    LoadingService.finish(KEYS.LIST);
                    $scope.entities = res.data;

                    /** PAGINATION  */

                    $scope.filteredTodos = [];
                    $scope.currentPage = 1;
                    $scope.numPerPage = 10;
                    $scope.maxSize = 5;

                    $scope.$watch("currentPage + numPerPage", function () {
                        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                            , end = begin + $scope.numPerPage;

                        $scope.filteredTodos = $scope.entities.slice(begin, end);
                    });

                    /**  orderBy Filter  */
                    $scope.propertyName = 'createAt';
                    $scope.reverse = true;

                    $scope.sortBy = function (propertyName) {
                        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                        $scope.propertyName = propertyName;
                    };

                }, function () {
                    console.log('error');
                });


        }]);
