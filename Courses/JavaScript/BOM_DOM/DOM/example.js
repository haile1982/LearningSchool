let dom = window.document;

let node2 = dom.createElement("h2");

let feuille2 = dom.createTextNode("Feuille2");

node2.appendChild(feuille2);

dom.getElementById("id2").innerHTML = "FFFFFFFFFF";

dom
  .getElementById("id2")
  .setAttribute(
    "style",
    'font-size: 15px;; font-family: "Times New Roman", Times, serif; color: red'
  );

let img = window.document.createElement("img");
img.setAttribute(
  "src",
  "https://www.conservation-nature.fr/wp-content/uploads/visuel/fruit/shutterstock_575378506.jpg"
);

window.document.body.appendChild(img);

img.setAttribute(
  "style",
  " height: 200px;width: 200px; image-rendering: auto; "
);

let noeudsvg = window.document.createElement("img");
noeudsvg.setAttribute("src", "./circles_single.svg");

window.document.body.appendChild(noeudsvg);

// 1 step
let nodeml = window.document.getElementById("mathml");

// 2 lit le fichier et result str

let strmathml =
  "<math>" +
  "<mrow>" +
  "<mi>x</mi>" +
  "<mo>=</mo>" +
  "<mfrac>" +
  "<mrow>" +
  "<mrow>" +
  "<mo>-</mo>" +
  "<mi>b</mi>" +
  "</mrow>" +
  "<mo>&PlusMinus;</mo>" +
  "<msqrt>" +
  "<mrow>" +
  "<msup>" +
  "<mi>b</mi>" +
  "<mn>2</mn>" +
  "</msup>" +
  "<mo>-</mo>" +
  "<mrow>" +
  "<mn>4</mn>" +
  "<mo>&InvisibleTimes;</mo>" +
  "<mi>a</mi>" +
  "<mo>&InvisibleTimes;</mo>" +
  "<mi>c</mi>" +
  "</mrow>" +
  "</mrow>" +
  "</msqrt>" +
  "</mrow>" +
  "<mrow>" +
  "<mn>2</mn>" +
  "<mo>&InvisibleTimes;</mo>" +
  "<mi>a</mi>" +
  "</mrow>" +
  "</mfrac>" +
  "</mrow>" +
  "</math>";

const xmlStr = strmathml;

const parser = new DOMParser();
const dom_mathml = parser.parseFromString(xmlStr, "application/xml");

// 3 str
nodeml.innerHTML = strmathml;

// Mermaid JS

let mdstr =
  "<pre class='mermaid'>" +
  "classDiagram" +
  '\n \t note "From Duck till Zebra"' +
  "\n \t Animal <|-- Duck" +
  '\n \t note for Duck "can flycan swimcan divecan help in debugging"' +
  "\n \t Animal <|-- Fish" +
  "\n \t Animal <|-- Zebra" +
  "\n \t Animal : +int age" +
  "\n \t Animal : +String gender" +
  "\n \t Animal: +isMammal()" +
  "\n \t Animal: +mate()" +
  "\n \t class Duck{" +
  "\n \t \t +String beakColor" +
  "\n \t \t  +swim()" +
  "\n \t \t  +quack()" +
  "\n \t }" +
  "\n \t class Fish{" +
  "\n \t \t  -int sizeInFeet" +
  "\n \t \t  -canEat()" +
  "\n \t }" +
  "\n \t class Zebra{" +
  "\n \t \t  +bool is_wild" +
  "\n \t \t  +run()" +
  "\n \t }" +
  "</pre>";

let md = window.document.getElementById("mermaid");
md.innerHTML = mdstr;
