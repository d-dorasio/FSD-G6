const pesosRadio = document.getElementById('pesos');
const dolarRadio = document.getElementById('dolar');
const montoInput = document.getElementById('monto');
const diasSelect = document.querySelector('select[name="dias"]');
const otroPlazoContainer = document.getElementById('otroPlazo');
const otroDiaInput = document.getElementById('otrodia');
const calcularButton = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');
const interesesOutput = document.getElementById('intereses');
const totalOutput = document.getElementById('total');

diasSelect.addEventListener('change', () => {
    if (diasSelect.value === 'Otro') {
        otroPlazoContainer.style.display = 'block';
    } else {
        otroPlazoContainer.style.display = 'none';
    }
});


calcularButton.addEventListener('click', (event) => {
    event.preventDefault();

    const monto = parseFloat(montoInput.value);
    const dias = diasSelect.value === 'Otro' ? parseInt(otroDiaInput.value) : parseInt(diasSelect.value);

    let tasa = 0.0;
    if (pesosRadio.checked) {
        tasa = 1.18; 
    } else if (dolarRadio.checked) {
        tasa = 0.0015; 
        }

    const intereses = monto * (tasa * dias / 365);
    const total = monto + intereses;

    interesesOutput.textContent = intereses.toFixed(2);
    totalOutput.textContent = total.toFixed(2);
    resultadoDiv.style.display = 'block';
});

