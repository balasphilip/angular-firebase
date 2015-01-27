app.factory('vkontakteService', function ($http, $location, $window, localStorageService, $timeout) {

  var credentials = {
      userToken: null,
      userId: null,
      userEmail: null
  };

  return {

    user: {},

    /**
     * Init VKontakte api, inject script to the page
     * @returns {vkontakteService}
     */
    init: function () {
      var self = this;
      window.vkAsyncInit = function () {
        VK.init({
          apiId: CONFIG.vk.client_id,
          nameTransportPath: '/xd_receiver.html'
        });
      };

      setTimeout(function () {
        var el = document.createElement("script");
        el.type = "text/javascript";
        el.src = "https://vkontakte.ru/js/api/openapi.js";
        el.async = true;
        el.onload = function (e) {
          //self.isLoggedIn = true;
          setTimeout(self.tryLogin.bind(self),0);
        };
        document.getElementsByTagName('head')[0].appendChild(el);
      }, 0);

      return this;
    },

    /**
     * Redirect user to VKontakte authorize page and back to home page
     */
    oAuthLogin: function () {
      //$window.location.href = CONFIG.vk.url + '?' + 'client_id=' + CONFIG.vk.client_id + '&' + 'scope=' + CONFIG.vk.scope + '&' +
      //'redirect_uri=' + $location.absUrl() + '&' + 'display=popup&' + 'v=' + CONFIG.vk.version + '&response_type=token';
    },

    /**
     * Method invokes after page is loaded and execute store method with credentials or withot it
     */
    tryLogin: function () {
      if (localStorageService.get('user')) {
        this.getUserData(localStorageService.get('user'));
      } else {
        this.user.isLoggedIn = false;
      }
    },

    /**
     * Method invokes after redirecting user to home page and save credentials to localstorage
     * @param vk_auth_token {string}
     * @param vk_id {string}
     */
    setCredentials: function (data) {
      credentials.userToken = data.slice(data.indexOf('=') + 1, data.indexOf('&'));
      credentials.userId = data.slice(data.indexOf('id') + 3, data.indexOf('&email'));
      credentials.userEmail = data.slice(data.lastIndexOf('=') + 1);
      //localStorageService.set('user', JSON.stringify(this.getCredentials()));
    },

    getCredentials: function () {
      return credentials;
    },

    /**
     * Do request to VKontakte api to get info about user, add all new
     * data to userData object.
     * @param data {object} - token and id
     */
    getUserData: function (data) {
      var self = this;
      VK.api('users.get',{user_id: data.userId, v: CONFIG.vk.version, access_token: data.userToken, fields: 'photo, status'},
        function (data) {
          console.log(data)
          if (data.response) {
            $timeout(function () {
              self.user = data.response[0];
              self.user.isLoggedIn = true;
            })
          }
        })
    },



    /**
     * VKontakte logout and delete all user profile info
     */
    oAuthLogout: function () {
      var self = this;
      VK.Auth.logout(function(response) {
        console.log(response);
        $timeout(function () {
          self.user = {};
        });
        //if (response.session) {
        //  /* Пользователь успешно авторизовался */
        //  if (response.settings) {
        //    /* Выбранные настройки доступа пользователя, если они были запрошены */
        //  }
        //}
      });
    }
  };

})
