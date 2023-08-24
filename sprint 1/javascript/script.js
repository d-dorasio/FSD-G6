function  convertir() {
    var valor = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 750;
    var euro = 380;
    if (document.getElementById("uno").checked){
        resultado = valor / dolar;
        resultado = parseFloat(resultado);
        alert("El cambio a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked) {
        resultado = valor / euro;
        resultado = parseFloat(resultado);
        alert("El cambio a Euros es: €" + resultado.toFixed(2));
    }
    else {
        alert("Tienes que completar todos los campos");
    }
}