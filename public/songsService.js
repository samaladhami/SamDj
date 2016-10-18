angular.module('djApp')
.factory('songsService', function ($http) {
  var service = {};

  service.storeSong = function (songData, fileName) {
    var songExtension = songData.split(';')[0].split('/');
    songExtension = songExtension[songExtension.length - 1];

    var newSong = {
      songName: fileName,
      songBody: songData,
      songExtension: songExtension,
      userEmail: 'obama@usa.gov'
    }

    return $http.post('/api/newSong', newSong)
  }

  return service;
});
