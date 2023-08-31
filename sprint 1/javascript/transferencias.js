document.addEventListener("DOMContentLoaded", function () {
    const botonForm = document.querySelector(".boton-form");
    const containerForm = document.getElementById("container-form");

    botonForm.addEventListener("click", function () {
        containerForm.innerHTML = "";

        const mensaje = document.createElement("p");
        mensaje.textContent = "Transferencia enviada con exito  ";

        const icono = document.createElement("i");
        icono.classList.add("fas", "fa-check-circle", "icon");

        mensaje.appendChild(icono);
        containerForm.appendChild(mensaje);
    });
});