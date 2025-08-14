// --- Example 1: Using fetch() ---
// Define the API endpoint
const GITHUB_API = 'https://api.github.com/users/raavikant27';

// Call fetch() — it returns a Promise that resolves to a Response object
const user = fetch(GITHUB_API);

// Log the Promise object (will be in pending state initially)
console.log(user);

// Attach a callback using .then() to handle the resolved value
user.then(function (data) {
  console.log(data); // Logs the Response object from fetch()
});

// --- Example 2: Callback Hell ---
// Here we simulate an e-commerce order flow with nested callbacks
const cart = ['shoes', 'pants', 'kurta'];

// Deeply nested callbacks (not recommended)
// createOrder(cart, function(orderId) {
//     proceedToPayment(orderId, function(paymentInfo) {
//         showOrderSummary(paymentInfo, function() {
//             updateWalletBalance();
//         });
//     });
// });

// --- Example 3: Promise Chaining ---
// Functions return Promises instead of using callbacks
function createOrder(cart) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderId = 'ORD-' + Math.floor(Math.random() * 1000);
      console.log('✅ Order created:', orderId);
      resolve(orderId);
    }, 500);
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('💳 Payment processed for:', orderId);
      resolve({ orderId, status: 'PAID' });
    }, 500);
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('🧾 Summary:', paymentInfo);
      resolve('Summary displayed');
    }, 500);
  });
}

function updateWalletBalance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('👛 Wallet updated');
      resolve('Wallet updated');
    }, 500);
  });
}

// Promise chaining implementation
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId); // Wait for payment
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo); // Wait for summary
  })
  .then(function () {
    return updateWalletBalance(); // Wait for wallet update
  })
  .then(function () {
    console.log('🎉 All steps completed successfully');
  })
  .catch(function (error) {
    console.error('❌ Error in process:', error);
  });
