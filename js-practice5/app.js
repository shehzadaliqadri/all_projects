var cities = [ ];

cities[3] = "quetta";
console.log(cities); //it'll add value on defined address or replace with old one if defined.

cities.push("karachi", "Lahore"); // it'll add from last
console.log(cities);

var newVar = cities.push("kashmir", "gilgit");
console.log(newVar); // it'll return lenght of array


cities.unshift("islamabad", "hyderabad"); // it'll add from last
console.log(cities);

cities.pop()// it'll remove 1 value from last
console.log(cities);

var varTwo = cities.pop();
console.log(varTwo)  // it'll return deleted value

cities.push("multan", "sukkur", "Mirpurkhas", "Tando Adam");
console.log(cities)

// how splice method works

// where first value is starting index and 2nd value is no of quantity to remove)
cities.splice(2,5);
console.log(cities);


// where first value is starting index and 
// if 2nd value is 0 then it means it'll not remove any value
// third value we're adding from that index
cities.splice(2,0,"Khairpur");
console.log(cities);

var fruits = ["Apple", "banana", "Amrood", "Orange", "Melon"];
var user = +prompt("Please enter value which you want to delete\n" + fruits)
if (user > 0 && user <= 4 ) {
    var a = fruits.splice(user,1)
    alert("Value " + a + " has been removed")
}
else {
    alert("invalid value. Please enter number between 0 to 4")
}