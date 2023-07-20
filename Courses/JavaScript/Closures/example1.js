// Data Privacy / Data Encapsulation

const saveNumber = (number) => {
  // The saved value is unaccessible by the outer lexical scope.
  const value = number;

  // We can provide access to the primitive value with a function, but the original will never change
  return (a = () => {
    return value;
  });
};

// Attempting to set the variable outside of its lexical scope results in an error
value = 42;

console.log(saveNumber(value));
