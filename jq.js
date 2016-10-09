$(document).ready(function() {

  $('#mute').on('click', function(){
  $('.Vimg').toggleClass('spin');
  $('.arm_main').toggleClass('arm_main-playing');
});
$('#mute2').on('click', function(){
$('.Vimg2').toggleClass('spin');
$('.arm_main2').toggleClass('arm_main-playing2');
})

// left stop button
$('#stop').click(function() {
  $('#img1').hide();
  $('#img2').show();
  $('.Vimg').removeClass('spin');
  $('.arm_main').removeClass('arm_main-playing');

  setTimeout(function(){
    $('#img2').hide();
    $('#img1').show();
  }, 1000)
  $('#mute').removeClass('playing')


})
$('#mute').on('click', function(){
  $('#img2').hide();
  $('#img1').show();

})


  // right stop button
$('#stop2').click(function() {
  $('#img12').hide();
  $('#img22').show();
  $('.Vimg2').removeClass('spin');
  $('.arm_main2').removeClass('arm_main-playing2');

  setTimeout(function(){
    $('#img22').hide();
    $('#img12').show();
  }, 1000)
  $('#mute2').removeClass('playing')


})
$('#mute2').on('click', function(){
  $('#img22').hide();
  $('#img12').show();

})


})
