const sideLength = 5;

// Caller function takes a callback function
function applySideLength(callback) {
  return callback(sideLength);
}

// Callback must expect the possible argument from the calling function
function areaOfSquare(side) {
  return side * side;
}

applySideLength(areaOfSquare); // => 25
