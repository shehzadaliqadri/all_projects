function generateHTML(name, colors, price, camera) {
  var div = document.createElement("div");

  var h2 = document.createElement("h2");
  var h2Text = document.createTextNode(name);
  h2.appendChild(h2Text);
  div.appendChild(h2);

  var h4 = document.createElement("h4");
  var h4Text = document.createTextNode(colors);
  h4.appendChild(h4Text);
  div.appendChild(h4);

  var h6 = document.createElement("h6");
  var h6Text = document.createTextNode(price);
  h6.appendChild(h6Text);
  div.appendChild(h6);

  var span = document.createElement("span");
  var spanText = document.createTextNode(camera);
  span.appendChild(spanText);
  div.appendChild(span);

  return div;
}

var mobiles = {
  iphone: {
    name: "Iphone x",
    colors: ["blue", "white", "black"],
    price: 222111,
    camera: 12,
  },
  samsung: {
    name: "samsung 1",
    colors: ["blue", "white", "black"],
    price: 222111,
    camera: 12,
  },
  vivo: {
    name: "Iphone x",
    colors: ["blue", "white", "black"],
    price: 222111,
    camera: 12,
  },
  iphone: {
    name: "Iphone x",
    colors: ["blue", "white", "black"],
    price: 222111,
    camera: 12,
  },
};

var result = mobiles["iphone"];

var main = document.getElementById("main");
main.appendChild(
  generateHTML(result.name, result.colors, result.price, result.camera)
);
