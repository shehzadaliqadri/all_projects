var inputV = document.getElementById("todo-value");
var count = 0;

function addTodo() {
  var ab = document.getElementById("lis");

  var li = `
<li id="${inputV.id}${count}">${inputV.value}</li>
<button onclick="editTodo()">edit</button>
<button>delete</button>
`;
  ab.innerHTML += li;
  inputV.value = "";
  inputV.focus();
  inputV.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (inputV.value !== "") {
        document.getElementById("btn").click();
      }
    }
  });
  count++;
}

// default
inputV.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (inputV.value !== "") {
      document.getElementById("btn").click();
    }
  }
});

function editTodo() {
  // console.log(event.target.previousSibling.previousSibling);
  var update = event.target.previousSibling.previousSibling;
  var id = update.id + 1;

  update.innerHTML = `<input type="text" id="${id}"  value=${update.innerText}></input>`;
  document.getElementById(id).focus();

  document.getElementById(id).innerHTML = document.getElementById(id).value;
  console.log(id);
  event.target.value = "Update";
  document.getElementById(id).onclick = "update();";
  event.target.innerHTML = `<button onclick="update()">update</button>;`;
  // event.target.previousSibling.previousSibling.innerText;
  // console.log(value_toChange.parentNode());
}

function update() {
  // var update = event.target.previousSibling.previousSibling.value;
  // console.log(update)
  console.log(event.target);
  console.log(event.target.par);
  console.log(event.target.previousSibling.previousSibling);
  console.log(event.target.previousSibling.previousSibling.value);

  document.getElementById(update.id).innerText = update;
}
