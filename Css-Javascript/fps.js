function onCreate() {
    ShowToast();
  }
  //▬▬▬▬▬▬▬▬▬▬
       // TOAST
  //▬▬▬▬▬▬▬▬▬▬
  function ShowToast() {
    var x = document.getElementById("Toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3900);
  }

var fps = document.getElementById("fps");

var startTime = Date.now();

var frame = 0;

function tick() {

  var time = Date.now();

  frame++;

  if (time - startTime > 1000) {

      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);

      startTime = time;

      frame = 0;

	}  window.requestAnimationFrame(tick);

}

tick();