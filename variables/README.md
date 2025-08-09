# JavaScript Variables: `var`, `let`, and `const`

## **var Keyword**
- **Redeclaration**: Variables declared with `var` can be redeclared within the same scope, which may lead to potential bugs.
- **Hoisting**: `var` variables are hoisted to the top of their scope, allowing them to be accessed before declaration.
- **Global Scope**: `var` variables have a function or global scope, making them accessible throughout the code.

---

## **let and const Keywords**
- **No Redeclaration**: `let` and `const` prevent redeclaration within the same scope, enhancing code reliability.
- **Block Scope**: `let` and `const` variables are block-scoped, limiting their accessibility to the block they're declared in.
- **No Hoisting**: Unlike `var`, `let` and `const` are not initialized during hoisting, resulting in a **ReferenceError** when accessed before declaration.
- **Immutability with `const`**: `const` variables are immutable, meaning their value cannot be reassigned after initialization.

---

## **Scopes and Hoisting**
- **Global Scope**: Variables declared outside any block are in the global scope and can be accessed anywhere.
- **Block Scope**: Variables declared within a block (`{}`) are only accessible inside that block.
- **Hoisting**: JavaScript moves variable and function declarations to the top of their scope before execution.

---

## **Temporal Dead Zone (TDZ)**
- TDZ occurs when accessing `let` and `const` variables before their declaration.
- Results in a **ReferenceError** due to their non-accessible state until initialized.

---

## **Conclusion**
Mastering JavaScript variables—including their scopes, hoisting behavior, and the differences between `var`, `let`, and `const`—is essential for writing robust code in the **MERN stack**.

---

## **References**
- [MDN Web Docs: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN Web Docs: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Web Docs: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [JavaScript.info: Variables](https://javascript.info/variables)
- [W3Schools: JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
