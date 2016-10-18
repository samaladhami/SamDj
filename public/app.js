angular.module('djApp' , [ 'ui.router' ])
  .config( function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state( 'home', {
        url: '/',
        controller: 'mainCtrl'

      } )

      .state( 'upload' , {
        url: '/upload'
        ,controller: 'mainCtrl'
        ,templateUrl:'./temlates/uploadTemp.html'
      } )

      .state( 'yourSongs' , {
        url: '/yourSongs'

        ,controller: function($scope ,mainService ) {

          $scope.yourSongs = function () {
            console.log(1);
            if (!mainService.yourSongs()) {
              $scope.mySongs = 'Please login with facebook'
              console.log($scope.mySongs );
              return;
            }
            $scope.mySongs = mainService.yourSongs()
            console.log($scope.mySongs );
            return;
          }
        }



        ,templateUrl:'./temlates/yourSongsTemp.html'
      } )
  } )
