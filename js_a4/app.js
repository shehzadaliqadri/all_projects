// Assignment # 04 
// Chapter # 09 to 11 
  
// Question no 1 of 1:
function task421(){
    var inpText = prompt("enter your name");
    var charConv = inpText.charCodeAt(0)

    if(charConv >= 65 && charConv <=90){
        alert("Given input is Upper case")
    } else if(charConv >= 97 && charConv <=122){
        alert("Given input is Lower case")
    } else if(charConv >= 48 && charConv <=57){
        alert("Given input is Numeric value")
    } else {
        alert("Given number is not upper neither lower case nor numeric value")
    }
    
}

// Question no 2 of 1:
function task412(){
    var gender = prompt("Please enter Gender:");
    if(gender === "male") {
        alert("Good Morning Sir.")
    } else if(gender === "female") {
        alert("Good Morning Ma'am.")
    } else {
        alert("Gender not defined. Please try again.")
    }
}

// Question no 3 of 1:
function task413(){
    var username =  prompt("enter your name:");
    alert("Dear "+ username+ ", Welcome to our page.");
}

// Question no 4 of 1:
function task414(){
    var fuel = +prompt("How much petrol in your fuel tank? \nPlease Describe in liters.")
    if(fuel < 0.25) {
        document.write("Please refill the fuel in your car");
    }
    else {
        document.write("Your have to goto destination without tension.")
    }
}

// Question no 5 of 1:
function task415(){
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }

    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
    
    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    if("car" < "cat"){
    alert("car is smaller than cat");
    }
}

// Question no 6 of 1:
function task416(){
    var a = +prompt("Please enter total marks:")
    var b = +prompt("Please enter marks obtained:")
    var c = b / a * 100
    c.toFixed(0);

    var message;
    var grade;
    if (b >= 80 && b <= 100) {
        message = "Excellent"
        grade = "A-one"
    } else if (b >= 70 && b < 80) {
        message = "Good"
        grade = "A"
    } else if (b >= 60 && b < 70) {
        message = "You need to improve"
        grade = "B"
    } else if (b < 60) {
        message = "Sorry"
        grade = "Fail"
    } else {
        alert("Invalid Input")
    }
    document.write("<h1>"+"Marks Sheet"+"<h1>");
    document.write("<br>");
    document.write("<h2>"+"Total Marks: " + a + "<h2>");
    document.write("<h2>"+"Marks Obtained: " + b + "<h2>");
    document.write("<h2>"+"Percentage: " + c + "%"+ "<h2>");
    document.write("<h2>"+"Grade: " + grade + "<h2>");
    document.write("<h2>"+"Remarks: " + message + "<h2>");
}

// Question no 7 of 1
function task417(){
    var secretNum = 4;
    var userNum = +prompt("Please enter your guess number")
    if (secretNum === userNum) {
        alert("Bingo! Correct answer");
    } else {
        alert("Close enough to the correct answer")
    }
}

// Question no 8 of 1
function task418(){
    var num = +prompt("Enter your number")
    if(num % 3 === 0){
        alert("The number is divisable by 3")
    } else {
        alert("The number is not divisable by 3")
    }
}

// Question no 9 of 1
function task419(){
    var num = +prompt("enter your number")
    if(num % 2 === 0 ) {
        alert("this is even number")
    } else {
        alert("this is odd number")
    }
}    

// Question no 10 of 1
function task4110(){
    var temp = +prompt("Please enter temperature:")
    var message;
    if (temp > 40) {
        message = "Its too hot outside."
        alert(message);
    } else if (temp > 30) {
        message = "The weather today is normal."
        alert(message);
    } else if (temp > 20) {
        message = "Today's weather is cool."
        alert(message);
    } else if (temp > 10) {
        message = "OMG! Today's weather is so cool."
        alert(message);
    } else {
        alert("Invalid Input")
    }
}
// Question no 11 of 1
function task4111(){
    var num1 = +prompt("Enter your 1st number: ")
    var operator = prompt("Enter your operator : \n + , - , * , /")
    var num2 = +prompt("Enter your 2nd number: ")
    var check = true;

    if(operator === "+"){
        alert(num1 + num2)
        check = false
    } else if(operator == "-"){
        alert(num1 - num2)
        check = false
    } else if(operator == "*"){
        alert(num1 * num2)
        check = false
    } else if(operator == "/"){
        alert(num1 / num2)
        check = false
    } else if(check){
        alert("try again. you type invalid operator")
    }
}

