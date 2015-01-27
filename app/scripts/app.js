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
      .state('login', {
        url: "/login",
        templateUrl: "views/login.html",
        controller: 'LoginCtrl'
      })

      .state('signup', {
        url: "/signup",
        templateUrl: "views/signup.html",
        controller: 'SignupCtrl'
      })

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

  })
  .run(function ($rootScope, $firebase) {
    $rootScope.myFirebaseRef = new Firebase("https://torid-fire-4550.firebaseio.com/");
    $rootScope.sync = $firebase($rootScope.myFirebaseRef);
    $rootScope.syncUsers = $firebase($rootScope.myFirebaseRef.child('/users'));
  });
