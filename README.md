# 🛒 Promise Chaining Example in JavaScript

This project demonstrates how to use **JavaScript Promises** with proper **error handling** and **chaining** to manage asynchronous operations in a clean, readable way.

---

## 📌 1. What is a Promise?

A **Promise** in JavaScript is:

- A **placeholder** for a value that will be available in the future.
- A **container** for a future value.
- An **object** representing the eventual completion (✅) or failure (❌) of an asynchronous operation, and its resulting value.

### Promise States:
1. **Pending** → Initial state, neither fulfilled nor rejected.
2. **Fulfilled** → Operation completed successfully.
3. **Rejected** → Operation failed.

---

## 📌 2. Why Promise Chaining?

- Avoids **callback hell** (deeply nested callbacks).
- Makes the code **easier to read** and **maintain**.
- Ensures **sequential execution** where each step waits for the previous one.

---

## 📌 3. Flow in This Example

The flow in our code is:

1. **`createOrder`** → Simulates creating an order and returns an **orderId**.
2. **`proceedToPayment`** → Processes payment for the order.
3. **`showOrderSummary`** → Displays the order summary.
4. **`updateWalletBalance`** → Updates the wallet balance.

**Each function returns a Promise** so that:
- The **next `.then()`** waits for the **previous** to finish.
- We can handle errors centrally with a single `.catch()`.

---

## 📌 4. Key Points to Remember

- Always **return Promises** in `.then()` for proper chaining.
- Place a **single `.catch()` at the end** to handle errors from the entire chain.
- Use **`reject()`** with an `Error` object for better debugging.
- You can use `.finally()` to execute code regardless of success or failure.

---

## 📌 5. Example Code

```javascript
const cart = ["shoes", "shirt", "pants", "kurta"];

createOrder(cart)
    .then(orderId => {
        console.log("Order ID:", orderId);
        return proceedToPayment(orderId);
    })
    .then(paymentInfo => {
        console.log("Payment Successful:", paymentInfo);
        return showOrderSummary(paymentInfo);
    })
    .then(summary => {
        console.log("Order Summary:", summary);
        return updateWalletBalance(summary);
    })
    .then(wallet => {
        console.log("Wallet Updated:", wallet);
    })
    .catch(err => {
        console.error("Error:", err.message);
    });

// Function Definitions
function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            reject(new Error("Cart is not valid"));
            return;
        }
        setTimeout(() => resolve("12345"), 2000);
    });
}

function validateCart(cart) {
    return cart.length > 0;
}

function proceedToPayment(orderId) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ orderId, status: "Payment Success" }), 2000);
    });
}

function showOrderSummary(paymentInfo) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ ...paymentInfo, items: cart.length }), 1500);
    });
}

function updateWalletBalance(summary) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ ...summary, walletBalance: 500 }), 1000);
    });
}
📌 6. Output (Example)
css
Copy code
Order ID: 12345
Payment Successful: { orderId: '12345', status: 'Payment Success' }
Order Summary: { orderId: '12345', status: 'Payment Success', items: 4 }
Wallet Updated: { orderId: '12345', status: 'Payment Success', items: 4, walletBalance: 500 }
📌 7. Conclusion
This example shows how to:

Use Promises for asynchronous work.

Avoid callback hell using chaining.

Implement error handling effectively.

Keep code clean, readable, and maintainable.

📌 8. Interview Questions & Answers
Q1: What is a Promise in JavaScript?
A: A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
It has three states: Pending, Fulfilled, and Rejected.

Q2: Why do we use Promise Chaining?
A: Promise chaining allows asynchronous tasks to be executed sequentially without nesting callbacks, making the code easier to read and maintain.

Q3: How does .then() work in Promises?
A: .then() takes two optional arguments:

A success callback to handle resolved values.

An error callback to handle rejections.
If a .then() returns a Promise, the next .then() waits for it to resolve.

Q4: Why do we return Promises in .then()?
A: Returning a Promise ensures that the next .then() in the chain waits until the returned Promise is settled, enabling proper sequencing.

Q5: What is .catch() used for?
A: .catch() is used to handle errors (rejections) in the Promise chain. If an error occurs at any point in the chain, control jumps to .catch().

Q6: What happens if we forget to return a Promise in .then()?
A: The next .then() executes immediately without waiting, which may cause incorrect sequence execution.

Q7: Difference between .finally() and .catch()?
A: .catch() is used to handle errors, while .finally() runs regardless of success or failure — useful for cleanup tasks.

Q8: How is Promise Chaining better than Callbacks?
A:

Promises avoid deep nesting (callback hell).

Easier to handle errors in one place.

Code looks cleaner and follows a top-to-bottom flow.
