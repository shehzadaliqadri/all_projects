// var inputValue = document.getElementById("text1");

// var app = `
// question1 where do you live?
// karachi, hyderabad, peshwar, lahore

// question2 what is job profession?
// accountant, programmer, software developer

// question3 what is your habbit?
// cricket. badminton. etc

// question4 what is your habbit?
// cricket. badminton. etc

// question5 what is your habbit?
// cricket. badminton. etc

// question6 what is your habbit?
// cricket. badminton. etc`;

// var b = app.split(`\n\n`);
// var e = [];

// for (var i = 0; i < b.length; i++) {
//   var c = b[i].split("?\n");
//   e.push([c[0].trim(), [c[1].split(",")]]);
// }

// console.log(e);

// program 2
//ok
// function applyFunc() {
//   var inputValue = document.getElementById("text1");
//   var app = document.getElementById("text1").value;
//   var b = app.split(`\n\n`);
//   var e = [];

//   for (var i = 0; i < b.length; i++) {
//     var c = b[i].split("?\n");
//     e.push([c[0].trim(), [c[1].split(",")]]);
//   }

//   console.log(e);
// }

// applyFunc()

//simplify more
//ok
function applyFunc() {
  var app = document.getElementById("text1").value;
  var a = app.split(`\n\n`);
  var b = [];

  for (var i = 0; i < a.length; i++) {
    var c = a[i].split("?\n");
    b.push([
      c[0]
        .split("question")[1]
        .slice(c[0].split("question")[1].indexOf(" ")+1),
      [c[1].split(", ")],
    ]);
  }

  console.log(b);
}

applyFunc();
