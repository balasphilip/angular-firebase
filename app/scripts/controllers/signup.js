'use strict';



app.controller('SignupCtrl', function ($scope, signService, $state) {

  $scope.user = {mail:'', password: '', repeat: ''};
  $scope.sign = signService;

  $scope.saveNewUser = function(form) {
    if ($scope.user.password === $scope.user.repeat) form.$valid = true;

    if (form.$valid) {
      signService.saveUser({email: $scope.user.mail, password: $scope.user.password});
    }

  };

  $scope.$watch('sign.action.success', function (newVal, oldVal) {
    if (newVal) $state.go('login');
  });


});
