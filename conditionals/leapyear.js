function isLeapYear(Y) {
  if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
    return 1; // Leap year
  } else {
    return 0; // Not a leap year
  }
}

// Input from user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  const year = parseInt(input);
  console.log(isLeapYear(year));
  rl.close();
});



// Leap Year
// Given a year, find if it is a leap year.

// A Leap year is the year that is multiple of 4. However, multiples of 100 except for the multiples of 400 are not leap years.

// Your task is to complete the function isLeapYear which receives the year as its parameter and returns 1 or 0 depending upon if the year is a leap year or not.

// Input Format
// An integer Y, denoting the year.

// Output Format
// Return 1, if the given year is a leap year or 0 otherwise.

// Example 1
// Input

// 2004
// Output

// 1
// Explanation

// 2004 is divisible 4 by hence it's a leap year

// Example 2
// Input

// 2000
// Output

// 1
// Explanation

// 2000 is divisible by 400 hence, it is a leap year.

// Example 3
// Input

// 1900
// Output

// 0
// Explanation Since 1900 is divisible by 100 but not divisible by 400, so it is not a leap year.

// Constraints
// 1000 <= Y <= 9999