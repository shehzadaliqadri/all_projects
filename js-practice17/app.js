// var obj = { name: "shehzad", fName: "Haji sultan" };

// console.log(obj);

// obj.fName[2] = "raz"

// console.log(obj.fName[2]  );`

// let obj = { name: "shehzad", fName: "Haji sultan" };
// console.log(obj);
// obj = { name: "Ghous", fName: "Ahmed" };
// console.log(obj);

// console.log(abc);

// var abc = { name: "Ghous", fName: "Ahmed" };

// const abcfunc = (a) => console.log(`hellow ${a}`);
// const de = 5;
// abcfunc(de);

// abcfunc(ab);

// var ab = 4;

// data get from api
// fetch from jsonplaceholder

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((result) => {
//     console.log("result is ", result);
//   })
//   .catch((err) => {
//     console.log("Error ===>", err);
//   });

// function abc() {
//   let a = "hello";
//   if (true) {
//     console.log(a);
//   }
// }
// abc();

// function ab(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// }

// function Abc(fName, dob, email) {
//   this.myName = fName;
//   this.myDOB = dob;
//   this.myEmail = email;
// }
// function Abc(fName, dob, email) {
//   this.myName = fName;
//   this.myDOB = dob;
//   this.myEmail = email;
// }

// var objd = new Abc("shehzad", "1234", "h@gmail.com");
// console.log(objd);

// ab(1)(2)(3);
// console.log(ab(1)(2)(3));

let name1 = document.getElementById("names"),
  fName = document.getElementById("fatherName"),
  email = document.getElementById("email"),
  mobile = document.getElementById("mobile"),
  cnic = document.getElementById("cnic"),
  course = document.getElementById("course"),
  gender = document.getElementById("gender"),
  file = document.getElementById("file"),
  city = document.getElementById("city"),
  counter = 0;

console.log(name1);

class InputData {
  constructor(names, fName, email, mobile, cnic, course, city, img, gender) {
    this.nameInp = names;
    this.fatherName = fName;
    this.email = email;
    this.phone = mobile;
    this.cnic = cnic;
    this.course = course;
    this.city = city;
    this.image = img;
    this.gender = gender;
  }
}

function checkField() {
  console.log(event.target.value);
}

function counterData() {
  let checkStorage = localStorage.getItem("counter");
  if (!checkStorage) {
    counter = checkStorage;
  }
}

function saveData() {
  var data = document.getElementsByClassName(".input");
  console.log(data);
  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    console.log(element);
  }
  counter++;
  localStorage.counter = counter;
  //   console.log(event.target.parentNode);
}

// a = saveData();
