// var name = "ghous";

// alert(name);


// var student_name = "shehzad";
// alert(student_name);

// 3rd example
// var num1 = "20";
// var num2 = "10";

// var total = num1 - num2;

// alert(total); // 10


// // 4th example
// var num1 = 15;
// var num2 = 4;

// var total = num1 % num2;

// alert(total); //19

// // 5th example
// var num1 = 15;
// num1++;

// alert(num1);

// // 6th example
// var num1 = 15;
// alert(num1++); //show 15 but value changed with increment that is 16
// alert(++num1); //show 17
// alert(--num1); //show 16
// alert(num1--); //show 16 but value changed with increment that is 15
// alert(num1); //show 15

// // 7th example
// var num1 = 10;
// num1 = num1 + 1 + num1;

// alert(num1);

// // 8th example
// var num1 = 10;
// num1 = num1++ + 1 + num1;

// alert(num1);

// // 9th example
// var num1 = 10;
// num1 = ++num1 + 1 + num1;

// alert(num1);

// // 10th example
// var a = 2, b = 1;
// var result =  --a  -  --b  +  ++b  +  b--;
//          //  2-1=1 - 1-1=0 + 0+1=1 + 1-1=1   

// alert(result); // answer 3


// var a= 10;

// var b = 12;

// alert(a);


var num1 = +prompt("Enter your 1st number: ")
var operator = prompt("Enter your operator : \n + , - , * , /")
var num2 = +prompt("Enter your 2nd number: ")
var check = true;

if(operator === "+"){
    alert(num1 + num2)
    check = false
}
if(operator == "-"){
    alert(num1 - num2)
    check = false
}
if(operator == "*"){
    alert(num1 * num2)
    check = false
}
if(operator == "/"){
    alert(num1 / num2)
    check = false
}
if(check === true){
    alert("try again. you type invalid operator")
}