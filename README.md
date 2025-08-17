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

#####################################################################

# Promise Combinators in JavaScript

Here is the simple theory you provided, structured clearly:

---

## 1. Promise.all()

1. It takes an **array (iterable)** as input.
2. We pass promises inside this array.
3. Example: `p1` takes 3 sec, `p2` takes 4 sec, and `p3` takes 5 sec.
4. All run in **parallel** but the final result comes only when **all promises finish** → total time = 5 sec.
5. The result is returned in an **array of values**.
6. If **any promise rejects**, `Promise.all` immediately rejects with that error.
   - Example: If `p2` rejects in 1 sec → output will be error in **1 sec** (it does not wait for others).

---

## 2. Promise.allSettled()

1. Takes an array of promises like `[p1, p2, p3]`.
2. Example:
   - `p1` → 3 sec
   - `p2` → 1 sec (rejects)
   - `p3` → 2 sec
3. Waits for **all promises to be settled** (fulfilled or rejected).
4. Returns an **array with objects**:
   - Fulfilled → `{status: 'fulfilled', value: ...}`
   - Rejected → `{status: 'rejected', reason: ...}`
5. Time taken = the longest promise (here **3 sec**).
6. Output: `[val1, error, val3]` with status.

---

## 3. Promise.race()

1. Takes array `[p1, p2, p3]`.
2. Returns the **first settled promise** (success or error).
3. Example:
   - `p1` → 3 sec
   - `p2` → 1 sec
   - `p3` → 2 sec
4. After 1 sec → result is from `p2` (either success or error).
5. It does **not wait** for others.

---

## 4. Promise.any()

1. Takes array `[p1, p2, p3]`.
2. Returns the **first successful promise**.
3. Ignores errors.
4. Example:
   - `p1` → 3 sec
   - `p2` → 1 sec (rejects)
   - `p3` → 2 sec (success)
5. After 2 sec → result = value from `p3`.
6. If **all reject** → returns an `AggregateError` with all errors `[error1, error2, error3]`.

---

✅ **Summary:**
- `Promise.all` → waits for all, fails fast on any rejection.
- `Promise.allSettled` → waits for all, gives results + errors.
- `Promise.race` → first settled (success/error).
- `Promise.any` → first success, if all fail → AggregateError.


