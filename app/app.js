'use strict';

// Declare app level module which depends on views, and components

angular.module('myApp',
angular.module('myApp', [require
  ('ngRoute',
  'angular-route',
)]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


var app = angular.module("myApp", []);
