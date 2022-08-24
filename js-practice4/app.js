var cities = [];

var city1 = prompt("Enter city name:");
var city2 = prompt("Enter city name:");
var city3 = prompt("Enter city name:");
var city4 = prompt("Enter city name:");
var city5 = prompt("Enter city name:");

cities.push(city1,city2,city3,city4,city5);

alert(cities);

cities.pop();
cities[3] = "mumbai"; //at 4th position

alert(cities);

cities[1] = "kalkata"; //at 4th position

alert(cities);
