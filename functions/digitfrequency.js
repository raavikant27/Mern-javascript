function countDigitFrequency(n, d) {
  // Convert both n and d to strings
  let numStr = n.toString();
  let digitStr = d.toString();

  let count = 0;

  // Loop through each character of number string
  for (let char of numStr) {
    if (char === digitStr) {
      count++;
    }
  }

  return count;
}

// Reading input using readline
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', input => {
  const [n, d] = input.trim().split(' ').map(Number);
  const result = countDigitFrequency(n, d);
  console.log(result);
  readline.close();
});
