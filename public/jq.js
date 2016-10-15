let changeImage = function (obj) {
   obj.classList.toggle('playing');
}


let changeImageByTime = function (obj) {
      obj.classList.toggle('playing');
      setTimeout(function(){
      obj.classList.toggle('playing');
          }, 2000)

       }
