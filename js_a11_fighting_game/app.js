var action = document.getElementById("player");
var count = 0;
window.onload = function () {
  action.src = "images/player11.gif";
};
// }

window.onkeydown = function () {
  if (event.keyCode == 39) {
    action.src = "images/player11.gif";
    count = count + 30;
    action.style.left = count + "px";
  }

  if (event.keyCode == 37) {
    action.src = "images/player11.gif";
    count = count - 40;
    console.log(count);
    action.style.left = count + "px";
  }

  if (event.keyCode == 17) {
    action.src = "images/player14.gif";
    action.style.height = "390px";
    action.style.marginTop = "280px";
    setTimeout(function () {
      action.src = "images/player11.gif";
      action.style.height = "250px";
      action.style.marginTop = "400px";
    }, 2700);
  }

  if (event.keyCode == 16) {
    action.src = "images/player16.gif";
    action.style.height = "390px";
    action.style.marginTop = "280px";
    setTimeout(function () {
      action.src = "images/player11.gif";
      action.style.height = "250px";
      action.style.marginTop = "400px";
    }, 3500);
  }

  if (event.keyCode == 38) {
    action.src = "images/player15.gif";
    action.style.height = "390px";
    action.style.marginTop = "280px";
    setTimeout(function () {
      action.src = "images/player11.gif";
      action.style.height = "250px";
      action.style.marginTop = "400px";
    }, 2400);
  }

  if (event.keyCode == 13) {
    action.src = "images/playerlast.gif";
    action.style.height = "390px";
    action.style.marginTop = "280px";
    setTimeout(function () {
      action.src = "images/player11.gif";
      action.style.height = "250px";
      action.style.marginTop = "400px";
    }, 6500);
  }
};
