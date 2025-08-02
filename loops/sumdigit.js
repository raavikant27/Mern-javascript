const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (n) => {
  let sum = 0;
  while (n != 0) {
    let digit = n % 10;
    sum += digit;
    n = Math.floor(n / 10);
  }
  console.log(sum);
  rl.close();
});