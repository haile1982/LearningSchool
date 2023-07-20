let myVar = "global"; // Declare a global variable

function checkscope2() {
  console.log(myVar);
}

function checkscope() {
  let myVar = "local"; // Declare a local variable
  console.log(myVar);
}

checkscope2();

///  Question : quel est la différence entre var et let et const ???
