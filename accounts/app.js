function signUp(id) {
  console.log(id);

  var b = document.getElementsByTagName("fieldset input");
  console.log(b);
}

// for check if user already exist. throughs error
function abc() {
  var a = document.getElementsByTagName("input");
  for (var i = 0; i < a.length; i++) {
    console.log(a[i].getAttribute("id"));
    if (a[i].value === "sadiq") {
      alert("already exist");
    }
  }
}

function a() {
  var ab;
  return (ab = 5);
  console.log(ab);
  console.log("heelo");
}

function b() {
  return a();
}

console.log(

  b()
  );

// var variable = a()

// console.log(variable);

// b();
