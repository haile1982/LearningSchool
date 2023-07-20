const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the REPL function
function repl() {
  rl.question("> ", (input) => {
    // Process the input
    const output = evaluate(input);

    // Print the output
    console.log(output);

    // Continue the REPL
    repl();
  });
}

// Define the evaluation function
function evaluate(input) {
  // Implement your evaluation logic here
  // This is just a sample implementation that echoes the input
  return `You entered: ${input}`;
}

// Start the REPL
repl();
