app.factory('signService', function ($rootScope, $state, $firebaseAuth, $timeout) {

  var fireRef = $rootScope.myFirebaseRef,
      authObj = $firebaseAuth(fireRef);

  return {
    action : {
      success: false,
      error: ''
    },

    getAuthObj: function () {
      return authObj;
    },

    saveUser: function (userObj) {
      var self = this;
      fireRef.createUser(userObj,
        function(error) {
          if (error === null) {
            console.log("User created successfully");
            $timeout(function () {self.action.success = true;});
          } else {
            $timeout(function () {self.action.error = error.message || error.code;});
          }
        }
      );
    },

    loginUser: function (userObj) {
      return authObj.$authWithPassword(userObj);
    },

    logoutUser: function () {
      authObj.$unauth();
    }


  };

});
