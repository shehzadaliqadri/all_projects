var abc = document.getElementById("abc");
var city = document.getElementById("city");
function fetchDataOnload() {
  let lat;
  let lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=233a720fcff7e4f27d62707870344016`
      )
        .then((response) => {
          return response.json();
        })
        .then((data1) => {
          abc.innerHTML = `
                    <p class="day">${today}</p> 
                    <h4>${data1.name}</h4>
                    <p>${todayDate}</p>

                    <div class="weather_temp">
                    <div class="weather_img">
                    <img src="http://openweathermap.org/img/w/${
                      data1.weather[0].icon
                    }.png"></div>
                    <div class="temp">
                    <h1 class="cen">${Math.floor(data1.main.temp)} <sup>o</sup>C
                    <span class="tempF">${Math.floor(
                      data1.main.temp * (9 / 5) + 32
                    )} <sup>o</sup>F</span>
                    </h1>
                    </div>
                    </div>
                  `;
        })
        .catch((error) => {
          console.log("Current Location Not detecting....");
        });
    });
  }
}

window.onload = fetchDataOnload();

var date = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var today = days[date.getDay()];
var todayDate = date.toLocaleDateString().replaceAll("/", "-");

function onSearch() {
  if (city.value.trim() === "") {
    alert("Please Enter a city name : ");
    abc.innerHTML = `Enter a city name Karachi,Delhi etc`;
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=233a720fcff7e4f27d62707870344016`
    )
      .then((response) => {
        return response.json();
      })
      .then((data2) => {
        console.log(data2);
        abc.innerHTML = `
                    <p class="day">${today}</p> 
                    <h4>${data2.name}</h4>
                    <p>${todayDate}</p>

                    <div class="weather_temp">
                    <div class="weather_img">
                    <img src="http://openweathermap.org/img/w/${
                      data2.weather[0].icon
                    }.png"></div>
                    <div class="temp">
                    <h1 class="cen">${Math.floor(data2.main.temp)} <sup>o</sup>C
                    <span class="tempF">${Math.floor(
                      data2.main.temp * (9 / 5) + 32
                    )} <sup>o</sup>F</span>
                    </h1>
                    </div>
                    </div>
                  `;
        if (data2.message === "city not found") {
          swal({
            title: "Error",
            text: "City not found",
            icon: "error",
            button: "Aww yiss!",
          });
          abc.innerHTML = `
                    <h4>City Not Found</h4>
                  `;
          //
        }
      })
      .catch((error2) => {
        swal({
          title: "Error",
          text: "City not found",
          icon: "error",
          button: "Aww yiss!",
        });
      });
  }
}

function keypressBtn() {
  let inputV = document.querySelector("#city");
  inputV.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (inputV.value !== "") {
        document.querySelector(".btn").click();
      }
    }
  });
}
keypressBtn();
