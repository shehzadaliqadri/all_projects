function PhoneBrands(name, brand, colors, image, isPta) {
  this.mobName = name;
  this.mobBrand = brand;
  this.mobcolors = colors;
  this.mobImage = image;
  this.mobIsPta = isPta;
}

var mobilePhones = {
  iphone: {
    iphone5: new PhoneBrands(
      "Iphone 6",
      "Apple",
      ["red", "white"],
      "https://fdn2.gsmarena.com/4.jpg",
      false
    ),
    iphone6s: new PhoneBrands(
      "Iphone 6s",
      "Apple",
      ["pink", "white"],
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg",
      false
    ),
    iphone6Plus: new PhoneBrands(
      "Iphone 6 plus",
      "Apple",
      ["gray", "white"],
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-plus2.jpg",
      false
    ),
    iphone6sPlus: new PhoneBrands(
      "Iphone 6s plus",
      "Apple",
      ["pink", "white"],
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s-plus.jpg",
      false
    ),
    iphone13: new PhoneBrands(
      "Iphone 13",
      "Apple",
      ["blue", "bluewhite"],
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
      false
    )
  },
  // samsung
  samsung: {
    A235G: new PhoneBrands(
      "Samsung Galaxy A23 5G",
       "Samsung",
       ["pink", "white"],
       "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a23-5g.jpg",
       true,
    ),
    M135G: new PhoneBrands(
     "Samsung Galaxy M13 5G",
      "Samsung",
      ["white", "Brown"],
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m13-5g.jpg",
      true,
    ),
    M13: new PhoneBrands(
      "Samsung Galaxy M13",
       "Samsung",
      ["blue", "bluewhite"],
      
        "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m13-4g-india.jpg",
       true,
    ),
    A13: new PhoneBrands(
      "Samsung Galaxy A13 (SM-A137)",
       "Samsung",
      ["white", "lightblue"],
       "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a13-a137.jpg",
       true,
    ),
    Xcover6: new PhoneBrands(
      "Samsung Galaxy Xcover 6",
      "Samsung",
      ["black", "black"],
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-xcover6-pro-r.jpg",
      true,
    ),
  },
  // Vivo
  vivo: {
    iqoo: new PhoneBrands(
      "Vivo iQOO 10 Pro",
       "Vivo",
       ["black", "white"],
       "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo10-pro.jpg",
       true,
    ),
    iqoo9T: new PhoneBrands(
      "Vivo iQOO 9T",
       "Vivo",
      ["white", "black"],
       "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9t-5g.jpg",
       true,
    ),
    X80: new PhoneBrands(
      "Vivo X80 Pro",
       "Vivo",
       ["blue", "black"],
       "https://fdn2.gsmarena.com/vv/bigpic/vivo-x80-pro.jpg",
       true,
    ),
    y21: new PhoneBrands(
     "Vivo Y21",
      "Vivo",
      ["white", "lightblue"],
      "https://fdn2.gsmarena.com/vv/bigpic/vivo-y21-.jpg",
      true,
    ),
    v23: new PhoneBrands(
     "Vivo V23 5G",
      "vivo",
       ["orange", "orange"],
      "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-5g.jpg",
      true,
    ),
  },
  // Realme
  realme: {
    c35: new PhoneBrands(
      "Realme C35",
      "Realme",
       ["green", "white"],
      "https://fdn2.gsmarena.com/vv/bigpic/realme-c35.jpg",
      true,
    ),
    pro9: new PhoneBrands(
      "Realme 9 Pro",
       "Realme",
       ["green", "full-green"],
       "https://fdn2.gsmarena.com/vv/bigpic/realme-9-pro.jpg",
       true,
    ),
    Gt2: new PhoneBrands(
    "Realme GT2 Explorer Master",
     "Realme",
    ["orange", "white"],
         "https://fdn2.gsmarena.com/vv/bigpic/realme-gt2-master-explorer.jpg",
     true,
    ),
    proplus9: new PhoneBrands(
      "Realme 9 Pro+",
       "Realme",
      ["white", "lightblue"],
       "https://fdn2.gsmarena.com/vv/bigpic/realme-9-pro-plus.jpg",
       true,
    ),
    realme9: new PhoneBrands(
     "Realme 9",
    "Realme",
    ["orange", "orange"],
    "https://fdn2.gsmarena.com/vv/bigpic/realme-9-4g.jpg",
    true,
    ),
  },
// oppo
  oppo: {
    reno8: new PhoneBrands(
     "Oppo Reno8",
   "Oppo",
  ["orange", "white"],
      "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8.jpg",
      true,
    ),
    reno8pro: new PhoneBrands(
     "Oppo Reno8 Pro",
      "Oppo",
      ["blue", "lightblue"],
      "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-pro.jpg",
      true
    ),
    a3s: new PhoneBrands(
   "Oppo A3s",
   "Oppo",
   ["red", "red"],
   "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3s.jpg",
   true,
    ),
    a16: new PhoneBrands(
"Oppo A16",
 "Oppo",
 ["blue", "lightblue"],
 "https://fdn2.gsmarena.com/vv/bigpic/oppo-a16.jpg",
 true,
    ),
    F9: new PhoneBrands(
 "Oppo F9 (F9 Pro)",
 "Oppo",
 ["red", "orange"],
 "https://fdn2.gsmarena.com/vv/bigpic/oppo-f9.jpg",
 true,
    ),
  },
  // Infinix
  infinix: {
    note12pro: new PhoneBrands(
    "Infinix Note 12 Pro 5G",
     "Infinix",
     ["black", "white"],
     "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-pro-5g.jpg",
     true,
    ),
    hot12play: new PhoneBrands(
    "Infinix Hot 12 Play",
     "Infinix",
    ["gray", "lightblue"],
     "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12-play.jpg",
     true,
    ),
    hot12: new PhoneBrands(
     "Infinix Hot 12",
      "Infinix",
       ["blue", "lightblue"],
      "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12.jpg",
      true,
    ),
    infinixnote12: new PhoneBrands(
     "Infinix Note 12 Pro",
      "Infinix",
       ["blue", "lightblue"],
      "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-pro-4g.jpg",
      true,
    ),
    infinixnote12: new PhoneBrands(
     "Infinix Note 12",
      "Infinix",
       ["white", "orange"],
      "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12.jpg",
      true,
    ),
  }

/*
    



// for (keys in mobilePhones) {
//   for (key2 in mobilePhones[keys]) {
//     for (key3 in mobilePhones[keys][key2]) {
//       console.log(key3 + ":" + JSON.stringify(mobilePhones[keys][key2][key3]));
//     }
//   }
// }

var list = Object.keys(mobilePhones);
// console.log(list)
for (var i = 0; i < list.length; i++) {
  var dropdown = document.getElementById("dropdown");
  var option = document.createElement("option");
  var optionText = document.createTextNode(list[i]);
  option.appendChild(optionText);
  dropdown.appendChild(option);
}

function search() {
  event.preventDefault();
  var div12 = document.getElementById("div12");
  var seletcedValue = dropdown.options[dropdown.selectedIndex].value;
  console.log(seletcedValue);
  var inputs = document.getElementById("input").value;
  inputs = inputs.replaceAll(" ", "");
  if (inputs in mobilePhones[seletcedValue]) {
    // image
    var img2 = document.createElement("img");
    img2.setAttribute("src", mobilePhones[seletcedValue][inputs]["image"]);
    img2.setAttribute("class", "qadeer");
    div12.appendChild(img2);

    // name
    var h6 = document.createElement("h6");
    var texth6 = document.createTextNode(
      "Name: " + mobilePhones[seletcedValue][inputs]["name"]
    );
    h6.appendChild(texth6);
    h6.setAttribute("class", "qadeer");
    div12.appendChild(h6);

    // brand
    var h62 = document.createElement("h6");
    var texth62 = document.createTextNode(
      "Brand: " + mobilePhones[seletcedValue][inputs]["brand"]
    );
    h62.appendChild(texth62);
    h62.setAttribute("class", "qadeer");
    div12.appendChild(h62);

    // colors
    var h623 = document.createElement("h6");
    var texth623 = document.createTextNode(
      "Color: " + mobilePhones[seletcedValue][inputs]["colors"]
    );
    h623.appendChild(texth623);
    h623.setAttribute("class", "qadeer");
    div12.appendChild(h623);

    // ispta
    var h6234 = document.createElement("h6");
    var texth6234 = document.createTextNode(
      "isPta: " + mobilePhones[seletcedValue][inputs]["isPta"]
    );
    h6234.appendChild(texth6234);
    h6234.setAttribute("class", "qadeer");
    div12.appendChild(h6234);

    var container1 = document.getElementById("none1");
    container1.style.display = "block";

    var container = document.getElementById("none");
    container.style.display = "none";

    // console.log(mobilePhones[seletcedValue][inputs])
  } else if (inputs == "") {
    swal("pleaase select value first");
  } else {
    swal("not found");
  }
}
*/
