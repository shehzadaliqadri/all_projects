// var gender = prompt("Enter gender");

// if (gender === "male") {
//     alert("Hello, Sir");
// } else
// if (gender === "female") {
//     alert("Hello, Maam");
// }
// else {
//     alert("Gender not found")
// }


// if (5 > 10 && 6 < 3 && 5 >= 5 && false) {
//     alert("if condition run");
// }
// else (
//     alert("else condition run")
// )

// if (5 < 10 && 6 < 8 && 5 >= 5 && true) {
//     alert("if condition run");
// }
// else (
//     alert("else condition run")
// )

var name = prompt("enter your name");
var age = +prompt("Enter Your age:");    
var resident = prompt("Where do you live? (write city name: e.g karachi)")
var html = prompt("Do you have skill in HTML?", "yes")
var css = prompt("Do you have skill in CSS?", "yes")
var javascript = prompt("Do you have skill in Javacript?", "yes")
var experience = +prompt("How many year of experiance in javacript")

if (html === "yes" || css === "yes") {
    html = true;
}
else{
    html = false;
}

if (css === "yes") {
    css = true;
}
else{
    css = false;
}

if (javascript === "yes") {
    javascript = true;
}
else{
    javascript = false;
}

if (age >= 18 && resident === "karachi" && (html || css) && javascript && experience >=2 ) {
   alert("Hello " + name + ", You're selected for this job. Come for interview at 9:30AM on 31st May 2022") 
}


if (!javascript) {
   alert("Hello " + name + ", You're not selected for this job because you don't have expertise in javascript.") 
}

if (!html || !css) {
   alert("Hello " + name + ", You're not selected for this job because you don't have expertise in html or css.") 
}

if (age < 18) {
   alert("Hello " + name + ", You're not selected for this job because your age is below 18 years.") 
}

if (experience < 2) {
   alert("Hello " + name + ", You're not selected for this job because you have less then 2 years experience in javascript.") 
}

if (!resident) {
   alert("Hello " + name + ", You're not selected for this job because you're not resident of Karachi.") 
}
