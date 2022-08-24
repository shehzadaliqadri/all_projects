// Assignment # 10
// Question no 1
function task1001() {
  var rightNow = new Date();
  document.write(rightNow);
}

// Question no 2
function task1002() {
  var firstName = prompt("please enter your first name.");
  var lastName = prompt("please enter your last name.");
  alert("Hello! " + firstName + " " + lastName);
}

// Question no 3
function task1003() {
  var num1 = +prompt("please enter first number.");
  var num2 = +prompt("please enter second number.");
  return num1 + num2;
}

// calculator
function task1004(num1, num2, opr) {
  var result;
  if (opr === "+") {
    result = num1 + num2;
  } else if (opr === "-") {
    result = num1 - num2;
  } else if (opr === "*") {
    result = num1 * num2;
  } else if (opr === "/") {
    result = num1 / num2;
  } else {
    result = "operator invalid";
  }
  return result;
}

function task1005(num) {
  return num * num;
}

function task1006(num) {
  var result = "";
  var oneNum = 1;
  var final = "";
  if (num < 0) {
    final = "factorial number cannot be negative";
  } else if (num === 0) {
    final = "Factorial number of 0 = 1";
  } else if (num === 1) {
    final = "Factorial number of 1 x 1 = 1";
  } else if (num > 1) {
    for (var i = 1; i <= num; i++) {
      if (i === num) {
        result += i;
      } else {
        result += i + " x ";
      }
      oneNum = oneNum * i;
    }
    final = "Factorial number of " + result + " = " + oneNum;
  }
  return final;
}

function task1007() {
  start = +prompt("enter starting number");
  end = +prompt("enter ending number");
  for (i = start; i <= end; i++) {
    document.write('<h2 style="text-align:left;">' + i + "  </h2>");
  }
}

function task1008() {
  var laterDate = new Date("dec 31, 2023");
  document.write(
    '<h2 style="text-align:center;">Later Date: ' +
      laterDate +
      ' <br> <a href="index.html">Back</a></h2>'
  );
}

function task1009() {}

function task1010(w, h) {
  var area = w * h;
  return area;
}

function task1011(word) {
  var newWord = "";
  var answer;
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  if (newWord === word) {
    answer = "Your word " + word + " is palindrome word";
  } else {
    answer = "Your word " + word + " is not palindrome word";
  }
  return answer;
}

function task1012(word) {
  var answer = "";
  var nWord;
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      nWord = word[i];
      answer += nWord.toUpperCase();
    } else if (word[i] === " ") {
      answer += word[i];
      nWord = word[i + 1];
      answer += nWord.toUpperCase();
      i++;
    } else {
      answer += word[i];
    }
  }
  return answer;
}

// function task1012() {
//   var word = "shehzad qadri";
//   var answer = "";
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] === 0) {
//       answer += i.toUpperCase;
//     } else if (word[i] === " ") {
//       answer += i;
//       answer += word[i].toUpperCase;
//       i++;
//     } else {
//       answer += word[i].toUpperCase;
//     }
//   }
//   return answer;
// }

// function task1012(word) {
//   var word = "shehzad qadri";
//   var answer;
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] === 0) {
//       var nWord = word[i];
//       answer += nWord.toUpperCase;
//     } else if (word[i] === " ") {
//       answer += i;
//       var nWord = word[i];
//       answer += nWord.toUpperCase;
//       i++;
//     } else {
//       answer += word[i];
//     }
//   }
//   return answer;
// }

function task1013() {
  var word = prompt("Please enter your sentence.");
  var uniqueAlpha = "";
  var count = 0;
  var alphabet = prompt("Please enter your alphabet letter to find.");

  alphabet = alphabet.toLowerCase();
  word = word.toLowerCase();

  //it'll store unique alphabets in uniqueAlpha variable
  for (var i = 0; i < word.length; i++) {
    if (uniqueAlpha.indexOf(word[i]) === -1) {
      uniqueAlpha += word[i];
    }
  }

  for (var i = 0; i < word.length; i++) {
    if (alphabet === word[i]) {
      ++count;
    }
  }
  return (
    "We found '" + count + "' '" + alphabet + "' in sentence '" + word + "'."
  );
}

// function task1013() {
//   var word = prompt("Please enter your sentence.");
//   var uniqueAlpha = "";

//   word = word.toLowerCase();

//   //it'll store unique alphabets in uniqueAlpha variable
//   for (var i = 0; i < word.length; i++) {
//     if (uniqueAlpha.indexOf(word[i]) === -1) {
//       uniqueAlpha += word[i];
//     }
//   }
//   return (
//     "Uniques alphabets in this program are " + uniqueAlpha + "'."
//   );
// }

//sorting work properly on array
var a = [10, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 21, 14, 15, 16, 1, 17, 20, 19];
var b = a.sort();
b = a.sort(function (a, b) {
  return a - b;
});

// class task 2  -  write a program that show missing number
var a = [10, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 21, 14, 15, 16, 1, 17, 20, 19];

var minValue = Math.min(...a);
var maxValue = Math.max(...a);
var missing = [];

for (i = minValue; i < maxValue; i++) {
  if (a.indexOf(i) === -1) {
    missing.push(i);
  }
}
console.log(missing);

// class task 3 - write a program that return its alternative variable value
a = 5;
b = 10;

function foo(x) {
  console.log(a + b - x);
}

foo(a);
