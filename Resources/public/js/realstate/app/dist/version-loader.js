'use strict';

angular.module('realstateLogApp.version', [
  'realstateApp.version.interpolate-filter',
  'realstateApp.version.version-directive'
])

.value('version', '0.1');

'use strict';

angular.module('realstateLogApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

'use strict';

angular.module('realstateLogApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
