function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function calculateNPR(n, r) {
  return factorial(n) / factorial(n - r);
}

// Reading input using readline
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

readline.on('line', (line) => {
  inputs.push(parseInt(line));
  if (inputs.length === 2) {
    const [n, r] = inputs;
    const result = calculateNPR(n, r);
    console.log(result);
    readline.close();
  }
});
