var boton = document.querySelector(".boton-form");
var resultadoTexto = document.getElementById("resultado-texto");

boton.addEventListener("click", function() {
    var valor = parseInt(document.getElementById("valor").value);
    var resultado;
    var dolar = 350;
    var euro = 380;
    var libra = 440; // Agrega el valor de conversión para la libra

    if (document.getElementById("uno").checked){
        resultado = valor / dolar;
        resultado = parseFloat(resultado);
        resultadoTexto.textContent = "El cambio a Dólares es: $" + resultado.toFixed(3);
    }
    else if (document.getElementById("dos").checked) {
        resultado = valor / euro;
        resultado = parseFloat(resultado);
        resultadoTexto.textContent = "El cambio a Euros es: €" + resultado.toFixed(3);
    }
    else if (document.getElementById("tres").checked) {
        resultado = valor / libra;
        resultado = parseFloat(resultado);
        resultadoTexto.textContent = "El cambio a Libras es: £" + resultado.toFixed(3);
    }
    else {
        resultadoTexto.textContent = "Tienes que completar todos los campos";
    }
});

