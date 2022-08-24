// program no 1  -  change the word

//method no 1
var str = "the quick brown fox jumps over the lazy dog".split(" ");
var val = "ghous";

for(var i = 0; i< str.length; i++){
    if(str[i] === "the"){
        str[i] = val;
    }
}
str.join(" ");

//method no 2
var str = "the quick brown fox jumps over the lazy dog";
var newVar = str.split("the").join("ghous")
console.log(newVar)

