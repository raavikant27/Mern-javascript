# Destructuring & Spread/Rest Operator in JavaScript

## ✅ Destructuring
Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

### ✳️ Array Destructuring
```js
const fruits = ['Apple', 'Banana', 'Mango'];
const [first, second] = fruits;
console.log(first);  // Apple
console.log(second); // Banana
✳️ Object Destructuring
js
Copy code
const person = { name: 'Ravi', age: 22 };
const { name, age } = person;
console.log(name); // Ravi
console.log(age);  // 22
✅ Spread Operator (...)
The spread operator expands iterable items (like arrays/objects) into individual elements.

js
Copy code
const nums1 = [1, 2, 3];
const nums2 = [...nums1, 4, 5];
console.log(nums2); // [1, 2, 3, 4, 5]
✅ Rest Operator (...)
The rest operator collects remaining elements into an array.

js
Copy code
const [a, b, ...rest] = [10, 20, 30, 40];
console.log(a);    // 10
console.log(b);    // 20
console.log(rest); // [30, 40]
🎯 How They Simplify Code:
Make data extraction short and clean.

Avoid repetitive access (arr[0], obj.prop).

Easily clone/merge arrays or objects.

Useful in function arguments.

js
Copy code
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10