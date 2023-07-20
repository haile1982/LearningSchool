let variableglobale = "hhh";

function addUpTwoNumbers1(num1, num2) {
  return num1 + num2;
}

// function keyword removed and => added
const addUpTwoNumbers2 = (num1, num2) => {
  return num1 + num2;
};

const addUpTwoNumbers3 = (num1, num2) => {
  return num1 + num2;
};

// can be shortened to
const addUpTwoNumbers4 = (num1, num2) => num1 + num2;
// braces {} and return removed

function carré(nombre) {
  return nombre * nombre;
}

console.log(addUpTwoNumbers1(1, 2));

// Question qu'est ce qu'une fonction  en JS ?
// C'est un block d'intructions qui prend en paramettre des valeurs et qui éventuellment retourne un résultat

//  Question qu'est ce qu'une fonction pure ?
// Une fonction pure dans le cadre de la programmation fonctionnelle :
// Une fonction pure est idempotente et sans effets de bords
// Pure function is idempotent and without side-effects
