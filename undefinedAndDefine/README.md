# 📌 `undefined` in JavaScript  

## 🔎 What is `undefined`?  

1. **Global Property**  
   - `undefined` is a property of the **global object**.  
   - In the global scope, it acts as a variable holding a special value.  

2. **Loosely Typed Language**  
   - JavaScript is a **loosely typed language**.  
   - That means variables can hold any type of value at different times.  

3. **Value / Keyword**  
   - `undefined` is both a **primitive value** and treated like a **keyword** in JavaScript.  
   - You can technically assign `undefined` to a variable, but it's considered a **bad practice**.  

4. **Placeholder Meaning**  
   - `undefined` works as a **placeholder value**.  
   - It means: *"this variable has been declared, but no value has been assigned yet."*  

---

## 📖 Example  

```js
var a;                // declared but not initialized
console.log(a);       // 👉 undefined

a = 10;               // assign number
console.log(a);       // 👉 10

a = "hello ra";       // assign string
console.log(a);       // 👉 "hello ra"
⚠️ Key Points to Remember
Do not assign undefined manually (use null if you want an "empty" value).

A variable without a value automatically gets undefined.

Functions that don’t return anything explicitly will also return undefined.
