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

        // var _getCalendarEvent = function () {
        //     var url = $window.Routing.generate('fr__RG__realstate_list_events_calendar_json', {});
        //     return $http.get(url);
        // };

        return {
            getData: _getData,
            getEventData: _getEventData
            // getCalendarEvent: _getCalendarEvent
        }

    }]);