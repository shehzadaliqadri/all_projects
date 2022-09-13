// function abc() {
//   console.log(arguments[1]);
// }

// abc("Hello", "World");

// function foo() {
//   console.log("test");
// }

// foo.apply.bind()

// function getDate() {
//   return new Date().toDateString();
// }

// console.log(getDate());

// const getDate = () => new Date().toDateString();

// console.log(getDate());

// function > =>

// const foo = () => {
//   return new Date().toDateString();
// };

// console.log(foo());

// const sum = (a, b) => a + b;

// console.log(sum(5, 6));
// console.log(sum(2, 8));

// const foo = a => `Hello ${a}`;

// console.log(foo("Ghous"))

// function testAbc() {
//   console.log(this);
// }

// testAbc();

// let obj = {
//   name: "Ghous Ahmed",
//   getName: () => {
//     console.log(this);
//   },
// };

// obj.getName();

// function abc() {
//   foo();
// }

// abc();

// var foo = () => {
//   alert("hello");
// };

// setTimeout(() => {
//   console.log("Test");
// }, 2000);

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((res) => {
//     getData(res);
//   })
//   .catch((err) => {
//     console.log("Error==>", err);
//   });

// function getData(data) {
//   console.log(data);
// }

function fetchData(callBack) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b")
    // .then((res) => res.json())
    .then((res) => {
      callBack(res);
    })
    .catch((err) => {
      console.log("Error==>", err);
    });
}

function foo(data) {
  console.log(data);
}

fetchData(foo);

// function meraWada() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => res.json())
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// async function abc() {
//   try {
//     const data = await meraWada();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// abc();

// async function foo() {
//     try {
//       const data = await meraWada();
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   foo();
// meraWada()
//   .then((result) => {
//     console.log("Result==>", result);
//   })
//   .catch((err) => {
//     console.log("Error=>", err);
//   });
