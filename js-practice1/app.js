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