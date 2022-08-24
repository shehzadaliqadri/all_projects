var word = prompt("enter your word");
console.log(word)

var arr1 = word.split("")
console.log(arr1)

var arr2 = arr1.reverse();
console.log(arr2)

var str1 =  arr2.join("")
console.log(str1)


if (word===str1){
    alert("your entered word is ulta sedha word")
}
else {
    alert("this is not ulta sedha word")
}


var check = word.split("").reverse().join("");
if (word===check){
    alert("your entered word is ulta sedha word")
}
else {
    alert("this is not ulta sedha word")
}
