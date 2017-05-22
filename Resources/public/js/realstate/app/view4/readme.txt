Module Angularjs  :  'ngSanitize' {un module qui permet de convertir les balise html inclu dans du  html }

Declation module :
angular.module('realstateApp.view4', ['ngRoute', 'ui.bootstrap','ngSanitize'])

Declartion  HTML :
<p style="text-align: justify;" ng-bind-html="item.content"></p>
