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

function saveData() {
  var data = document.querySelectorAll(".input");
  console.log(data);
  return data;
  //   console.log(event.target.parentNode);
}
a = saveData();

const abcfunc = (a) => console.log(`hellow ${a}`);
const de = 5;
abcfunc(de)

abcfunc(ab);

var ab = 4;



// data get from api
// fetch from jsonplaceholder

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result) => {
    console.log("result is ", result);
  })
  .catch((err) => {
    console.log("Error ===>", err);
  });
