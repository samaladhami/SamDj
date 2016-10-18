angular.module('djApp')
.service('mainService' , function ($http, $q) {
  let user;

  let userId;

let yourSongs;

this.yourSongs = function () {
  return yourSongs;
}
console.log('this is your songs');
console.log(yourSongs);


  this.getUser = function() {
    return $http.get('/api/user')
      .then(function(newUser) {

        if(newUser.data.name) {
          console.log(newUser.data);
          userId = newUser.data._id
          user = 'Hello ' +  newUser.data.name + '!';

          yourSongs = newUser.data.songs


          return user
        }

        return 'Please login with facebook';
      })
  }

  this.getSongs = function() {
    return $http.get('/upload')
    .then(function(data){
      return data
    })
  }



  this.postSongURL = function (obj) {
    $http({
      method: 'POST'
      ,url: '/api/songs/' + userId
      ,data: obj
    })
    .then(function (response) {
      // this is the response from the post url
      console.log(response.data);
      alert('THANK YOU! Your song uploaded successfully ...')
    })
  }



this.DjScratching = new Howl({src:['./soundsEffect/DJ Scratching.mp3']})








})
