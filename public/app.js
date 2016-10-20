angular.module('djApp' , [ 'ui.router' ])
  .config( function( $stateProvider, $urlRouterProvider ) {
    // $urlRouterProvider.otherwise('/');
    $stateProvider
      .state( 'home', {
        url: '/',
        controller: 'mainCtrl'
        ,templateUrl: './temlates/homeTemp.html'

      } )

      .state( 'upload' , {
        url: '/upload'
        ,controller: 'mainCtrl'
        ,templateUrl:'./temlates/uploadTemp.html'
      } )

      .state( 'yourSongs' , {
        url: '/yourSongs'

        ,controller: 'mainCtrl'



        ,templateUrl:'./temlates/yourSongsTemp.html'
      } )


      .state( 'bestSongs' , {
        url: '/bestSongs'
        ,controller: 'mainCtrl'
        ,templateUrl:'./temlates/bestSongsTemp.html'
      } )

      .state( 'facebook' , {
        url: 'auth/facebook'
      } )


  } )
