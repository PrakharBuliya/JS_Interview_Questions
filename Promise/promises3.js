//Consumer part
const cart = ["shoes", "Shirt", "Pants"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedPayment(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

//Producer Part
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //Create Order
    //VALIDATE CART
    //order id

    if (!validateCart(cart)) {
      const err = new Error("Invalid Cart");
      reject(err);
    }

    //Logic to create order

    const orderId = "12345"; //DBcall.getOrderId();
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}
