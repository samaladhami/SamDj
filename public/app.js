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
  } )
