// Assignment # 05
// Chapter # 17 to 20

// Question no 1 of 1:
function task511(){
    var arr = [[1,2][3,4],[5,6],[7,8],[9,10]]
    document.write(arr)
}

// Question no 2 of 1:
function task512(){
    var arr = [[0,1,2,3][1,0,1,2],[2,1,0,1]]
    document.write(arr)
}

// Question no 3 of 1:
function task513(){
    for (var i = 0; i <= 10; i++){
        document.write(i)
        document.write("<br>")
    }
}

// Question no 4 of 1:
function task514(){
    var num = +prompt("Enter a number to show it's multiplication table");
    var len = +prompt("Enter length of table");
    document.write("Multiplication table of " + num + "<br>"+ "Length " + len + "<br>")
    for(var i = 1; i <= len; i++){
        document.write(num + " x " + i + " = " + i*num + "<br>");
    }

}

// Question no 5 of 1:
function task515(){
    fruits = ["apple", "banana", "mango", "orange","strawberry"];
    for(var i = 0; i < fruits.length; i++){
        document.write(fruits[i]);
        document.write("<br>")
        if(i+1 === fruits.length){
            document.write("<br>")
        }
    }
    
    for(var i = 0; i < fruits.length; i++){
        document.write("Element at index " + i + " is " + fruits[i] + "<br>");
    }
}

// Question no 6 of 1:
function task516(){
    document.write("Counting" + "<br>")
    for(var i = 0; i <= 15; i++){
        document.write(i + ", ")
    }

    document.write("<br>" + "Reverse Counting" + "<br>")
    for(var i = 10; i > 0; i--){
        document.write(i + ", ")
    }

    document.write("<br>" + "Even Counting" + "<br>")
    for(var i = 0; i <= 20; i++){
        if(i%2 === 0){
            document.write(i + ", ")            
        }
    }

    document.write("<br>" + "Odd Counting" + "<br>")
    for(var i = 0; i <= 20; i++){
        if(i%2 != 0){
            document.write(i + ", ")            
        }
    }

    document.write("<br>" + "Series Counting" + "<br>")
    for(var i = 2; i <= 20; i++){
        if(i%2 === 0){
            document.write(i + "k, ")            
        }
    }
}


// Question no 7 of 1
function task517(){
    var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    for(i = 0; i < arr.length; i++){
        if(arr[i] === userInput){
            var message = "cookie is available at index " + i + "in our bakery"  
        }
    }
    if(message){
        alert(message);
    }
    else{
        alert("We are sorry. " + userInput +" is not available in our bakery")
    }
}

// Question no 8 of 1
function task518(){
    var arr = [1,24,53,78,91,12,0];
    var max = 0;
    var min = arr[0];

    for(var i=0; i < arr.length; i++){
    
        if(max < arr[i]){
            max = arr[i]
            console.log("max")
        }
        if(min > arr[i]){
            min = arr[i]
            console.log("min")
        }
    }

    document.write("<br>" + "max number is " + max )
    document.write("<br>" + "min number is " + min )
}

// Question no 9 of 1
function task519(){
    var arr = [1,24,53,78,91,12,0];
    var max = 0;
    var min = arr[0];

    for(var i=0; i < arr.length; i++){
    
        if(max < arr[i]){
            max = arr[i]
            console.log("max")
        }
        if(min > arr[i]){
            min = arr[i]
            console.log("min")
        }
    }

    document.write("<br>" + "max number is " + max )
    document.write("<br>" + "min number is " + min )
}

// Question no 10 of 1
function task5110(){
    var num = +prompt("Please enter value:")
    var a = []
    for(var i=1; i <= 10; i++){
        a.push(num*i);
    }
    document.write(a);
}