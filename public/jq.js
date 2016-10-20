let changeImage = function (obj) {
   obj.classList.toggle('playing');
}


let changeImageByTime = function (obj) {
      obj.classList.toggle('playing');
      setTimeout(function(){
      obj.classList.toggle('playing');
          }, 2000)

       }

const stopJQ = function(){
  $('#stop').click()
  $( "#equalizer" ).empty();
  $('#loading').show();
}

const stop2JQ = function(){
  $('#stop2').click()
  $( "#equalizer2" ).empty();
  $('#loading2').show();
}

const uploadFade = function() {

$('.wrapper').fadeIn(500)
}
