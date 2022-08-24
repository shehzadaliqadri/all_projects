// Assignment # 09 p
// Question no 1
function task901() {
  var rightNow = new Date();
  document.write(rightNow);
}

// Question no 2
function task902() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septempter",
    "October",
    "November",
    "December",
  ];
  var thisMonth = new Date();
  var month = months[thisMonth.getMonth()];
  document.write(
    '<h2 style="text-align:Center;">' +
      month +
      '<br> <a href="index.html">Back</a></h2>'
  );
}

// Question no 3
function task903() {
  var today = new Date().getDay();
  var days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  document.write(
    '<h2 style="text-align:center;">Today is ' +
      days[today] +
      '<br> <a href="index.html">Back</a></h2>'
  );
}

function task904() {
  var today = new Date().getDay();
  if (today === 6 || today === 0) {
    document.write(
      '<h2 style="text-align:center;">Its funday <br> <a href="index.html">Back</a></h2>'
    );
  } else {
    document.write(
      '<h2 style="text-align:center;">try another day <br> <a href="index.html">Back</a></h2>'
    );  
  }
}

function task905() {
  var dateToday = new Date().getDate();
  if (dateToday < 16) {
    document.write(
      '<h2 style="text-align:center;">First fifteen days of the month <br> <a href="index.html">Back</a></h2>'
    );
  } else {
    document.write(
      '<h2 style="text-align:center;">Last days of the month <br> <a href="index.html">Back</a></h2>'
    );
  }
}

function task906() {
  var timePassed = new Date();
  var timeMS = timePassed.getTime();
  document.write(
    '<h2 style="text-align:left;"> Current Date: ' +
      timePassed +
      "<br> Elapsed milliseconds since january 1, 1970: " +
      timeMS +
      " <br>Elapsed Minutes since january 1, 1970: " +
      timeMS / 1000 / 60 / 60 +
      ' <br> <a href="index.html">Back</a></h2>'
  );
}

function task907() {
  var nowTime = new Date();
  if (nowTime.getHours() < 13) {
    document.write(
      '<h2 style="text-align:center;">Its AM <br> <a href="index.html">Back</a></h2>'
    );
  } else {
    document.write(
      '<h2 style="text-align:center;">Its PM <br> <a href="index.html">Back</a></h2>'
    );
  }
}

function task908() {
  var laterDate = new Date("dec 31, 2023");
  document.write(
    '<h2 style="text-align:center;">Later Date: ' +
      laterDate +
      ' <br> <a href="index.html">Back</a></h2>'
  );
}

function task909() {
  var ramadanDate = new Date("june 18, 2015");
  var today = new Date();
  var diff = Math.round((today - ramadanDate) / 1000 / 60 / 60 / 24);
  document.write(
    '<h2 style="text-align:center;">' +
      diff +
      ' have passed since 1st ramadan, 2015 <br> <a href="index.html">Back</a></h2>'
  );
}

function task910() {
  var firstDate = new Date("Jan 01, 2015");
  var secondDate = new Date("Dec 05, 2015 22:50:16");
  var diff = Math.round((secondDate - firstDate) / 1000);
  document.write(
    '<h2 style="text-align:left;">On refrence date Sat Dec 05 2015 22:50:16 GMT +0500 (PKT), <br> ' +
      diff +
      ' seconds had passed since beginning of 2015 <br> <a href="index.html">Back</a></h2>'
  );
}

function task911() {
  var dateTime = new Date();
  document.write(
    '<h2 style="text-align:left;">Current date: ' + dateTime + "</h2>"
  );

  if (dateTime.getHours() > 1) {
    dateTime.setHours(dateTime.getHours() - 1);
  }
  document.write(
    '<h2 style="text-align:left;">1 hours ago it was ' +
      dateTime +
      ' <br> <a href="index.html">Back</a></h2>'
  );
}

function task912() {
  var dateTime = new Date();
  document.write(
    '<h2 style="text-align:left;">Current date: ' + dateTime + "</h2>"
  );

  dateTime.setFullYear(dateTime.getFullYear() - 100);

  document.write(
    '<h2 style="text-align:left;">100 years ago it was ' +
      dateTime +
      ' <br> <a href="index.html">Back</a></h2>'
  );
}

function task913() {
  var userAge = +prompt("Tell me your age: e.g 25");
  var today = new Date();
  var getBirthYear = new Date();
  getBirthYear.setFullYear(today.getFullYear() - userAge);
  var birthYear = getBirthYear.getFullYear();

  document.write(
    '<h2 style="text-align:left;">Your age is ' +
      userAge +
      " <br> Your birth year is: " +
      birthYear +
      '<br> <a href="index.html">Back</a></h2>'
  );
}

function task914() {
  var date = new Date().getMonth();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var units = 323;
  var charges = 16.59;
  var surcharge = 350;
  document.write(
    '<h2 style="text-align:left">Customer Name: <b>ABC Customer</b> <br>' +
      " Month: <b>" +
      months[date] +
      " </b> <br>" +
      "No of units: <b>" +
      units.toFixed(2) +
      "</b> <br>" +
      "Charges per unit: <b>" +
      charges.toFixed(2) +
      "</b> <br>" +
      "Net amount payable (within due date): <b>" +
      (units * charges).toFixed(2) +
      "</b> <br>" +
      "Late Payment Surchage: <b>" +
      surcharge.toFixed(2) +
      "</b> <br>" +
      "Gross amount payable (after due date): <b>" +
      (units * charges + surcharge).toFixed(2) +
      '<br> <a href="index.html">Back</a></h2>'
  );
}
