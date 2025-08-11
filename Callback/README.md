# JavaScript Callback Example

This project demonstrates the concept of **callbacks** in JavaScript using a simulated e-commerce order process.

## Overview

The flow is:
1. Create an order for items in the cart.
2. Proceed to payment.
3. Show the order summary.
4. Update the user's wallet.

The example intentionally uses **nested callbacks** to illustrate "callback hell."

## Code Flow

```javascript
const cart = ["shoes", "pants", "kurta"];

const api = {
  createOrder: function (cart, callback) {
    console.log("Order created for:", cart);
    setTimeout(callback, 1000);
  },
  proceedToPayment: function (callback) {
    console.log("Proceeding to payment...");
    setTimeout(callback, 1000);
  },
  showOrderSummary: function (callback) {
    console.log("Showing order summary...");
    setTimeout(callback, 1000);
  },
  updatedWallet: function () {
    console.log("Wallet updated successfully!");
  }
};

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updatedWallet();
    });
  });
});
How to Run
Clone this repository or copy the code into a JavaScript file (e.g., index.js).

Run the file using Node.js:

bash
Copy code
node index.js
Observe the sequence of logs in the console.

Key Concept
Callback: A function passed as an argument to another function and executed after a certain task completes.

Callback Hell: Deeply nested callbacks that make code harder to read and maintain.

Example Output
less
Copy code
Order created for: [ 'shoes', 'pants', 'kurta' ]
Proceeding to payment...
Showing order summary...
Wallet updated successfully!