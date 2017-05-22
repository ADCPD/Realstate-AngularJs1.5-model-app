'use strict';

angular.module('realstateApp.view3', ['ngRoute', 'ui.bootstrap', 'ngSanitize'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/evennements', {
                    templateUrl: 'view3/view3.html',
                    controller: 'getEventListController',
                    reloadOnSearch: true
                }
            )

            .when('/evennements/list', {
                    templateUrl: 'view3/view3.html',
                    controller: 'getEventListController',
                    reloadOnSearch: true
                }
            )

            .otherwise({
                    redirectTo: '/evennements/list',
                    reloadOnSearch: true
                }
            )
        ;

        $locationProvider.html5Mode({
            enable: true,
            requireBase: false
        });

    }])


    .controller('getEventListController', ['$scope', 'DataManagerService', 'LoadingService',
        function ($scope, DataManagerService, LoadingService) {
            var KEYS = {
                LIST: 'LIST'
            };

            $scope.currentView = null;
            $scope.loading = LoadingService.loading;

            LoadingService.start([KEYS.LIST]);

            $scope.entities = [];
            DataManagerService.getEventData()
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