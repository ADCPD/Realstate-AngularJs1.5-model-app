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

 
angular.module('realstateApp').run(['$templateCache', function($templateCache) {$templateCache.put('view1/view1.html','<div class="container" ng-controller="getListController">\r\n\r\n\r\n    <div class="col-md-3">\r\n\r\n        <div class="panel panel-default" data-toggle="panel-collapse" data-open="true">\r\n            <div class="panel-heading panel-collapse-trigger collapse in" data-toggle="collapse"\r\n                 data-target="#4ecdc2cc-3356-5a94-39a7-247a235aa415" aria-expanded="true">\r\n                <h4 class="panel-title">Recherche</h4>\r\n            </div>\r\n            <div class="collapse in">\r\n                <div class="panel-body">\r\n                    <div class="form-group input-group">\r\n                        <input type="text" class="form-control" placeholder="Search" ng-model="searchText.$">\r\n                        <span class="input-group-btn">\r\n\t\t\t               \t<button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>\r\n\t\t                \t</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="panel panel-default" data-toggle="panel-collapse" data-open="true">\r\n            <div class="panel-heading panel-collapse-trigger collapse in" data-toggle="collapse"\r\n                 data-target="#9cd083d1-8d00-7f4d-6b2c-210587b067cf" aria-expanded="true">\r\n                <h4 class="panel-title">Lodging</h4>\r\n            </div>\r\n\r\n            <div id="9cd083d1-8d00-7f4d-6b2c-210587b067cf" class="collapse in" aria-expanded="true">\r\n                <div class="panel-body">\r\n                    <div class="form-group">\r\n                        <label for="bedrooms">Bedrooms:</label>\r\n                        <div class="input-group bootstrap-touchspin"><span\r\n                                class="input-group-addon bootstrap-touchspin-prefix"\r\n                                style="display: none;"></span><input id="bedrooms" data-toggle="touch-spin"\r\n                                                                     data-verticalbuttons="true" type="text"\r\n                                                                     ng-model="searchText.bedroom"\r\n                                                                     name="guests" class="form-control"\r\n                                                                     placeholder="0"\r\n                                                                     style="display: block;">\r\n                            <span\r\n                                    class="input-group-addon bootstrap-touchspin-postfix"\r\n                                    style="display: none;"></span><span class="input-group-btn-vertical"><button\r\n                                    class="btn btn-default bootstrap-touchspin-up" type="button"><i\r\n                                    class="glyphicon glyphicon-chevron-up"></i></button><button\r\n                                    class="btn btn-default bootstrap-touchspin-down" type="button"><i\r\n                                    class="glyphicon glyphicon-chevron-down"></i></button></span></div>\r\n                    </div>\r\n                    <div class="form-group margin-none">\r\n                        <label for="bathrooms">Bathrooms:</label>\r\n                        <div class="input-group bootstrap-touchspin"><span\r\n                                class="input-group-addon bootstrap-touchspin-prefix"\r\n                                style="display: none;"></span><input id="bathrooms" data-toggle="touch-spin"\r\n                                                                     data-verticalbuttons="true" type="text"\r\n                                                                     placeholder="0"\r\n                                                                     name="guests" class="form-control"\r\n                                                                     ng-model="searchText.bathroom"\r\n                                                                     style="display: block;">\r\n                            <span\r\n                                    class="input-group-addon bootstrap-touchspin-postfix"\r\n                                    style="display: none;"></span><span class="input-group-btn-vertical"><button\r\n                                    class="btn btn-default bootstrap-touchspin-up" type="button"><i\r\n                                    class="glyphicon glyphicon-chevron-up"></i></button><button\r\n                                    class="btn btn-default bootstrap-touchspin-down" type="button"><i\r\n                                    class="glyphicon glyphicon-chevron-down"></i></button></span></div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="panel panel-default" data-toggle="panel-collapse" data-open="true">\r\n            <div class="panel-heading panel-collapse-trigger collapse in" data-toggle="collapse"\r\n                 data-target="#4d4b38a6-989f-e0d9-3077-40f1f38eff1f" aria-expanded="true">\r\n                <h4 class="panel-title">Price per night</h4>\r\n            </div>\r\n\r\n            <div id="4d4b38a6-989f-e0d9-3077-40f1f38eff1f" class="collapse in" aria-expanded="true">\r\n                <div class="panel-body">\r\n\r\n                    <div slider ng-model="price.price" start=1 end=10></div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class="col-md-9">\r\n\r\n        <div class="row">\r\n            <div class="col-xs-6">\r\n                <h4><span class="text-primary">{{ entities.length }}</span> Results</h4>\r\n            </div>\r\n\r\n            <div class="col-xs-6 text-right">\r\n                <div class="dropdown display-inline-block">\r\n                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"\r\n                            aria-expanded="false">\r\n                        Sort by:\r\n                        <span class="caret"></span>\r\n                    </button>\r\n                    <ul class="dropdown-menu pull-right" ng-model="selectFilter">\r\n                        <li><a>Action</a></li>\r\n                        <li>\r\n                            <a data-value="price" value="price" ng-click="sortBy(\'price\')">Prix\r\n                                <span class="sortorder" ng-show="propertyName === \'price\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a data-value="createAt" value="createAt" ng-click="sortBy(\'createAt\')">Date\r\n                                <span class="sortorder" ng-show="propertyName === \'createAt\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class="btn-group display-inline-block">\r\n                    <a class="btn btn-primary active" href="#!/logements/list"><i class="fa fa-list"></i></a>\r\n                    <a class="btn btn-primary" href="#!/logements/grid"><i class="fa fa-th"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n\r\n        <div class="row">\r\n            <div class="panel panel-default"\r\n                 ng-repeat="item in entities | filter:searchText | orderBy:propertyName:reverse ">\r\n                <div class="panel-body">\r\n                    <div class="media media-clearfix-xs media-clearfix-sm">\r\n                        <div class="media-left">\r\n                            <p>\r\n                                <a href="/{{item.locale}}/estate-{{ item.id}}.html">\r\n                                    <img src="/{{ item.images }}" alt="property-{{ item.rentOrSale }}-{{item.id}}"\r\n                                         width="150"\r\n                                         class="media-object">\r\n                                </a>\r\n                            </p>\r\n                        </div>\r\n                        <div class="media-body">\r\n                            <div class="pull-right">\r\n                            </div>\r\n                            <h4 class="media-heading margin-v-0-10">\r\n                                <a href="/{{item.locale}}/estate-{{ item.id}}.html">{{item.title}}</a>\r\n\r\n                                <small class="text-grey-400"><i class="fa fa-clock-o fa-fw"></i> {{item.createAt}}\r\n                                </small>\r\n                            </h4>\r\n                            <p>\r\n                                <span class="label label-grey-100"><i class="fa fa-home fa-fw"></i>{{item.bedroom}} Bedrooms</span>\r\n                                <span class="label label-grey-100"><i class="fa fa-fw icon icon-toilet"></i> {{item.bathroom}} Bathrooms</span>\r\n                                <span ng-if="item.services.gardian" class="label label-grey-100"><i\r\n                                        class="fa fa-shield"\r\n                                        aria-hidden="true"></i> Gardian</span>\r\n                                <span ng-if="item.services.elevator" class="label label-grey-100"><i\r\n                                        class="fa fa-road"\r\n                                        aria-hidden="true"></i> Elevator</span>\r\n                                <span ng-if="item.services.parking" class="label label-grey-100"><i\r\n                                        class="fa fa-product-hunt" aria-hidden="true"></i> Parking</span>\r\n                            </p>\r\n                            <p class="margin-none">\r\n                                {{item.content}}\r\n                            </p>\r\n                            <span class="label label-grey-100">DT {{item.price}}</span>&nbsp;\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <pagination class="pagination margin-top-none"\r\n                        ng-model="currentPage"\r\n                        total-items="entities.length"\r\n                        max-size="maxSize"\r\n                        boundary-links="true">\r\n            </pagination>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n');
$templateCache.put('view2/view2.html','<div class="container" ng-controller="getGridController">\r\n\r\n    <div class="col-md-3">\r\n\r\n        <div class="panel panel-default" data-toggle="panel-collapse" data-open="true">\r\n            <div class="panel-heading panel-collapse-trigger collapse in" data-toggle="collapse"\r\n                 data-target="#4ecdc2cc-3356-5a94-39a7-247a235aa415" aria-expanded="true">\r\n                <h4 class="panel-title">Recherche</h4>\r\n            </div>\r\n            <div class="collapse in">\r\n                <div class="panel-body">\r\n                    <div class="form-group input-group">\r\n                        <input type="text" class="form-control" placeholder="Search" ng-model="searchText.$">\r\n                        <span class="input-group-btn">\r\n\t\t\t               \t<button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>\r\n\t\t                \t</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="panel panel-default" data-toggle="panel-collapse" data-open="true">\r\n            <div class="panel-heading panel-collapse-trigger collapse in" data-toggle="collapse"\r\n                 data-target="#9cd083d1-8d00-7f4d-6b2c-210587b067cf" aria-expanded="true">\r\n                <h4 class="panel-title">Lodging</h4>\r\n            </div>\r\n\r\n            <div id="9cd083d1-8d00-7f4d-6b2c-210587b067cf" class="collapse in" aria-expanded="true">\r\n                <div class="panel-body">\r\n                    <div class="form-group">\r\n                        <label for="bedrooms">Bedrooms:</label>\r\n                        <div class="input-group bootstrap-touchspin"><span\r\n                                class="input-group-addon bootstrap-touchspin-prefix"\r\n                                style="display: none;"></span><input id="bedrooms" data-toggle="touch-spin"\r\n                                                                     data-verticalbuttons="true" type="text"\r\n                                                                     ng-model="searchText.bedroom"\r\n                                                                     name="guests" class="form-control" placeholder="0"\r\n                                                                     style="display: block;">\r\n                            <span\r\n                                    class="input-group-addon bootstrap-touchspin-postfix"\r\n                                    style="display: none;"></span><span class="input-group-btn-vertical"><button\r\n                                    class="btn btn-default bootstrap-touchspin-up" type="button"><i\r\n                                    class="glyphicon glyphicon-chevron-up"></i></button><button\r\n                                    class="btn btn-default bootstrap-touchspin-down" type="button"><i\r\n                                    class="glyphicon glyphicon-chevron-down"></i></button></span></div>\r\n                    </div>\r\n                    <div class="form-group margin-none">\r\n                        <label for="bathrooms">Bathrooms:</label>\r\n                        <div class="input-group bootstrap-touchspin"><span\r\n                                class="input-group-addon bootstrap-touchspin-prefix"\r\n                                style="display: none;"></span><input id="bathrooms" data-toggle="touch-spin"\r\n                                                                     data-verticalbuttons="true" type="text"\r\n                                                                     placeholder="0"\r\n                                                                     name="guests" class="form-control"\r\n                                                                     ng-model="searchText.bathroom"\r\n                                                                     style="display: block;">\r\n                            <span\r\n                                    class="input-group-addon bootstrap-touchspin-postfix"\r\n                                    style="display: none;"></span><span class="input-group-btn-vertical"><button\r\n                                    class="btn btn-default bootstrap-touchspin-up" type="button"><i\r\n                                    class="glyphicon glyphicon-chevron-up"></i></button><button\r\n                                    class="btn btn-default bootstrap-touchspin-down" type="button"><i\r\n                                    class="glyphicon glyphicon-chevron-down"></i></button></span></div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="panel panel-default" data-toggle="panel-collapse" data-open="true">\r\n            <div class="panel-heading panel-collapse-trigger collapse in" data-toggle="collapse"\r\n                 data-target="#4d4b38a6-989f-e0d9-3077-40f1f38eff1f" aria-expanded="true">\r\n                <h4 class="panel-title">Price per night</h4>\r\n            </div>\r\n\r\n            <div id="4d4b38a6-989f-e0d9-3077-40f1f38eff1f" class="collapse in" aria-expanded="true">\r\n                <div class="panel-body">\r\n\r\n                    <div slider ng-model="price.price" start=1 end=10></div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class="col-md-9">\r\n\r\n        <div class="row">\r\n            <div class="col-xs-6">\r\n                <h4><span class="text-primary">{{ entities.length }}</span> Results</h4>\r\n            </div>\r\n            <div class="col-xs-6 text-right">\r\n                <div class="dropdown display-inline-block">\r\n                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"\r\n                            aria-expanded="false">\r\n                        Sort by:\r\n                        <span class="caret"></span>\r\n                    </button>\r\n                    <ul class="dropdown-menu pull-right" ng-model="selectFilter">\r\n                        <li><a>Action</a></li>\r\n                        <li>\r\n                            <a data-value="price" value="price" ng-click="sortBy(\'price\')">Prix\r\n                                <span class="sortorder" ng-show="propertyName === \'price\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a data-value="createAt" value="createAt" ng-click="sortBy(\'createAt\')">Date\r\n                                <span class="sortorder" ng-show="propertyName === \'createAt\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class="btn-group display-inline-block">\r\n                    <a class="btn btn-primary active" href="#!/logements/list"><i class="fa fa-list"></i></a>\r\n                    <a class="btn btn-primary" href="#!/logements/grid"><i class="fa fa-th"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n\r\n\r\n        <div class="row gridalicious" data-toggle="gridalicious" data-width="200">\r\n\r\n            <div class="galcolumn" id="item0UOWZF"\r\n                 style="width: 32.6493%; padding-left: 15px; padding-bottom: 15px; float: left; box-sizing: border-box;"\r\n                 ng-repeat="item in entities | filter:searchText | orderBy:propertyName:reverse ">\r\n\r\n            <div class="panel panel-default relative" style="margin-bottom: 15px; zoom: 1; opacity: 1;">\r\n                <div class="ribbon-heading ribbon-primary inline absolute left margin-none">Sale</div>\r\n                <div class="cover hover overlay margin-none" style="height: 148px;">\r\n                    <img src="/{{ item.images }}" alt="property-{{ item.rentOrSale }}-{{item.id}}"\r\n                         class="img-responsive"\r\n                         style="width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto;">\r\n                    <a href="/{{item.locale}}/estate-{{ item.id}}.html"\r\n                       class="overlay overlay-full overlay-bg-black overlay-hover"\r\n                       style="height: 148px;">\r\n                               <span class="v-center">\r\n                                      <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>\r\n                              </span>\r\n                    </a>\r\n                </div>\r\n                <div class="panel-body">\r\n                    <h4 class="margin-v-0-5">\r\n                        <a href="/{{item.locale}}/estate-{{ item.id}}.html">{{item.title}}</a>\r\n                        <small class="text-grey-400"><i class="fa fa-clock-o fa-fw"></i> {{item.createAt}}\r\n                        </small>\r\n                    </h4>\r\n                    <p>{{item.content}}</p>\r\n                    <span class="label label-grey-100">DT {{item.price}}</span>&nbsp;\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div id="clearUOWZF" style="clear: both; height: 0px; width: 0px; display: block;"></div>\r\n\r\n    </div>\r\n    <pagination class="pagination margin-top-none"\r\n                ng-model="currentPage"\r\n                total-items="entities.length"\r\n                max-size="maxSize"\r\n                boundary-links="true">\r\n    </pagination>\r\n</div>\r\n</div>\r\n');
$templateCache.put('view3/view3.html','<div class="container" ng-controller="getEventListController">\r\n\r\n\r\n    <div class="col-md-3">\r\n\r\n        <div class="panel panel-default" data-toggle="panel-collapse" data-open="true">\r\n            <div class="panel-heading panel-collapse-trigger collapse in" data-toggle="collapse"\r\n                 data-target="#4ecdc2cc-3356-5a94-39a7-247a235aa415" aria-expanded="true">\r\n                <h4 class="panel-title">Recherche</h4>\r\n            </div>\r\n            <div class="collapse in">\r\n                <div class="panel-body">\r\n                    <div class="form-group input-group">\r\n                        <input type="text" class="form-control" placeholder="Search" ng-model="searchText.$">\r\n                        <span class="input-group-btn">\r\n\t\t\t               \t<button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>\r\n\t\t                \t</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class="col-md-9">\r\n\r\n        <div class="row">\r\n            <div class="col-xs-6">\r\n                <h4><span class="text-primary">{{ entities.length }}</span> Results</h4>\r\n            </div>\r\n\r\n            <div class="col-xs-6 text-right">\r\n                <div class="dropdown display-inline-block">\r\n                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"\r\n                            aria-expanded="false">\r\n                        Sort by:\r\n                        <span class="caret"></span>\r\n                    </button>\r\n                    <ul class="dropdown-menu pull-right" ng-model="selectFilter">\r\n                        <li><a>Action</a></li>\r\n                        <li>\r\n                            <a data-value="price" value="price" ng-click="sortBy(\'price\')">Prix\r\n                                <span class="sortorder" ng-show="propertyName === \'price\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a data-value="reservation" value="price" ng-click="sortBy(\'reservation\')">R\xE9servation\r\n                                <span class="sortorder" ng-show="propertyName === \'reservation\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a data-value="createAt" value="createAt" ng-click="sortBy(\'createAt\')">Date\r\n                                <span class="sortorder" ng-show="propertyName === \'createAt\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class="btn-group display-inline-block">\r\n                    <a class="btn btn-primary active" href="#!/evennements/list"><i class="fa fa-list"></i></a>\r\n                    <a class="btn btn-primary" href="#!/evennements/grid"><i class="fa fa-th"></i></a>\r\n                 </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n\r\n        <div class="row">\r\n            <div class="panel panel-default"\r\n                 ng-repeat="item in entities | filter:searchText | orderBy:propertyName:reverse ">\r\n\r\n                <div class="panel-body">\r\n                    <div class="media media-clearfix-xs media-clearfix-sm">\r\n                        <div class="media-left">\r\n                            <a href="/{{item.locale}}/estate-{{ item.id}}.html">\r\n                                <img src="/{{ item.images }}" alt="property-{{ item.rentOrSale }}-{{item.id}}"\r\n                                     style="width: 150px !important;"\r\n                                     class="media-object">\r\n                            </a>\r\n                        </div>\r\n                        <div class="media-body">\r\n                            <div class="pull-right">\r\n                            </div>\r\n                            <h4 class="media-heading margin-v-0-10">\r\n                                <a href="/{{item.locale}}/estate-{{ item.id}}.html">{{item.title}}</a>\r\n\r\n                                <small class="text-grey-400"><i class="fa fa-clock-o fa-fw"></i>\r\n                                    {{item.dateDebut.date|date}}\r\n                                </small>\r\n                            </h4>\r\n                            <p class="margin-none" ng-bind-html="item.content"></p>\r\n                            <span class="label label-grey-100">DT {{item.price}}</span>&nbsp;\r\n                            <span class="label label-success" ng-if="item.reservation">R\xE9servation</span>&nbsp;\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <pagination class="pagination margin-top-none"\r\n                        ng-model="currentPage"\r\n                        total-items="entities.length"\r\n                        max-size="maxSize"\r\n                        boundary-links="true">\r\n            </pagination>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('view4/view4.html','<div class="container" ng-controller="getEventGridController">\r\n\r\n    <div class="col-md-3">\r\n        <div class="panel panel-default" data-toggle="panel-collapse" data-open="true">\r\n            <div class="panel-heading panel-collapse-trigger collapse in" data-toggle="collapse"\r\n                 data-target="#4ecdc2cc-3356-5a94-39a7-247a235aa415" aria-expanded="true">\r\n                <h4 class="panel-title">Recherche</h4>\r\n            </div>\r\n            <div class="collapse in">\r\n                <div class="panel-body">\r\n                    <div class="form-group input-group">\r\n                        <input type="text" class="form-control" placeholder="Search" ng-model="searchText.$">\r\n                        <span class="input-group-btn">\r\n\t\t\t               \t<button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>\r\n\t\t                \t</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class="col-md-9">\r\n\r\n        <div class="row">\r\n            <div class="col-xs-6">\r\n                <h4><span class="text-primary">{{ entities.length }}</span> Results</h4>\r\n            </div>\r\n            <div class="col-xs-6 text-right">\r\n                <div class="dropdown display-inline-block">\r\n                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"\r\n                            aria-expanded="false">\r\n                        Sort by:\r\n                        <span class="caret"></span>\r\n                    </button>\r\n                    <ul class="dropdown-menu pull-right" ng-model="selectFilter">\r\n                        <li><a>Action</a></li>\r\n                        <li>\r\n                            <a data-value="price" value="price" ng-click="sortBy(\'price\')">Prix\r\n                                <span class="sortorder" ng-show="propertyName === \'price\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a data-value="reservation" value="price" ng-click="sortBy(\'reservation\')">R\xE9servation\r\n                                <span class="sortorder" ng-show="propertyName === \'reservation\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a data-value="createAt" value="createAt" ng-click="sortBy(\'createAt\')">Date\r\n                                <span class="sortorder" ng-show="propertyName === \'createAt\'"\r\n                                      ng-class="{reverse: reverse}"></span>\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class="btn-group display-inline-block">\r\n                    <a class="btn btn-primary active" href="#!/evennements/list"><i class="fa fa-list"></i></a>\r\n                    <a class="btn btn-primary" href="#!/evennements/grid"><i class="fa fa-th"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n\r\n\r\n        <div class="row gridalicious" data-toggle="gridalicious" data-width="200">\r\n\r\n            <div class="galcolumn" id="item0UOWZF"\r\n                 style="width: 32.6493%; padding-left: 15px; padding-bottom: 15px; float: left; box-sizing: border-box;"\r\n                 ng-repeat="item in entities | filter:searchText | orderBy:propertyName:reverse ">\r\n\r\n                <div class="panel panel-default relative" style="margin-bottom: 15px; zoom: 1; opacity: 1;">\r\n                    <div class="ribbon-heading ribbon-primary inline absolute left margin-none"\r\n                         ng-if="item.reservation">R\xE9servation\r\n                    </div>\r\n                    <div class="cover hover overlay margin-none" style="height: 148px;">\r\n                        <img src="/{{ item.images }}" alt="property-{{ item.title }}-{{item.id}}"\r\n                             class="img-responsive" style="height: 165px !important; ">\r\n                        <a href="/{{item.locale}}/estate-{{ item.id}}.html"\r\n                           class="overlay overlay-full overlay-bg-black overlay-hover"\r\n                           style="height: 148px;">\r\n                               <span class="v-center">\r\n                                      <span class="btn btn-circle btn-white"><i class="fa fa-eye"></i></span>\r\n                              </span>\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class="panel-body">\r\n                        <div class="expandable expandable-indicator-white expandable-trigger expandable-close">\r\n                            <div class="expandable-content">\r\n                                <h4 class="margin-v-0-5">\r\n                                    <a href="/{{item.locale}}/estate-{{ item.id}}.html">{{item.title}}</a>\r\n                                    <small class="text-grey-400"><i class="fa fa-clock-o fa-fw"></i>\r\n                                        {{item.createDate.date}}\r\n                                    </small>\r\n                                </h4>\r\n\r\n                                <p style="text-align: justify;" ng-bind-html="item.content"></p>\r\n                                <span class="label label-grey-100">DT {{item.price}}</span>&nbsp;\r\n                                <div class="expandable-indicator"><i></i></div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div id="clearUOWZF" style="clear: both; height: 0px; width: 0px; display: block;"></div>\r\n\r\n            </div>\r\n            <pagination class="pagination margin-top-none"\r\n                        ng-model="currentPage"\r\n                        total-items="entities.length"\r\n                        max-size="maxSize"\r\n                        boundary-links="true">\r\n            </pagination>\r\n        </div>\r\n    </div>\r\n');}]);
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
