// program no 1

//method no 1

var a = new Date();
console.log(a);

var b = a.toLocaleDateString();
console.log(b);

var b = a.toDateString();
console.log(b);

var b = a.toTimeString();
console.log(b);

var b = a.toLocaleTimeString();
console.log(b);

var b = a.getFullYear();
console.log(b);

var b = a.getDay();
console.log(b);

//task 01
var b = 1992;

for (var i = 0; i < 10; i++) {
  // console.log(b)
  // console.log(c)
  b += 1;
  var c = "May 03, " + b.toString();
  var d = new Date(c).getDay();
  console.log("for year " + b.toString() + " " + d);
}

//task 02 get input from user and tell them about his age
var task2Date = new Date();
var inpAge = new date(
  prompt("enter your birth date in described format. e.g May 03, 2000")
);
var calculate = task2Date.getMilliseconds() - inpAge.getMilliseconds();
var b = calculate / (1000 * 60 * 60 * 24);

var task2Date = new Date();
var inpAge = new Date("Jul 29, 2012"); //new Date(prompt("enter your birth date in described format. e.g May 03, 2000"))
console.log(inpAge);
var calculate = task2Date.getTime() - inpAge.getTime();
console.log(calculate);
var b = calculate / (1000 * 60 * 60 * 24);
console.log(b);
var c = Math.floor(b / 365);
var d =
  (Number(
    Number(b / 365)
      .toFixed(2)
      .toString()
      .slice(3)
  ) *
    365) /
  30;
console.log(c);
console.log(d);



// method 2
var task2Date = new Date();
var inpAge = new Date("MAY 29, 2021"); //new Date(prompt("enter your birth date in described format. e.g May 03, 2000"))
console.log(inpAge);
var calculate = task2Date.getTime() - inpAge.getTime();
console.log(calculate);
var b = calculate / (1000 * 60 * 60 * 24);
console.log(b);
var c = Math.floor(b / 365);

var d = Number(b / 365)
  .toFixed(2)
  .toString();
var e = d.slice(d.indexOf(".") + 1);
console.log(c);

console.log(d);

console.log(e);
