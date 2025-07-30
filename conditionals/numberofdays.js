const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', month => {
  const monthDays = {
    1: 31, // January
    2: 28, // February
    3: 31, // March
    4: 30, // April
    5: 31, // May
    6: 30, // June
    7: 31, // July
    8: 31, // August
    9: 30, // September
    10: 31, // October
    11: 30, // November
    12: 31  // December
  };
  
  const numMonth = parseInt(month);
  
  if (numMonth >= 1 && numMonth <= 12) {
    console.log(monthDays[numMonth]);
  } else {
    console.log("Invalid month");
  }
  
  readline.close();
});



// Number of Days
// Given the number of the month, your task is to calculate the number of days present in the particular month.

// Note:- Consider non-leap year.

// Input Format
// An integer M, denoting the number of the month.

// Output Format
// Return the number of days in the month corresponding to the given number. Consider a non-leap year.

// Example 1
// Input

// 1
// Output

// 31
// Explanation

// January has 31 days.

// Example 2
// Input

// 3
// Output

// 31
// Explanation

// March has 31 days.

// Constraints
// 1 <= M <= 12