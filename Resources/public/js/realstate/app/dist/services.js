angular.module('realstateApp')
    .factory('DataManagerService', ['$window', '$http', function ($window, $http) {
        var _getData = function () {
            var url = $window.Routing.generate('fr__RG__realstate_list_proprities__public_json', {});
            return $http.get(url);
        };

        var _getEventData = function () {
            var url = $window.Routing.generate('fr__RG__realstate_list_events__public_json', {});
            return $http.get(url);
        };

        var _getCalendarEvent = function () {
            var url = $window.Routing.generate('fr__RG__realstate_list_events_calendar_json', {});
            return $http.get(url);
        };

        return {
            getData: _getData,
            getEventData: _getEventData,
            getCalendarEvent: _getCalendarEvent
        }

    }]);
/**
 * Created by dhaouadi_a on 01/02/2017.
 */

angular.module("realstateApp")
    .factory("LoadingService", [function () {


        var states = {};

        var _start = function (key) {

            if (angular.isArray(key)) {
                angular.forEach(key, function (k) {
                    states[k] = true;
                }, states);
            } else {
                states[key] = true;
            }


        };

        var _finish = function (key) {
            states[key] = false;
        };


        var _get = function (key) {
            return states[key];
        };


        return {

            start: _start,
            finish: _finish,
            get: _get,
            loading: states

        }

    }]);