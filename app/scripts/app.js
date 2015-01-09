'use strict';

/**
 * @ngdoc overview
 * @name vkHelperApp
 * @description
 * # vkHelperApp
 *
 * Main module of the application.
 */
 var app = angular
  .module('vkHelperApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'firebase',
    'LocalStorageModule'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {

    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: "views/main.html",
        controller: 'MainCtrl'
      })

      .state('backup', {
        url: "/backup",
        templateUrl: "views/backup.html",
        controller: 'BackupCtrl'
      });

    $urlRouterProvider.otherwise("/main");

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  });
