document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores de los campos del formulario
        const payment = form.querySelector('[name="paymentMethod"]').value;
        const amount = parseFloat(form.querySelector('[name="amount"]').value);
        const paymentMethod = form.querySelector('[name="paymentMethod"]').value;

        // Aquí puedes realizar la lógica de procesamiento del pago
        // Por ejemplo, podrías enviar los datos a un servidor

        // Luego de procesar el pago, podrías mostrar un mensaje o redirigir a otra página
        alert(`Pago realizado:\nServicio: ${payment}\nMonto: $${amount.toFixed(2)}\nMétodo de pago: ${paymentMethod}`);

        // Puedes agregar aquí la lógica para limpiar el formulario si es necesario
        form.reset();
    });
});