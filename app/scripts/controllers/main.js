'use strict';

/**
 * @ngdoc function
 * @name vkHelperApp.controller:$scope
 * @description
 * # $scope
 * Controller of the vkHelperApp
 */

app.controller('MainCtrl', function ($scope, $rootScope, $state, vkontakteService, $location, signService) {
  $scope.VK = vkontakteService;
  $scope.sign = signService;

  var authObj = $scope.sign.getAuthObj();

  authObj.$onAuth(function(authData) {
    if (!authData) {
      $state.go('login');
    }
  });

  $scope.try = function () {
    $rootScope.sync.$set({foo: "bar"});
  };


  //$scope.VK.init();



  if (~$location.absUrl().indexOf('access_token')) {
    $scope.VK.setCredentials($location.url());
    $location.url('');
  }
  });
