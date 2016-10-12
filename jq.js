$(document).ready(function() {

  $('#mute').on('click', function(){
    $('.Vimg').removeAttr('style')
  $('.Vimg').toggleClass('spin');
  $('.arm_main').toggleClass('arm_main-playing');
});
$('#mute2').on('click', function(){
    $('.Vimg2').removeAttr('style')
$('.Vimg2').toggleClass('spin2');
$('.arm_main2').toggleClass('arm_main-playing2');
})

// left stop button
$('#stop').click(function() {
  $('.Vimg').removeAttr('style')
  $('.eqGif').hide()
  $('#img1').hide();
  $('#img2').show();
  $('.Vimg').removeClass('spin');
  $('.arm_main').removeClass('arm_main-playing');

  setTimeout(function(){
    $('#img2').hide();
    $('#img1').show();
  }, 1200)
  $('#mute').removeClass('playing')


})
$('#mute').on('click', function(){

  $('#img2').hide();
  $('#img1').show();

})


  // right stop button
$('#stop2').click(function() {
  $('.Vimg2').removeAttr('style')
    $('.eqGif2').hide()
  $('#img12').hide();
  $('#img22').show();
  $('.Vimg2').removeClass('spin2');
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








$('.disk').click(function(){  $('.disk').removeAttr('style')})
$('.disk').draggable({
  drag: function(event, ui){
    ui.position.left = 0
    ui.position.top = 0
    // var rotateCSS = 'rotate(' + ui.position.left + 'deg)';

    $(this).css({
      'transform':' rotate(-700deg)'
    ,'-webkit-transform': 'rotate(-700deg)'
    ,'transition-duration': '1.7s'
    ,"-webkit-transition-duration":'1.5s'
    });

  }
});




$('.disk2').click(function(){  $('.disk2').removeAttr('style')})
$('.disk2').draggable({
  drag: function(event, ui){
    ui.position.left = 0
    ui.position.top = 0
    // var rotateCSS = 'rotate(' + ui.position.left + 'deg)';

    $(this).css({
      'transform':' rotate(-500deg)'
    ,'-webkit-transform': 'rotate(-500deg)'
    ,'transition-duration': '1.7s'
    ,"-webkit-transition-duration":'1.5s'
    });

  }
});
