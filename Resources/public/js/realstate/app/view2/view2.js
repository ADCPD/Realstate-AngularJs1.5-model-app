'use strict';

angular.module('realstateApp.view2', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/logements/grid', {
            templateUrl: 'view2/view2.html',
            controller: 'getGridController'
        });
    }])



    .controller('getGridController', ['$scope', 'DataManagerService', 'LoadingService',
        function ($scope, DataManagerService, LoadingService) {
            var KEYS = {
                LIST: 'LIST',
                GRID: 'GRID'
            };

            $scope.currentView = null;
            $scope.loading = LoadingService.loading;

            LoadingService.start([KEYS.GRID]);

            $scope.entities = [];
            DataManagerService.getData()
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
