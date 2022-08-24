// Assignment # 07 - class
// Question no 1
function task811() {
  var playerOne = prompt("Please enter Player 1 Name:");
  var playerTwo = prompt("Please enter Player 2 Name:");
  var select = prompt("For player 1. Select Head or Tail (H / T):");
  select = select.toLowerCase();
  var genNum = Math.floor(2 * Math.random());

  if (genNum === 1 || select === "h") {
    alert("Heads Win\n" + playerOne + " you win");
  } else if (genNum === 0 && select === "t") {
    alert("Tails Win\n" + playerTwo + " you win");
  }
}

// Question no 2
function task812() {
  var playerOne = prompt("Please enter Player 1 Name:");
  var select = prompt("For player 1. Select Head or Tail (1 to 6):");
  select = parseInt(select);

  var genNum = Math.round(6 * Math.random());
  console.log(genNum);
  if (genNum === 1 && select === 1) {
    alert("You selected " + select.toString() + ".\n" + playerOne + " you win");
  } else if (genNum === 2 && select === 2) {
    alert("You selected " + select.toString() + ".\n" + playerOne + " you win");
  } else if (genNum === 3 && select === 3) {
    alert("You selected " + select.toString() + ".\n" + playerOne + " you win");
  } else if (genNum === 4 && select === 4) {
    alert("You selected " + select.toString() + ".\n" + playerOne + " you win");
  } else if (genNum === 5 && select === 5) {
    alert("You selected " + select.toString() + ".\n" + playerOne + " you win");
  } else if (genNum === 6 && select === 6) {
    alert("You selected " + select.toString() + ".\n" + playerOne + " you win");
  } else if (select >= 1 && select <= 6) {
    alert(
      "You loss.\nYou select " +
        select.toString() +
        " but system generated number is " +
        genNum +
        ".\nTry Again"
    );
  } else {
    alert("invalid selection.\nTry Again");
  }

  // parse Int
  // parseFloat
  // Number
  // toString
  // to
}

// Question no 3
function task813() {
  var capAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var smallAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var lenPass = +prompt("Please enter length of password");
  var pass = "";

  for (var i = 0; i < lenPass; i++) {
    var check = Math.round(Math.random() * 2);
    if (i === 0) {
      pass += capAlpha[Math.floor(Math.random() * capAlpha.length)];
    } else if (check === 0) {
      pass += capAlpha[Math.floor(Math.random() * capAlpha.length)];
    } else if (check === 1) {
      pass += smallAlpha[Math.floor(Math.random() * smallAlpha.length)];
    } else if (check === 2) {
      pass += num[Math.floor(Math.random() * num.length)];
    }
  }
  console.log(pass);
}

// A to Z list generator
// var a = "";
// for(var i = 65; i<=90; i++){
//     a += '"';
//     a += String.fromCharCode(i);
//     a += '"';
//     a += ",";
// }

//small a-z generator
// var a = "";
// for(var i = 97; i<=122; i++){
//     a += '"';
//     a += String.fromCharCode(i);
//     a += '"';
//     a += ",";
// }
