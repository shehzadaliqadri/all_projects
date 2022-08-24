// Assignment # 08 completed
// Question no 1
function task811() {
  var num = +prompt("Please enter positive number:");
  if (num > 0) {
    document.write("number:" + num.toString() + "<br>");
    document.write("round off value:" + Math.round(num).toString() + "<br>");
    document.write("floor value:" + Math.floor(num).toString() + "<br>");
    document.write("ceil value:" + Math.ceil(num).toString() + "<br>");
  }
}

// Question no 2
function task812() {
  var num = +prompt("Please enter positive number:");
  if (num < 0) {
    document.write("number:" + num.toString() + "<br>");
    document.write("round off value:" + Math.round(num).toString() + "<br>");
    document.write("floor value:" + Math.floor(num).toString() + "<br>");
    document.write("ceil value:" + Math.ceil(num).toString() + "<br>");
  } else {
    document.write("Please enter negative number");
  }
  // parse Int
  // parseFloat
  // Number
  // toString
  // to
}

// Question no 3
function task813() {
  var a = -4;
  var b = 5;
  document.write(
    "The absolute value of -4 is " +
      Math.abs(a) +
      " While the absolute value of 5 is " +
      Math.abs(b) +
      "."
  );
}

function task814() {
  var a = Math.random() * 6;
  a = Math.ceil(a);
  document.write("Random dice value: " + a + "<br>");
}

function task815() {
  var a = [1, 2];
  var ranGen = Math.ceil(Math.random() * 2);
  if (ranGen === 2) {
    document.write("Random coin value Heads is : " + a[ranGen - 1] + "<br>");
    document.write("Random coin value Tails is : " + a[ranGen - 2] + "<br>");
  } else if (ranGen != 2) {
    document.write("Random coin value Heads is : " + a[0] + "<br>");
    document.write("Random coin value Teils is : " + a[1] + "<br>");
  }
}

function task816() {
  var num = Math.ceil(Math.random() * 100);
  document.write("random number between 1 to 100 is " + num + "<br>");
}

function task817() {
  var weightArr = prompt("Please enter your weight");
  var weight = weightArr.split("k");
  weightArr = +weight[0];
  document.write("user weight is " + weightArr + " kilogram" + "<br>");
}

function task818() {
  var userInput = +prompt("Please enter your number between 1 to 10");
  if (userInput > 0 && userInput <= 10) {
    var ranNum = Math.ceil(Math.random() * 10);
    if (ranNum === userInput) {
      document.write("Congrats you win" + "<br>");
    } else {
      document.write(
        "Try again <br> You selected " +
          userInput +
          "<br>System Generated secret number was :" +
          ranNum +
          "<br>"
      );
    }
  } else {
    document.write(
      "invalid input. Please input number between range 1 to 10" + "<br>"
    );
  }
}
