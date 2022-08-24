var signalStatus = document.getElementById("signal");

function stop() {
  signalStatus.src = "yellow.svg";
  myTimeOut = setTimeout(onMouseMove, 4000);
}

function onMouseMove() {
  signalStatus.src = "red.svg";
}

var myTimeOut = setTimeout(onMouseMove, 4000);


var bulb = document.getElementById("bulbStatus");

function on() {
  bulb.src = "bulbOff.jpg";
}

function off() {
  bulb.src = "bulbOn.jpg";
} 

