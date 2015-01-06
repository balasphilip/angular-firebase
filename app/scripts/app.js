'use strict';

/**
 * @ngdoc overview
 * @name vkHelperApp
 * @description
 * # vkHelperApp
 *
 * Main module of the application.
 */
angular
  .module('vkHelperApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
