// format of this cheatsheat
//1st comment will tell you what the code will do.
//2nd line will be the code.
//3rd comment will show output.



// chapter no 31

//prints current date with complete standard
var rightNow = new Date(); 
//Mon Jul 11 2022 20:56:43 GMT+0500 (Pakistan Standard Time)

//to use your date as string and use methods like charat, indexof & slice
var dateString = rightNow.toString();
//

//chapter no 26

Math.round(23.123) // 23
Math.round(23.52) // 24

Math.ceil(23.123) // 24
Math.ceil(23.52) // 24

Math.floor(23.123) // 23
Math.floor(23.52) // 23

Math.random() // generate random number between 0 to 1 - decimal length is 16 digit
Math.random() * 6 // generate random number between 0 to 5.9999


parseInt("222.222") // it converts into number but ignore decimal

parseFloat("222.222") // it converts into number with all decimal

Number("222.222") // it converts into number with all decimal

222.222.toString() // it converts into string

222.222.toFixed(2) // it fixes our decimal to lenght of 2 and also converting our number into string

