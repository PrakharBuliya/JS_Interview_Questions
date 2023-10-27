// const cart = ["shirts", "tshirts", "pants", "cargo"];

// //Callback Hell
// createOrder(cart, function () {
//   proceedToPayment(orderId, function (paymentInfo) {
//     orderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// //Promise is an object representing the eventual completion or rejection of a asynchronous operation

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
