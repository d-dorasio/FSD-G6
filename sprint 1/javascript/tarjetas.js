document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tarjeta-form");
    const tarjetasContainer = document.getElementById("tarjetas-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const numero = document.getElementById("numero").value;
        const vencimiento = document.getElementById("vencimiento").value;
        const codigo = document.getElementById("codigo").value;

        const nuevaTarjeta = document.createElement("div");
        nuevaTarjeta.className = "card";
        nuevaTarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <p>Número: ${numero}</p>
            <p>Vencimiento: ${vencimiento}</p>
            <p>Código de Seguridad: ***</p>
        `;

        tarjetasContainer.appendChild(nuevaTarjeta);

        form.reset();
    });
});