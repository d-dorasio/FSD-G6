document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const payment = form.querySelector('[name="paymentMethod"]').value;
        const amount = parseFloat(form.querySelector('[name="amount"]').value);

        alert(`Pago realizado con éxito!\nServicio: ${payment}\nMonto: $${amount.toFixed(2)}`);

        form.reset();
    });
});
