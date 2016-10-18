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

})
