'use strict';

angular.module('realstateApp.view4', ['ngRoute', 'ui.bootstrap', 'ngSanitize'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/evennements/grid', {
            templateUrl: 'view4/view4.html',
            controller: 'getEventGridController'
        });
    }])


    .controller('getEventGridController', ['$scope', 'DataManagerService', 'LoadingService',
        function ($scope, DataManagerService, LoadingService) {
            var KEYS = {
                LIST: 'LIST',
                GRID: 'GRID'
            };

            $scope.currentView = null;
            $scope.loading = LoadingService.loading;

            LoadingService.start([KEYS.GRID]);

            $scope.entities = [];
            DataManagerService.getEventData()
                .then(function (res) {
                    LoadingService.finish(KEYS.GRID);
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
