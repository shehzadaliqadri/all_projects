// program no 1  -  it'll only replace first founded word.
var text1 = "shehzad is accountant. shehzad is working as manager in his post"
var rep1 = text1.replace("shehzad","raza")

console.log(text1);
console.log(rep1);

// program no 2  -  it'll replace all founded words.
var text2 = "shehzad is accountant . shehzad is working as manager in his post"
var rep2 = text2.replace(/shehzad/g, "raza")

console.log(text2);
console.log(rep2);

// program no 3  -  it'll replace all founded words.
var text3 = "shehzad is accountant . shehzad is working as manager in his post"

var rep4 = /\bshzh\b/gm;
var rep3 = text3.replace(rep4, "raza")
console.log(text3);
console.log(rep3);
