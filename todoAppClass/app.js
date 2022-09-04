var inputV = document.getElementById("todo-value");
var count = 0;
var ab = document.getElementById("lis");
var arr = [];
var localData = JSON.parse(localStorage.getItem("todo-list"));

console.log(localData);
if (localData) {
  arr = localData;
}

function callbackData() {
  ab.innerHTML = "";
  for (i = 0; i < arr.length; i++) {
    ab.innerHTML += `
    <li id="${arr[i]}${count}">${arr[i]}
    <button onclick="editTodo()">edit</button>
    <button>delete</button>
    </li>`;
  }
}
callbackData();

function addTodo() {
  var li = `
<li id="${inputV.id}${count}">${inputV.value}
<button onclick="editTodo()">edit</button>
<button>delete</button>
</li>
`;
  arr.push(inputV.value);
  ab.innerHTML += li;
  inputV.value = "";
  inputV.focus();
  keypressBtn();
  count++;
  console.log(arr);
  localStorage.setItem("todo-list", JSON.stringify(arr));
}

// default
function keypressBtn() {
  inputV.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (inputV.value !== "") {
        document.getElementById("btn").click();
      }
    }
  });
}
keypressBtn();

function editTodo() {
  event.target.innerHTML = "update";
  event.target.setAttribute("onclick", "update()");
  
  var update = event.target.parentNode;
  // console.log(update);
  
  var id = update.id + 1;
  console.log(update);
  // console.log(event.target.setAttribute("onclick",));
  update = `<input type="text" id="${id}"  value=${update.innerText}></input>`;
  document.getElementById(id).focus();

  document.getElementById(id).innerHTML = document.getElementById(id).value;
  console.log(id);
  event.target.value = "Update";
  document.getElementById(id).onclick = "update();";
  // console.log(event);
  event.target.innerHTML = `<button onclick="update()">update</button>;`;
  // event.target.previousSibling.previousSibling.innerText;
  // console.log(value_toChange.parentNode());
}

function update() {
  // var update = event.target.previousSibling.previousSibling.value;
  // console.log(update)
  console.log();
  console.log(event.target);
  console.log(event.target.par);
  console.log(event.target.previousSibling.previousSibling);
  console.log(event.target.previousSibling.previousSibling.value);

  document.getElementById(update.id).innerText = update;
}
