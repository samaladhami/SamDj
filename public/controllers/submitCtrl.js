angular.module( 'djApp' )
  .controller( 'submitCtrl', ['$scope' , 'multipartForm', function($scope , multipartForm){
    $scope.customer = {};
    $scope.Submit = function(){
      var uploadUrl = '/upload';
      multipartForm.post(uploadUrl , $scope.customer)
    }

  }] )
