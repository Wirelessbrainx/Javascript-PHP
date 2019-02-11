
document.addEventListener("DOMContentLoaded", function(){
  //set the width & height of the Canvas element.
  var width = window.innerWidth;
  var height= window.innerHeight;

  //Create a new Canvas to put the Gui onto.
  var hudCanvas = document.createElement('canvas');
  //Used to fit the screen.
  hudCanvas.width = width;
  hudCanvas.height = height;

  var hudBitmap = hudCanvas.getContext('2d');
  hudBitmap.font = "Normal 40px Arial"
  hudBitmap.textAlign = 'center';
  hudBitmap.fillStyle = "rgba(245, 245, 245, 0.75)";
  hudBitmap.filltext('Initializing...', width / 2, height / 2);
});
