// async function getData() {
//   const data = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric"
//   );
//   const jsonRes = await data.json();

//   return jsonRes;
// }

// getData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// const getData = new Promise((resolve, reject) => {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric"
//   )
//     .then((res) => res.json())
//     .then((res) => resolve(res))
//     .catch((err) => reject(err));
// });

// getData.then((res) => console.log(res));

// async function abc() {
//   try {
//     let data = await getData;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// abc();

// function abc() {
//   let a = "Hello";
//   function foo() {
//     console.log(a);
//   }
//   foo();
// }

// abc();

// function multiple(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// }

// console.log(multiple(2)(5)(6));
// console.log(multiple(2)(2)(6));

class School {
  constructor() {
    this.schoolName = "Saylani";
  }
  getSchoolName() {
    return this.schoolName;
  }
}

class Student extends School {
  constructor(a, b, schoolName) {
    super(schoolName);
    this.name = a;
    this.email = b;
  }
}

const student1 = new Student("Ghous", "ghous@gmail.com");

console.log(student1.getSchoolName());

// function Student(a, b) {
//   this.name = a;
//   this.email = b;
//   this.getName = function(){

//   }
// }

// const student1 = new Student("Ghous", "ghous@gmail.com");

// console.log(student1);
