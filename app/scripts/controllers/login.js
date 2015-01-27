'use strict';



app.controller('LoginCtrl', function ($scope, $rootScope, $state, signService, crudService) {
  $scope.user = {email: '', password: ''};
  $scope.isAuthFailed = false;
  $scope.login = function (isValid) {
    $scope.isAuthFailed = false;
    if (isValid) {
      signService.loginUser($scope.user).then(function(authData) {
        signService.user = authData;
        //console.log($rootScope.sync.$asObject())
        //console.log(authData)
        //$rootScope.syncUsers.$set(authData).then(function(ref) {
        //  console.log(ref.key());   // key for the new ly created record
        //  var profileObject = $rootScope.sync.$asObject()
        //  console.log(profileObject)
        //}, function(error) {
        //  console.log("Error:", error);
        //});

        //$state.go('main');
      }).catch(function(error) {
        $scope.isAuthFailed = error.code;
      });
    }
  }

});
