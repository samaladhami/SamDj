angular.module('djApp')
.directive('fileread', function (songsService , mainService) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

          $('#loadingTest').hide()

      elem.bind("change", function (changeEvent) {
        $('.wrapper').css('background-color' , 'red')

        var reader = new FileReader();

        reader.onloadend = function (loadEvent) {

          var fileread = loadEvent.target.result;
          // console.log(fileread);

          var tempArray = elem['context'].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];

          songsService.storeSong(fileread, fileName)
          .then(function (result) {
            scope.songs.unshift(result.data);


                  $('#loadingTest').hide()

            // console.log(scope.songs);
            // console.log(result);

            let songData = {
              songName: result.data.Key
              ,songUrl: result.data.Location
            };
            console.log(songData);


            mainService.postSongURL(songData)


          })
          .catch(function (err) {
            console.log(err);
          });
        }
        scope.Submit = function() {
            $('#loadingTest').show()
           reader.readAsDataURL(changeEvent.target.files[0]);

          }

      });

      //
      // scope.falseB = function(){
      //   mainService.uploaded = false
      // }
      // //
      // scope.trueB = function(){
      //   mainService.uploaded = true
      // }

    }
  }
})

.controller('songsCtrl', function ($scope) {
  $scope.songs = [];
});
