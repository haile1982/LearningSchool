const sideLength = 5;

// Caller function takes a callback function
function applySideLength(callback) {
  return callback(sideLength);
}

console.log(
  applySideLength((sideLength) => {
    return sideLength * sideLength;
  })
);
