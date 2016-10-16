angular.module('djApp')
.directive('fileModel' , ['$parse' ,function( $parse ) {

  return {
    restrict: 'A'
    ,link : function(scope , element , attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

       element.bind('change', function(){
        scope.$apply(function(){
          console.log(element[0].files[0]);
          modelSetter(scope, element[0].files[0]);

        })
      })
    }
  }

 } ] )
// .directive('fileModel', ['$parse', function ($parse) {
// return {
//    restrict: 'A',
// scope: {
//        percent: "="
//
//    },
//    link: function(scope, element, attrs) {
//        var model = $parse(attrs.fileModel);
//        var modelSetter = model.assign;
// scope.$watch('percent', function(value) {
// console.log(value)
// });
//
//        element.bind('change', function(){
//            scope.$apply(function(){
//              console.log(element[0].files[0]);
//                modelSetter(scope, element[0].files[0]);
//            });
//        });
//    }
// };}]);
