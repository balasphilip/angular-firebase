'use strict';

/**
 * @ngdoc function
 * @name vkHelperApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vkHelperApp
 */
angular.module('vkHelperApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
