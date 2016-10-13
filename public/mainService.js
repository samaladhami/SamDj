angular.module('djApp')
.service('mainService' , function ($http, $q) {
  let user;


  this.getUser = function() {
    return $http.get('/api/user')
      .then(function(newUser) {
        if(newUser.data) {
          user = newUser.data;
          return user.displayName;
        }
        return 'Guest';
      })
  }


})
