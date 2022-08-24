//chapter no 21
function c21_01() {
  var a = document.getElementById("changing_case").innerHTML;
  var b = a.toUpperCase();
  document.getElementById("changing_case").innerHTML = b;
}
function c21_02() {
  var a = document.getElementById("changing_case").innerHTML;
  var b = a.toLowerCase();
  document.getElementById("changing_case").innerHTML = b;
}
function c21_03() {
  document.getElementById("changing_case_function").innerHTML =
    "function c21_01()" +
    "{" +
    "<br>" +
    'var a = document.getElementById("changing_case").innerHTML' +
    ";" +
    "<br>" +
    "var b = a.toUpperCase()" +
    ";" +
    "<br>" +
    'document.getElementById("changing_case").innerHTML = b' +
    ";" +
    "<br>" +
    "}" +
    "<br>" +
    "<br>" +
    "function c21_02() " +
    "{" +
    "<br>" +
    '  var a = document.getElementById("changing_case").innerHTML' +
    ";" +
    "<br>" +
    "  var b = a.toLowerCase() + " +
    ";" +
    "<br>" +
    '  document.getElementById("changing_case").innerHTML = b' +
    ";" +
    "<br>" +
    "}";
}
