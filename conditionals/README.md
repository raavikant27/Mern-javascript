# Conditionals in JavaScript

Conditionals in JavaScript allow you to make decisions in your code based on certain conditions. They are essential for creating dynamic and interactive programs.

---

## 🧠 Basic Conditional Statements

### 1. `if` Statement
The `if` statement is used to execute a block of code **if a specified condition is true**.

```javascript
if (condition) {
  // Code to execute if the condition is true
}
2. else Statement
The else statement follows an if and executes code if the condition is false.

javascript
Copy
Edit
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
3. else if Statement
The else if statement checks multiple conditions sequentially.

javascript
Copy
Edit
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if all conditions are false
}
🔗 Logical Operators
Logical operators help combine multiple conditions:

Operator	Description	Example
&&	AND: true if both conditions are true	a > 5 && b < 10
`		`
!	NOT: reverses the result	!(a > 5) (true if false)

❓ Ternary Operator
A shorthand way to write if...else statements.

javascript
Copy
Edit
let result = condition ? value1 : value2;
✅ Executes value1 if the condition is true, else value2.

Example:

javascript
Copy
Edit
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";  // Output: "Yes"
🔁 Switch Statement
The switch statement is used to select one of many blocks of code to execute.

javascript
Copy
Edit
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;

  case value2:
    // Code to execute if expression === value2
    break;

  default:
    // Code to execute if no cases match
}
Example:

javascript
Copy
Edit
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red!");
    break;
  case "banana":
    console.log("Bananas are yellow!");
    break;
  default:
    console.log("Unknown fruit.");
}
✅ Summary
Statement	Use Case
if	Executes code if condition is true
else	Executes code if condition is false
else if	Checks multiple conditions
switch	Executes one of many code blocks
?: (ternary)	Short form of if...else