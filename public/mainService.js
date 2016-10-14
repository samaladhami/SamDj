angular.module('djApp')
.service('mainService' , function ($http, $q) {
  let user;


  this.getUser = function() {
    return $http.get('/api/user')
      .then(function(newUser) {
          
        if(newUser.data.name) {

          user = newUser.data.name;

          return user
        }

        return 'Guest';
      })
  }


})
