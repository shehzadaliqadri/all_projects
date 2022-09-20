// async function abcFunc(){
//   const abc = fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>
//     data.json()
//   );
// }
const url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url)
//   .then((data) => data.json())
//   .then((data) => {
//     getData(data);
//   })
//   .then(function ab(data) {
//     return data;
//   });

// var a = ab();

// console.log(a);
// function getData(data) {
//   console.log(data);
// }

// function meraWada(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// console.log(c);
// var arr = meraWada(url);

// console.log(arr);
// getData
// const a = getData();
// console.log(a);

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

// function getData() {
//   const data = fetch(url);
//   //   ("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric"
//   //   );
//   //   const jsonRes = data.json();

//   return data.json();
// }

// console.log(getData());

// async function getData() {
//   const data = await fetch(url);
//   //   (
//   //     "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric"
//   //   );
//   const jsonRes = await data.json();

//   return jsonRes;
// }

// console.log(getData());

// data fetch using enter city name
var inputUser = prompt("Enter City Name");
const getData = new Promise((resolve, reject) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputUser}&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric`
  )
    .then((res) => res.json())
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

console.log(getData);

var newData = document.getElementById("main");
async function abc() {
  try {
    var data = await getData;
    newData.innerHTML = `
    <h1>City Name:${data.name}</h1>
    <h1>Wind:${data.wind.speed}</h1>
    <h1>Clouds:${data.clouds.all}</h1>
    <h1>Temp:${data.main.temp}</h1>
    <h1>Condition:${data.weather[0].main}</h1>
    `;
  } catch (err) {
    console.log(err);
  }
}

abc();

// data fetch using geo location
var userPosition = {
  lat: "",
  lon: "",
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    userPosition.lat = position.coords.latitude;
    userPosition.lon = position.coords.longitude;

    const apiKey = "01a6250d5a536471d12b2de166943c32";

    const getDataGeo = new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${userPosition.lat}&lon=${userPosition.lon}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });

    var newData2 = document.getElementById("main2");
    async function abc2() {
      try {
        var data2 = await getDataGeo;
        console.log(getDataGeo);
        newData2.innerHTML = `
    <h1>City Name:${data2.name}</h1>
    <h1>Wind:${data2.wind.speed}</h1>
    <h1>Clouds:${data2.clouds.all}</h1>
    <h1>Temp:${data2.main.temp}</h1>
    <h1>Condition:${data2.weather[0].main}</h1>
    `;
      } catch (err) {
        console.log(err);
      }
    }
    abc2();
  });
}
