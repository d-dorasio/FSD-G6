// var boton = document.querySelector(".boton-form");
// var resultadoTexto = document.getElementById("resultado-texto");

// boton.addEventListener("click", function() {
//     var valor = parseInt(document.getElementById("valor").value);
//     var resultado;
//     var dolar = 350;
//     var euro = 380;
//     var libra = 440; // Agrega el valor de conversión para la libra

//     if (document.getElementById("uno").checked){
//         resultado = valor / dolar;
//         resultado = parseFloat(resultado);
//         resultadoTexto.textContent = "El cambio a Dólares es: $" + resultado.toFixed(3);
//     }
//     else if (document.getElementById("dos").checked) {
//         resultado = valor / euro;
//         resultado = parseFloat(resultado);
//         resultadoTexto.textContent = "El cambio a Euros es: €" + resultado.toFixed(3);
//     }
//     else if (document.getElementById("tres").checked) {
//         resultado = valor / libra;
//         resultado = parseFloat(resultado);
//         resultadoTexto.textContent = "El cambio a Libras es: £" + resultado.toFixed(3);
//     }
//     else {
//         resultadoTexto.textContent = "Tienes que completar todos los campos";
//     }
// });

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// Fetch Exchange Rate and Update the DOM
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
}

//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();