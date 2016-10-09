$(document).ready(function() {

  $('#mute').on('click', function(){
  $('.Vimg').toggleClass('spin');
  $('.arm_main').toggleClass('arm_main-playing');
});
$('#mute2').on('click', function(){
$('.Vimg2').toggleClass('spin');
$('.arm_main2').toggleClass('arm_main-playing2');
})


//
// $('#loader_img').show();
//
// // main image loaded ?
// $('#equalizer').on('load', function(){
//   // hide/remove the loading image
//   $('#loader_img').hide();
// });


})
