# 🔥 JavaScript Hoisting — Explained with Examples

This repo demonstrates **Hoisting in JavaScript** with simple examples and expected outputs.  
You can run the code in **Node.js terminal**.

---

## 📖 What is Hoisting?

👉 **Hoisting** is JavaScript’s default behavior of moving **function declarations** and **variable declarations** to the **top of their scope** before code execution.

- **Function Declarations** → hoisted completely (you can call them before definition).  
- **Variables declared with `var`** → hoisted but initialized with `undefined`.  
- **Variables declared with `let` and `const`** → hoisted but remain in the **Temporal Dead Zone (TDZ)** until initialized → accessing them before declaration throws ❌ `ReferenceError`.

---

## 🚀 Situations & Examples

### ✅ Situation 1: Normal Order
```js
var x = 7;
function getName() {
    console.log("Namaste Ravikant SINGH");
}

getName();
console.log(x);
Output:

nginx
Copy
Edit
Namaste Ravikant SINGH
7
✅ Situation 2: Function & Var Before Initialization
js
Copy
Edit
getName();
console.log(x);
var x = 7;
function getName() {
    console.log("Namaste Ravikant SINGH");
}
Output:

javascript
Copy
Edit
Namaste Ravikant SINGH
undefined
✅ Situation 3: Function, Function Reference & Var
js
Copy
Edit
getName();
console.log(getName);
console.log(x);
var x = 7;
function getName() {
    console.log("Namaste Ravikant SINGH");
}
Output:

javascript
Copy
Edit
Namaste Ravikant SINGH
[Function: getName]
undefined
⚠️ With let or const
js
Copy
Edit
console.log(x); // ❌ ReferenceError
let x = 10;
Why?
Because let and const are also hoisted but kept in the Temporal Dead Zone (TDZ) until execution reaches their line.

📊 var vs let vs const (Hoisting Comparison)
Feature	var	let	const
Hoisting	✅ Yes	✅ Yes	✅ Yes
Initialization before use	undefined	❌ ReferenceError (TDZ)	❌ ReferenceError (TDZ)
Redeclaration allowed?	✅ Yes	❌ No	❌ No
Reassignment allowed?	✅ Yes	✅ Yes	❌ No

