// Divisibility Check
// Given a number n, If the number is divisible by 6 then print Divisible else Not divisible.

// Input Format
// First line contains an integer.

// Output Format
// If the number is divisible by 6 then Divisible will be printed. If the number is not divisible by 6 then Not divisible will be printed.

// Example 1
// Input

// 28
// Output

// Not divisible
// Explanation

// 28 is not divisible by 6.

// Example 2
// Input

// 24
// Output

// Divisible
// Explanation

// 24 is divisible by 6.

// Constraints
// 1 <= n <= 10^6


const readline = require('readline');const rl = readline.createInterface({  input: process.stdin,  output: process.stdout});rl.on('line', (input) => {  const n = parseInt(input);  if (n % 6 === 0) {    console.log("Divisible");  } else {    console.log("Not divisible");  }  rl.close(); 