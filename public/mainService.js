angular.module('djApp')
.service('mainService' , function ($http, $q , $window) {
  let user;

  let userId;

let yourSongs;

let deletSongObj = {};

this.yourSongs = function () {
  for (var i = 0 ; i < yourSongs.length ; i++){
    yourSongs[i].songName = yourSongs[i].songName.replace(/obama@usa.gov\//i, '');
    yourSongs[i].songName = yourSongs[i].songName.replace(/.mp3/i, '');
  }
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

this.checkUser = function() {

if(!user) {
    $window.open('http://localhost:3000/auth/facebook')
 }
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




const songsPaths = [
  {title: 'Dillon Francis, DJ Snake' ,path:'hotSongs/Dillon Francis, DJ Snake - Get Low.mp3'}
  ,{title: 'DJ Music 2013 Pakistani Dj Remix' ,path:'hotSongs/Bass Test..DJ Music 2013 Pakistani Dj Remix...mp3'}
  ,{title: 'Best DJ Music Ever 2012' ,path:'hotSongs/Best DJ Music Ever 2012.mp3'}
  ,{title: 'Bass Musik 2015' ,path:'hotSongs/Bass Musik 2015.mp3'}
  ,{title: 'Speedy Mix 2014 (Electro House (english)' ,path:'hotSongs/Dj Army - Speedy Mix 2014 (Electro House (english).mp3'}
  ,{title: 'Kombat-Thunder (Jumpstyle Music)' ,path:'hotSongs/Dj Mortal Kombat-Thunder (Jumpstyle Music).mp3'}
  ,{title: 'Turn Down For What (Onderkoffer Remix)' ,path:'hotSongs/DJ Snake & Lil Jon - Turn Down For What (Onderkoffer Remix).mp3'}
  ,{title: 'Kinetic (The Crystal Method x Dada Dada Life)' ,path:'hotSongs/DJ Sonas Ultimate Skin Music - Kinetic (The Crystal Method x Dada Dada Life).mp3'}
  ,{title: 'Major Lazer & DJ Snake' ,path:'hotSongs/Major Lazer & DJ Snake - Lean On (feat. MØ) (Official Music Video).mp3'}
  ,{title: 'Martin Garrix' ,path:'hotSongs/Martin Garrix - Animals (Official Video).mp3'}
  ,{title: 'Nagin (High Bass Club Mix) - D.J Rumit' ,path:'hotSongs/Nagin (High Bass Club Mix) - D.J Rumit.mp3'}
  ,{title: 'World\'s Best DJ !' ,path:'hotSongs/World\'s Best DJ !.mp3'}
]

this.getPaths = function() {
  return songsPaths
}


})
