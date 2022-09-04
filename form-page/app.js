var names = document.getElementById("name");
var fname = document.getElementById("fathername");
var valuess = document.getElementById("tableData");
var dataList = [];
var valLocal = document.getElementById("tableData");

var values = localStorage.getItem("data");
if (values) {
  dataList = JSON.parse(values);
  document.getElementById(
    "delAll"
  ).innerHTML = `<button onclick="deleteAll()">Delete All</button>`;
}

function loadValues() {
  valLocal.innerHTML = `
        <tr>
        <th>Name</th>
        <th>FName</th>
        <th colspan="2">Buttons</th>
      </tr>
`;
  for (i = 0; i < dataList.length; i++) {
    var tr = `
      <tr>
        <td>${dataList[i].namess}</td>
        <td>${dataList[i].father_name}</td>
        <td onclick="deleteOne('${i}')">Delete</td>
        <td onclick="edit('${dataList[i].namess}','${
      dataList[i].father_name
    }','${[i]}')">Edit</td>
      </tr>`;
    valLocal.innerHTML += tr;
  }
}
loadValues();

function saveLocalStorage() {
  // event.preventDefault();
  dataList.push({ namess: names.value, father_name: fname.value });
  localStorage.setItem("data", JSON.stringify(dataList));
  names.value = "";
  fname.value = "";
  names.focus();
}

function deleteAll() {
  valLocal.innerHTML = `
    <td colspan="4">No entry to show. Please Put New Data</td>
  `;
  localStorage.removeItem("data");
}

function deleteOne(i) {
  dataList.splice(i, 1);
  localStorage.setItem("data", JSON.stringify(dataList));
  event.target.parentNode.remove();
  loadValues();
}

function edit(S_name, F_name, i) {
  var a = document.querySelectorAll("input");
  var dataEdit = event.target.parentNode.children;
  if (a.length === 0) {
    dataEdit[0].innerHTML = `<input type="text" id="unique1" value="${S_name}">`;
    dataEdit[0].firstChild.focus();
    dataEdit[1].innerHTML = `<input type="text" id="unique2" value="${F_name}">`;

    dataEdit[2].innerText = "Click here Update";
    dataEdit[2].setAttribute("colspan", "2");
    dataEdit[2].setAttribute("onclick", `update(${i});`);
    dataEdit[3].remove();
  } else {
    loadValues();

    //ask to sir about this code why this is not running
    dataEdit[0].innerHTML = `<input type="text" id="unique1" value="${S_name}">`;
    dataEdit[0].firstChild.focus();
    dataEdit[1].innerHTML = `<input type="text" id="unique2" value="${F_name}">`;

    dataEdit[2].innerText = "Click here Update";
    dataEdit[2].setAttribute("colspan", "2");
    dataEdit[2].setAttribute("onclick", `update(${i});`);
    dataEdit[3].remove();
  }
}

function update(i) {
  var a = document.querySelectorAll("input");
  if (a.length <= 2) {
    dataList[i].namess = document.getElementById("unique1").value;
    dataList[i].father_name = document.getElementById("unique2").value;
    localStorage.setItem("data", JSON.stringify(dataList));
    loadValues();
  }
}
