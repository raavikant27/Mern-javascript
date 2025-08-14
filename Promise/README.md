1. What is a Promise?

A Promise is:

A placeholder for a value that will be available in the future

A container for a future value

An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value

Pending → initial state

Fulfilled → operation completed successfully

Rejected → operation failed

2. Why Promise Chaining?

It removes “callback hell” and makes code easier to read and maintain.

3. Flow in This Example

createOrder → simulates creating an order and returns an orderId.

proceedToPayment → processes payment for the order.

showOrderSummary → displays the order summary.

updateWalletBalance → updates the wallet balance.

Each returns a Promise so the next .then() waits for the previous to finish.
5. Key Points

Always return Promises in .then() for proper chaining.

.catch() at the end handles errors from the entire chain.
