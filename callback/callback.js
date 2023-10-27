const cart = [shirts, tshirt, pants, cargos];

api.createOrder(cart, () => {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

// 1- callback hell
// 2- Inversion of control
