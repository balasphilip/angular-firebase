'use strict';

/**
 * @ngdoc function
 * @name vkHelperApp.controller:$scope
 * @description
 * # $scope
 * Controller of the vkHelperApp
 */

app.controller('MainCtrl', function ($scope, vkontakteService, $location, $firebase) {
    //var myFirebaseRef = new Firebase("https://torid-fire-4550.firebaseio.com/");

  $scope.VK = vkontakteService;

  $scope.VK.init();



  if (~$location.absUrl().indexOf('access_token')) {
    $scope.VK.setCredentials($location.url());
    $location.url('');
  }
  });
