'use strict';

/**
 * @ngdoc function
 * @name vkHelperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vkHelperApp
 */
angular.module('vkHelperApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    //var myFirebaseRef = new Firebase("https://torid-fire-4550.firebaseio.com/");
    console.log($firebase);
  });
