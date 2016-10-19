angular.module('djApp')
.controller('mainCtrl' , function ($scope , mainService) {

  mainService.getUser()
    .then(function(response) {
      $scope.name = response;
      console.log(response);
    });


$scope.songe = function() {
  mainService.getSongs()
  .then(function(response) {

   console.log(response);

  })

}






$scope.DjScratching = mainService.DjScratching


$scope.Paths = mainService.getPaths()


$scope.yourSongs = function () {
  if (!mainService.yourSongs()) {
    $scope.mySongs = 'Please login with facebook'
    console.log($scope.mySongs );
    return;
  }
  $scope.mySongs = mainService.yourSongs()
  console.log($scope.mySongs );
  return;
}

})
