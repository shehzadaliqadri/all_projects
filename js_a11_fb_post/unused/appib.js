var imgId = "";
var count = 0;
function colorChange(id) {
    var textArea = document.getElementById("val");
    var source = document.getElementById(id).children[0].src;
    console.log(source, id);
    textArea.style.backgroundImage = "url(" + source + ")";
    imgId = id;
}

function post() {
    var postDiv = document.getElementById("main");
    var vale = document.getElementById("val")
    console.log();
    if (imgId !== "") {
        var source2 = document.getElementById(imgId).children[0].src;
    }
    else {
        var source2 = "white.jpg"
    }
    if (vale.value !== "") {

        postDiv.innerHTML += `
        <p style="background-image: url(${source2});">${vale.value}</p>
        <button onclick="btnClicked();">Like</button>
        `;
    }
    console.log(imgId);

    vale.value = "";
    vale.focus();
}

function btnClicked() {
    if (count === 0) {
        event.target.innerHTML = "Liked";
        count = 1;
    }
    else {
        event.target.innerHTML = "Like";
        count = 0;
    }
}




var arr1 = [15, 21, 23, 44, 55];
var arr2 = [];
while (arr1.length > arr2.length) {
    var random = Math.floor(Math.random() * arr1.length);
    if (arr2.indexOf(arr1[random]) == -1) {
        arr2.push(arr1[random]);
    }
}
console.log(arr2);