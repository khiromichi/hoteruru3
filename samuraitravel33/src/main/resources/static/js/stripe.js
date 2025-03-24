 const stripe = Stripe('pk_test_51QwOZORu94pnA0QfkSHQx4mHCYUy9kjCVugJz3EzE1jIb970mgQ2GuR4ZnwV1gMSe9N3GeNdL80eftmMciy3h4BU00IX4G9mBx');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });
