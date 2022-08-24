var word = prompt("enter your word");
console.log(word)
// console.log(word.length)

var word2 = word;
var num1 = 0;
var num2 = word.length

console.log(num1 + "num1")
console.log(num2 + "num2")

for (i = 0; i <= word.length; i++){
    word2[num1] = word[num2]
    document.write(num1 + " num1")
    document.write("<br>")
    document.write(num2 + " num2")
    document.write("<br>")
    document.write(word2 + " : word 2 now")
    document.write("<br>")
    document.write("loop no " + i)
    document.write("<br>")
    document.write("<br>")
    ++num1;
    --num2; 
}
console.log(word);
console.log(word2);

// var word = prompt("enter your word");
// console.log(word);
// var word2 = word[i];
// for (i = 0; i <= word.length; i++){
//     if(word === word2)
// }
// console.log(word);




// if (word===str1){
//     alert("your entered word is ulta sedha word")
// }
// else {
//     alert("this is not ulta sedha word")
// }

