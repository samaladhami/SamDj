angular.module('djApp')
.service('mainService' , function ($http, $q) {
  let user;


  this.getUser = function() {
    return $http.get('/api/user')
      .then(function(newUser) {

        if(newUser.data.name) {

          user = 'Hello ' +  newUser.data.name;

          return user
        }

        return 'Please login with facebook';
      })
  }



this.DjScratching = new Howl({src:['./soundsEffect/DJ Scratching.mp3']})








})
