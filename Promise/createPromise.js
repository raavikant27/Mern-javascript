

// Creating a promise
// Demonstrating Error Handling
// Demonstrating Promise Chaining

// Our shopping cart array
const cart = ["shoes", "shirt", "pants", "kurta"];

// Create Order → Proceed to Payment → Show Order Summary → Update Wallet Balance
createOrder(cart)
    .then(function(orderId) {
        console.log("Order ID:", orderId);
        return proceedToPayment(orderId); // Pass orderId to next step
    })
    .then(function(paymentInfo) {
        console.log("Payment Successful:", paymentInfo);
        return showOrderSummary(paymentInfo);
    })
    .then(function(summary) {
        console.log("Order Summary:", summary);
        return updateWalletBalance(summary);
    })
    .then(function(wallet) {
        console.log("Wallet Updated:", wallet);
    })
    .catch(function(err) {
        // Any error in any step comes here
        console.error("Error:", err.message);
    });

/**
 * Function to create an order
 * @param {Array} cart - list of items in the cart
 * @returns {Promise} - resolves with order ID or rejects with error
 */
function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        if (!validateCart(cart)) {
            reject(new Error("Cart is not valid"));
            return;
        }
        const orderId = "12345";
        setTimeout(function() {
            resolve(orderId);
        }, 2000);
    });
    return pr;
}

/**
 * Function to validate the cart
 */
function validateCart(cart) {
    return cart.length > 0;
}

/**
 * Function to simulate payment
 */
function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({ orderId, status: "Payment Success" });
        }, 2000);
    });
}

/**
 * Function to simulate order summary
 */
function showOrderSummary(paymentInfo) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ ...paymentInfo, items: cart.length });
        }, 1500);
    });
}

/**
 * Function to simulate wallet update
 */
function updateWalletBalance(summary) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ ...summary, walletBalance: 500 });
        }, 1000);
    });
}



// //creating a promise
// //Error Handling
// //Promise Chaining
// const cart=["shoes","shirt","pants","kurta"];

// const promise=createOrder(cart);//creates a oder-id

// promise.then(function(orderId){

//    console.log(orderId) ;

// //    proceedToPayment(orderId);

// })



// /// 1- try to create order function ourself
// //THIS THE WAY Tto creating a promise 


// function createOrder(cart){

//     const pr=new Promise(function(resolve,reject){
// // writing a logic
// //createOder
// //validatecart
// //order id everhting writing here 
// if(!validateCart(cart)){
//    const err=new Error("cart is not valid")
//   reject(err)

// }
// //logic for creating order id 
// const orderId="12345";
// if(orderId){
//     resolve(orderId)
// }
    
//     })

//     //at last return the promise 
//     return pr;
// }
// function validateCart(cart){

//     return true;
// }
// //2 nd 




 
