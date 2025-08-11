// Example of callbacks in JavaScript

const cart = ["shoes", "pants", "kurta"];

// Simulated API object with functions
const api = {
  createOrder: function (cart, callback) {
    console.log("Order created for:", cart);
    setTimeout(callback, 1000); // Simulate async delay
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

// Callback hell example
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updatedWallet();
    });
  });
});
