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