'use strict';

// Declare app level module which depends on views, and components
angular.module('realstateApp', [
    'ngRoute',
    'ui.bootstrap',
    'realstateApp.view1',
    'realstateApp.view2',
    'realstateApp.view3',
    'realstateApp.view4',
    'realstateApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]);

 