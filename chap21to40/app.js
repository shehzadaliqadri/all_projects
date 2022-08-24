// chapter no 21

var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = [
  "ChEyEnNe",
  "santa fe",
  "tucson",
  "great falls",
  "honolulu",
];
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
  }
}

//Chapter no 22 - measuring  & Extracting elements
var example = "this is string";
var example2 = ["this", "is", "array"];

console.log(example.length); //14 where it counts all characters of string.
console.log(example2.lengths); //3 where it counts number of elements in array.
var sentence =
  "this is shehzad ali qadri house. you can ask to shehzad for any thing you want. shehzad is doing job and too much busy man.";
var text = "";

for (var i = 0; i < sentence.length; i++) {
  if (sentence.slice(i, i + 7) === "shehzad") {
    text += "raza ";
    i += 7;
  } else {
    text += sentence[i];
  }
}

//chapter no 23 - finding segments
sentence.indexOf("shehzad"); // it'll return first founded index num of shehzad
sentence.lastIndexOf("shehzad"); //it'll return last founded index num of shehzad

//chapter no 24 - finding character at a location
var sentence =
  "this is shehzad ali qadri house. you can ask to shehzad for any thing you want. shehzad is doing job and too much busy man.";
sentence.slice(2, 3); // i - before of that we use slice to get character by giving index
sentence.charAt(2); // i -  now we use charAt to direcctly get character at a certain location

// chapter no 25 - replacing characters
var sentence =
  "this is shehzad ali qadri house. you can ask to shehzad for any thing you want. shehzad is doing job and too much busy man.";

var text = sentence.replace("shehzad", "raza"); // it only change first founded shehzad with raza
var text = sentence.replace(/shehzad/g, "raza"); // it only change all founded shehzad with raza

// chapter no 26 - rounding numbers
var numberRound = Math.round(5.2203202399); // it'll return 5
// The function rounds up when the decimal is .5.
// It rounds 1.5 to 2, 2.5 to 3, etc.
// It rounds -1.5 to -1, -2.5 to -2, etc.

var newNumber = 5.343189911;

var ceilNumber = Math.ceil(newNumber); // return 6 - it return higher side value
var floorNumber = Math.floor(newNumber); // return 5 - it reutrn lower side value

//chapter no 27 - generating random numbers

//chapter no 28
newNumber = newNumber.parseInt(); // it converts number into without decimal number like answer is 5

//chapter no 29 -
var textNum = "44.3332232";
var convertedNum = Number(textNum);
var convertedStr = convertedNum.toString;


//chapter no 30 - controlling length of decimal

