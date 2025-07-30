




const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  // Write your code here

  const N = parseInt(input); // Convert input to integer

  if (N < 30) {
    console.log("less important");
  } else {
    console.log("more important");
  }
  rl.close();
});













// Age Condition Check
// Given an integer n. Your task is to write a program to use switch case as follows :

// if the input number is 28, print i am young.
// else print i am not young.
// Input Format
// First line contains an integer n.

// Output Format
// Print the statement based on value of n as given above.

// Example 1
// Input

// 28
// Output

// i am young
// Example 2
// Input

// 30
// Output

// i am not young
// Constraints
// 1<=n<=10000