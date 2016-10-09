
// left player
  var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'lightgray',
  progressColor: '#FF6600',

  maxCanvasWidth: 200,
  height: 68,

   scrollParent: true,

  barWidth:0.4


});





// then when the #content div has loaded


wavesurfer.load('hotSongs/5.mp3');






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
      height: '10px',
      padding: '5px',
      margin:'8px'


    });
    container.appendChild(input);

    var onChange = function (e) {
      filter.gain.value = ~~e.target.value;
    };

    input.addEventListener('input', onChange);
    input.addEventListener('change', onChange);
  });

  // For debugging
  wavesurfer.filters = filters;

  $('#loading').show();
  if(wavesurfer.filters){

    $('#loading').fadeOut(500);

    }


});

// play icon
let changeImage = function (obj) {
   obj.classList.toggle('playing');
}





// right player
var wavesurfer2 = WaveSurfer.create({
 container: '#waveform2',
 waveColor: 'lightgray',
 progressColor: '#D70046',
 maxCanvasWidth: 200,
 height: 68,

  scrollParent: true,

 barWidth:0.4

});

wavesurfer2.load('hotSongs/3.mp3');

//
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
     height: '10px',
     padding: '5px',
     margin:'8px'

   });
   container.appendChild(input);

   var onChange = function (e) {
     filter.gain.value = ~~e.target.value;
   };

   input.addEventListener('input', onChange);
   input.addEventListener('change', onChange);
 });

 // For debugging
 wavesurfer2.filters = filters;

 $('#loading2').show();
 if(wavesurfer.filters){

   $('#loading2').fadeOut(500);

   }
});

//
// // play icon
// let changeImage = function (obj) {
//  obj.classList.toggle('playing');
// }
