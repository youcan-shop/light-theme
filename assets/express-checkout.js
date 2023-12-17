async function placeOrder() {
    const expressCheckoutForm = document.querySelector('#express-checkout-form');
    const fields = Object.fromEntries(new FormData(expressCheckoutForm));
    const productVariantId = variants[0].id;

    const response = await youcanjs.checkout.placeExpressCheckoutOrder({ productVariantId, quantity: 1, fields });

    response
    .onSuccess(() => {
        alert('success')
    })
    .onValidationErr(() => {
        alert('error')
    })
}