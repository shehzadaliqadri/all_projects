// Assignment # 07
// Question no 1
function task711(){
    var firstName = prompt("Enter your first name.");
    var lastName = prompt("Enter your last name.");
    var fullName = firstName + " " + lastName;
    alert("Welcome Mr. "+fullName);
}

// Question no 2
function task712(){
    var favMobile = prompt("Please input your favorite mobile model");
    document.write("My favovrite phone is: " + favMobile + "<br>" + "Length of string is: " + favMobile.length);
}

// Question no 3
function task713(){
    var userInput = prompt("Please input your word");
    document.write("String: " + userInput + "<br>" + "Index of string 'n': " + userInput.indexOf("n"));
}

// Question no 4
function task714(){
    var userInput = prompt("Hit Enter.","Hello World");
    document.write("String: " + userInput + "<br>" + "Last Index of string 'l': " + userInput.lastIndexOf("l"));
}

// Question no 5
function task715(){
    var userInput = prompt("Hit Enter.","Pakistani");
    document.write("String: " + userInput + "<br>" + "Character at index 3 is: " + userInput[3]);
}

// Question no 6
function task716(){
    var firstName = prompt("Enter your first name.");
    var lastName = prompt("Enter your last name.");
    firstName += " ";
    firstName += lastName;
    alert("Welcome Mr. " + firstName);
}

// Question no 7
function task717(){
    var cityName = prompt("Enter your city name.","Hyderabad");
    console.log(cityName)
    
    var newCity = "Islam" 
    console.log(newCity)

    var newCityUpdate = cityName.slice[-4]
    console.log(newCityUpdate)
    
    document.write("<br>" + newCity)
}

function task718(){
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var newMessage = message.split(" ")
    for(var i = 0; i < newMessage.length; i++){
        if(newMessage[i] === "and"){
            newMessage[i] = "&";
        }
    }
    newMessage.join(" ")
}


function task719(){
    // var num = 472;
    // console.log(typeof(num))
}