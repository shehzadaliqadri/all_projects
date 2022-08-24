// //task 01
// function power(a, b) {
//   var result = 1;
//   for (var i = 1; i <= b; i++) {
//     result *= a;
//   }
//   return result;
// }

// var b = power(5, 3);
// console.log(b);

// //task 02
// function leapYear() {
//   inp = prompt("enter year: e.g 2020");
//   if (Number(inp) % 4 === 0) {
//     alert(`year ${inp} is leap year`);
//   } else {
//     alert(`year ${inp} is not leap year`);
//   }
// }

// leapYear();

// //task 03
// function side(a, b, c) {
//   return (a + b + c) / 2;
// }

// function area(s, a, b, c) {
//   ans = Math.abs(s * (s - a) * (s - b) * (s - c));
//   ans = Math.sqrt(ans);
//   return ans;
// }
// //  s * (s - a)   * (s - b) * (s - c);
// // 15 * (15 - 10) *  (15 - 10) * (15 - 10)
// 15 * 5 * 5 * 5;
// // 90 * (90 - 10) *  (90 - 50) * (90 - 120)

// var abc = side(10, 10, 10);
// var def = area(abc, 10, 10, 10);

// console.log(abc);
// console.log(def);

// task 04
// function average(a, b, c) {
//   return ((a + b + c) / 3).toFixed(2);
// }
// function percentage(a, b, c, d) {
//   return (((a + b + c) / d) * 100).toFixed(2);
// }

// function mainFunction() {
//   var a = +prompt('enter 1st subjects number seperated by comma ","');
//   var b = +prompt('enter 2nd subjects number seperated by comma ","');
//   var c = +prompt('enter 3rd subjects number seperated by comma ","');
//   var d = 225;
//   alert("average of each subject is " + average(a, b, c));
//   alert("percentage of each subject is " + percentage(a, b, c, d));
// }

// task 05
//where a = sentence & b = which alphabet or word to find
//it'll return index number or -1 if not found

// function myOwnIndexOf(a, b) {
//   for (var i = 0; i < a.length; i++) {
//     // console.log(`a.slice (${i}, ${b.length} + ${i})`);
//     if (b === a.slice(i, b.length + i)) {
//       console.log(i);
//       break;
//     } else if (a.length - 1 === i) {
//       console.log("-1");
//     }
//   }
// }
// myOwnIndexOf("shehzad smit student", "mit");

// Q5

// function replace() {
// var sentence = "The quick brown";
// var arr = "aeiou";
// var arr2 = [];
// for (i = 0; i < sentence.length; i++) {
//     for (j = 0; j < arr.length; j++) {

//         if (sentence[i] !== arr[j]) {

//             arr2.push(sentence[i])

//         }
//     }

// }
// console.log(arr2);

// }
// replace();

// Q6

// var vowels = "aieou";
// var sentence = "The Quick BrOwn fox".toLowerCase();
// var result = [];

// for (i = 0; i < sentence.length; i++) {
//   for (j = 0; j < vowels.length; j++) {
//     if (sentence[i] === vowels[j]) {
//       break;
//     } else if (j === vowels.length - 1) {
//       result.push(sentence[i]);
//     }
//   }
// }
// console.log(result.join(""));
// Q7

// var a = "Pleases read this application and give plaen ai ou uo io ue me gratuity";
// var b = "aeiou"
// var arr = ["ae","ai","ao","au","ea","ei","eo","eu","ia","ie","io","iu","oa","oe","oi","ou","ua","ue","ui","uo","ai"]
//     for (i = 0; i < a.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//     if (a.slice(i,i+2) === arr[j]) {
//         console.log(a.slice(i,i+2));
//     }

// }
//     }

// Q9

// var user = +prompt("Enter your hours");

// if (user > 40) {
//     var calc = (user - 40) * 12;
//     console.log(calc + "Rs extra");
// } else {
//     alert("abhi aur kaam kro")
// }

// Q10

// var user = +prompt("Enter Amount");
// var result = hun = fiv = ten = one = 0;

// for (i = 0; i < 4; i++) {
//     if (user >= 100) {
//         hun = Math.floor(user / 100);
//         user -= hun * 100;
//     }
//     else if (user >= 50) {
//         fiv = Math.floor(user / 50);
//         user -= fiv * 50;
//     }
//     else if (user >= 10) {
//         ten = Math.floor(user / 10);
//         user -= ten * 10 ;
//     }
//     else if (user >= 1) {
//         one = Math.floor(user / 1);
//         user -= one * 1 ;
//     }
// }
// console.log(hun + " hundred rupee", fiv + " fivety rupee", ten + " ten rupee", one + " one rupee",)
