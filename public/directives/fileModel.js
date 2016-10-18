angular.module('djApp')
.directive('fileread', function (songsService) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();

        reader.onloadend = function (loadEvent) {
          debugger;
          var fileread = loadEvent.target.result;
          // console.warn(fileread);

          var tempArray = elem['context'].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];

          songsService.storeSong(fileread, fileName)
          .then(function (result) {
            scope.songs.unshift(result.data);
            console.log(scope.songs);
            console.log(result.data);
          })
          .catch(function (err) {
            console.log(err);
          });
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
})

.controller('songsCtrl', function ($scope) {
  $scope.songs = [];
});
