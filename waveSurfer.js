
// left player
  var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#a9a9a9',
  progressColor: '#FF6600',

  maxCanvasWidth: 200,
  height: 68,

   scrollParent: true,

  barWidth:0.4,
  loop: true


});

// then when the #content div has loaded


wavesurfer.load('hotSongs/5.mp3');




wavesurfer.on('ready', function () {
  var timeline = Object.create(WaveSurfer.Timeline);

  timeline.init({
    wavesurfer: wavesurfer,
    container: '#waveform-timeline',
    primaryColor:'#D50044',
   secondaryColor: 'lightgray',
   primaryFontColor: '#FF6600',
   secondaryFontColor: '#FF6600'
  });
});
// Equalizer
wavesurfer.on('ready', function () {


  var EQ = [
    {
      f: 32,
      type: 'lowshelf'
    }, {
      f: 64,
      type: 'peaking'
    }, {
      f: 125,
      type: 'peaking'
    }, {
      f: 250,
      type: 'peaking'
    }, {
      f: 500,
      type: 'peaking'
    }, {
      f: 1000,
      type: 'peaking'
    }, {
      f: 2000,
      type: 'peaking'
    }, {
      f: 4000,
      type: 'peaking'
    }, {
      f: 8000,
      type: 'peaking'
    }, {
      f: 16000,
      type: 'highshelf'
    }
  ];

  // Create filters
  var filters = EQ.map(function (band) {
    var filter = wavesurfer.backend.ac.createBiquadFilter();
    filter.type = band.type;
    filter.gain.value = 0;
    filter.Q.value = 1;
    filter.frequency.value = band.f;
    return filter;
  });

  // Connect filters to wavesurfer
  wavesurfer.backend.setFilters(filters);

  // Bind filters to vertical range sliders
  var container = document.querySelector('#equalizer');
  filters.forEach(function (filter) {
    var input = document.createElement('input');
    wavesurfer.util.extend(input, {
      type: 'range',
      min: -20,
      max: 20,
      value: 0,
      title: filter.frequency.value
    });
    input.style.display = 'inline-block';
    input.setAttribute('orient', 'vertical');
    wavesurfer.drawer.style(input, {
      'webkitAppearance': 'none',
      width: '100px',
      height: '30px',



    });
    container.appendChild(input);

    var onChange = function (e) {
      filter.gain.value = ~~e.target.value;
    };

    input.addEventListener('input', onChange);
    input.addEventListener('change', onChange);
  });

  // For debugging
  $(document).ready(function (){wavesurfer.filters = filters;

  $('#loading').show();
  if(wavesurfer.filters){

    $('#loading').fadeOut(500);

    }
})

// wavesurfer.setPlaybackRate(1.5)
});



// play icon
let changeImage = function (obj) {
   obj.classList.toggle('playing');
}
wavesurfer.on('finish', function () {
  $('.Vimg').removeClass('spin');
  $('.arm_main').removeClass('arm_main-playing');
  $('#mute').toggleClass('playing')

});
// left valume slider
$('#left-val').slider({
orientation: "vertical",
min: 0,
max:100,
value:100,
animate:1000,
range:"min"
,slide(event, ui) {
   wavesurfer.setVolume(ui.value/100);

   if(ui.value> 100){
          return false;}
  if(ui.value< 0){
         return false;}
       } } )
// $(function (){
//   $('#left-val').slider({
//   min: 0,
//   max:100,
//   value:50,
//   animate:1000,
//   range:"min"
//   ,slide: function(event, ui) {
//      wavesurfer.setVolume(ui.value/100);
//      $( "#amount" ).val(ui.value);
//   }
// }
// )
// $( "#amount" ).val( $( "#test" ).slider( "value" ) );
// })







// left-speed-slider

// $(function (){
  $('#left-speed-slider').slider({
  orientation: "vertical",
  min: 50,
  max:150,
  value:100,
  animate:1000,
  range:"min"
  ,slide(event, ui) {
     wavesurfer.setPlaybackRate(ui.value/100);
     console.log(1.50 - ui.value/100 );
     if(ui.value> 140){
            return false;}
    if(ui.value< 60){
           return false;}
     $('.spin').css(`-webkit-animation`,`spin  ${(1.50 - ui.value/100) + 0.30}s linear infinite`)

   }
  ,change(event , ui ) {
    $('.spin').css(`-webkit-animation`,`spin  ${(1.50 - ui.value/100) + 0.30}s linear infinite`)
  }

}
)



function resetSlider() {
  $("#left-speed-slider").slider('value', 100);
  wavesurfer.setPlaybackRate(1)
}







// right player
var wavesurfer2 = WaveSurfer.create({
 container: '#waveform2',
 waveColor: '#a9a9a9',
 progressColor: '#D70046',
 maxCanvasWidth: 200,
 height: 68,

  scrollParent: true,

 barWidth:0.4

});

wavesurfer2.load('hotSongs/3.mp3');

//

wavesurfer2.on('ready', function () {
  var timeline2 = Object.create(WaveSurfer.Timeline);

  timeline2.init({
    wavesurfer: wavesurfer2,
    container: '#waveform-timeline2',
    primaryColor:'#FF6600',
   secondaryColor: 'lightgray',
   primaryFontColor: '#D50044',
   secondaryFontColor: '#D50044'
   //
  });
});
// // Equalizer
wavesurfer2.on('ready', function () {
 var EQ = [
   {
     f: 32,
     type: 'lowshelf'
   }, {
     f: 64,
     type: 'peaking'
   }, {
     f: 125,
     type: 'peaking'
   }, {
     f: 250,
     type: 'peaking'
   }, {
     f: 500,
     type: 'peaking'
   }, {
     f: 1000,
     type: 'peaking'
   }, {
     f: 2000,
     type: 'peaking'
   }, {
     f: 4000,
     type: 'peaking'
   }, {
     f: 8000,
     type: 'peaking'
   }, {
     f: 16000,
     type: 'highshelf'
   }
 ];

 // Create filters
 var filters = EQ.map(function (band) {
   var filter = wavesurfer2.backend.ac.createBiquadFilter();
   filter.type = band.type;
   filter.gain.value = 0;
   filter.Q.value = 1;
   filter.frequency.value = band.f;
   return filter;
 });

 // Connect filters to wavesurfer
 wavesurfer2.backend.setFilters(filters);

 // Bind filters to vertical range sliders
 var container = document.querySelector('#equalizer2');
 filters.forEach(function (filter) {
   var input = document.createElement('input');
   wavesurfer2.util.extend(input, {
     type: 'range',
     min: -20,
     max: 20,
     value: 0,
     title: filter.frequency.value
   });
   input.style.display = 'inline-block';
   input.setAttribute('orient', 'vertical');
   wavesurfer2.drawer.style(input, {
     'webkitAppearance': 'none',
     width: '100px',
     height: '30px',

   });
   container.appendChild(input);

   var onChange = function (e) {
     filter.gain.value = ~~e.target.value;
   };

   input.addEventListener('input', onChange);
   input.addEventListener('change', onChange);
 });

 // For debugging
 $(document).ready(function (){wavesurfer2.filters = filters;

 $('#loading2').show();
 if(wavesurfer2.filters){

   $('#loading2').fadeOut(500);

   }


});})
wavesurfer2.on('finish', function () {
  $('.Vimg2').removeClass('spin');
  $('.arm_main2').removeClass('arm_main-playing2');
  $('#mute2').toggleClass('playing')

});

// right volume slider function
$('#right-val').slider({
orientation: "vertical",
min: 0,
max:100,
value:100,
animate:1000,
range:"min"
,slide(event, ui) {
   wavesurfer2.setVolume(ui.value/100);

   if(ui.value> 100){
          return false;}
  if(ui.value< 0){
         return false;}
       } } )






$('#right-speed-slider').slider({
orientation: "vertical",
min: 50,
max:150,
value:100,
animate:1000,
range:"min"
,slide(event, ui) {
   wavesurfer2.setPlaybackRate(ui.value/100);
   if(ui.value> 140){
          return false;}
  if(ui.value< 60){
         return false;}
   console.log(1.50 - ui.value/100 );
   $('.spin2').css(`-webkit-animation`,`spin  ${(1.50 - ui.value/100) + 0.30}s linear infinite`)

 }
,change(event , ui ) {
  $('.spin2').css(`-webkit-animation`,`spin  ${(1.50 - ui.value/100) + 0.30}s linear infinite`)
}

}
)



function resetSlider2() {
$("#right-speed-slider").slider('value', 100);
wavesurfer2.setPlaybackRate(1)
}




var DjScratching =new Audio('soundsEffect/DJ Scratching.mp3');
