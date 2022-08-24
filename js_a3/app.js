// Chapter # 06

// Question no 1: (chap no 6)
function task601(){
    var a = +prompt("Enter your number: ");
    document.write("Result");
    document.write("<br>");
    document.write("The value of a is: " + a );
    document.write("<br>");
    document.write("...............................");
    document.write("<br>");
    document.write("<br>");
    document.write("The value of ++a is: " + ++a);
    document.write("<br>");
    document.write("Now the value of a is: " + a);
    document.write("<br>");
    document.write("<br>");
    document.write("\n \nThe value of a++ is: " + a++);
    document.write("<br>");
    document.write("Now the value of a is: " + a);
    document.write("<br>");
    document.write("<br>");
    document.write("The value of --a is: " + --a);
    document.write("<br>");
    document.write("Now the value of a is: " + a);
    document.write("<br>");
    document.write("<br>");
    document.write("The value of a-- is: " + a--);
    document.write("<br>");
    document.write("Now the value of a is: " + a);
}

// Question no 2: (chap no 6)
function task602(){
    var a = 2, b = 1;
    document.write("a = 2, b = 1");
    document.write("<br>");
    document.write("<br>");
    document.write("--a : "+ (--a));
    document.write("<br>");
    document.write("<br>");
    document.write("--a - --b : " + (--a - --b));
    document.write("<br>");
    document.write("<br>");
    document.write("--a - --b + ++b : " + (--a - --b + ++b));
    document.write("<br>");
    document.write("<br>");
    document.write("--a - --b + ++b + b-- : " + (--a - --b + ++b + b--));
    document.write("<br>");
    document.write("<br>");
    var result = --a - --b + ++b + b--;
    document.write("--a - --b + ++b + b-- : " + (--a - --b + ++b + b--))
}

// Question no 3: (chap no 6)
function task603(){
    var username = prompt("enter your name:");
    alert("Dear "+ username+ ", Welcome to our page.");
}

// Question no 4: (chap no 6)
function task604(){
    alert("Question is empty");
}

// Question no 5: (chap no 6)
function task605(){
    var userInput = +prompt("please input your number");
    var count = 0;
    if (userInput){
        console.log("ok")
    } else {
        userInput = 5;
    }
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //1
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //2
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //3
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //4
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //5
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //6
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //7
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //8
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //9
    document.write("<br>")
    document.write(userInput + " x " + ++count + " = " + userInput*count ); //10
    document.write("<br>")
}

// Question no 6: (chap no 6)
function task606(){
    var email = "h.shehzad.ali@gmail.com";
    alert("My Email Address is " + email);
}

// Question no 7: (chap no 2)
function task207(){
    var book = "A Smarter Way To Learn JavaScript";
    alert("I am trying to learn from the Book " + book);
}

// Question no 8: (chap no 2)
function task208(){
    document.write("Yah! I can write HTML content through JavaScript");
}

// Question no 9: (chap no 2)
function task209(){
    var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(design);
}







