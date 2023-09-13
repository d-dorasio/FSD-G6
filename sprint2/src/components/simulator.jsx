import React, { useState } from "react";
import NavBar from './navHB';
import Header from './headerHB';
import Footer from './footerHB';

function Simulator() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("pesos");
  const [monto, setMonto] = useState("");
  const [plazoEjecucion, setPlazoEjecucion] = useState("30");
  const [otroPlazo, setOtroPlazo] = useState("");
  const [intereses, setIntereses] = useState("");
  const [total, setTotal] = useState("");
  const [resultadoVisible, setResultadoVisible] = useState(false);

  const calcularPlazoFijo = () => {
    let tasaInteres = 0.012;

    if (tipoSeleccionado === "pesos") {
      tasaInteres = 0.012;
    } else if (tipoSeleccionado === "dolar") {
      tasaInteres = 0.012;
    }

    const tasaInteresMensual = tasaInteres / 12;
    const diasTotales =
      plazoEjecucion === "Otro"
        ? parseInt(otroPlazo)
        : parseInt(plazoEjecucion);
    const interesesAcumulados = (monto * tasaInteresMensual * diasTotales) / 30;
    const montoTotal = parseFloat(monto) + interesesAcumulados;

    setIntereses(interesesAcumulados.toFixed(2));
    setTotal(montoTotal.toFixed(2));
    setResultadoVisible(true);
  };

  const handlePlazoChange = (e) => {
    const value = e.target.value;
    setPlazoEjecucion(value);

    if (value === "Otro") {
      setOtroPlazo("");
    }
  };

  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div style={{ paddingTop: '64px', paddingLeft: '300px' }}>
        <main>
          <section>
            <h1>Plazo fijo</h1>
            <p>
              Un <em>plazo fijo</em> es un instrumento de ahorro, que consiste
              en un depósito de dinero que podés hacer por un tiempo
              determinado. Concluido ese tiempo, el banco te devuelve el dinero
              que invertiste más los intereses generados.
            </p>
          </section>

          <section>
            <h1>Simulador de plazos</h1>
            <div className="form-container">
              <h2>Plazo fijo:</h2>
              <form action="" method="post">
                <label>
                  <strong>Tipo de plazo fijo:</strong>
                </label>
                <br />
                <input
                  type="radio"
                  id="pesos"
                  name="pfpesos"
                  value="pesos"
                  checked={tipoSeleccionado === "pesos"}
                  onChange={() => setTipoSeleccionado("pesos")}
                />
                <label>Plazo fijo en pesos</label>
                <br />
                <input
                  type="radio"
                  id="dolar"
                  name="pfdolar"
                  value="dolar"
                  checked={tipoSeleccionado === "dolar"}
                  onChange={() => setTipoSeleccionado("dolar")}
                />
                <label>Plazo fijo en dólares</label>
                <br />
                <br />
                <label htmlFor="monto">Monto a invertir:</label>
                <br />
                <input
                  type="number"
                  id="monto"
                  placeholder="Ingrese el monto"
                  min="1000"
                  className="campo-form"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                />
                <br />
                <label>Cantidad de días</label>
                <br />
                <select
                  name="dias"
                  className="tipo"
                  onChange={handlePlazoChange}
                  value={plazoEjecucion}
                >
                  <option value="30">30</option>
                  <option value="60">60</option>
                  <option value="90">90</option>
                  <option value="Otro">Más días</option>
                </select>
                {plazoEjecucion === "Otro" && (
                  <div id="otroPlazo">
                    <label htmlFor="otrodia">
                      Ingrese la cantidad de días:
                    </label>
                    <input
                      type="number"
                      id="otrodia"
                      placeholder="Ingrese la cantidad de días"
                      value={otroPlazo}
                      onChange={(e) => setOtroPlazo(e.target.value)}
                    />
                    <br />
                  </div>
                )}
                <br />
                <br />
                <button
                  id="calcular"
                  className="boton-form"
                  onClick={calcularPlazoFijo}
                >
                  Calcular
                </button>

                {resultadoVisible && (
                  <div id="resultado">
                    <h3>Resultado:</h3>
                    <p>
                      Intereses acumulados:{" "}
                      <span id="intereses">{intereses}</span>
                    </p>
                    <p>
                      Monto total: <span id="total">{total}</span>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </section>

          <section>
            <h2>Tipos de plazo fijo</h2>
            <br />
            <p>
              A la hora de invertir en tu futuro, queremos que cuentes con todas
              las opciones disponibles para elegir; desde un plazo fijo
              tradicional en pesos hasta uno de renta variable o asegurada.
              <br />
              <br />
              Para que decidas cuál es la inversión indicada para vos, te
              ofrecemos diferentes tipos de plazo fijo:
            </p>
            <ul>
              <li>
                <b>Plazo fijo clásico en pesos:</b> El plazo fijo clásico en
                pesos es una alternativa de inversión en la que se pacta el
                plazo y la tasa de interés desde un inicio. Se realiza a través
                del depósito de dinero en el banco por tiempo determinado y, al
                finalizar, se recibe ese monto más un extra en concepto de
                interés.
              </li>
              <li>
                <b>Plazo fijo clásico en dólares:</b> Este plazo fijo te permite
                sumarle rendimiento a tus ahorros en dólares, obteniendo una
                renta para el plazo que elijas, siempre a partir de los 30 días
                de haberlo hecho.
              </li>
              <li>
                <b>Plazo fijo online:</b> Si no sos cliente de ITBANK, también
                podés tener tu plazo fijo, leé los términos y condiciones para
                más información.
              </li>
              <li>
                <b>Plazo fijo inmediato:</b> En un plazo fijo inmediato se
                realiza una inversión a 180 días con un rendimiento fijo pero
                con la posibilidad de cancelarlo en forma anticipada obteniendo
                así liquidez, si fuera necesario. Es posible cancelarlo
                transcurridos 30 días desde su fecha de constitución. En caso de
                cancelación anticipada la tasa a pagar es menor a la pactada
                inicialmente para la totalidad del plazo. Podés invertir con un
                monto mínimo de $5.000.
              </li>
              <li>
                <b>Plazo fijo clásico renta mensual:</b> Esta opción te permite
                recibir por anticipado intereses mensuales antes de su
                vencimiento. El plazo mínimo es de 60 días.
              </li>
              <li>
                <b>Plazo fijo interés variable:</b> Es una inversión de interés
                mixto ya que cuenta con una tasa fija y una tasa variable. La
                variable es la tasa de encuesta a 30 días que publica
                diariamente el Banco Central.
              </li>
              <li>
                <b>Plazo fijo renta asegurada:</b> Este plazo fijo es una
                inversión de interés mixto. Cuenta con dos tasas de interés: una
                tasa fija prepactada y otra variable.
              </li>
            </ul>
            <br />
            <p>
              Podés calcular la cuota de tu plazo fijo online ahora, a través
              del simulador de más arriba.
            </p>
            <h2>¿Qué es el interés en un plazo fijo?</h2>
            <p>
              El interés de un plazo fijo es el porcentaje de ganancia que vas a
              obtener sobre el total del monto invertido. El cálculo del interés
              del plazo fijo va a estar vinculado por el monto, plazo y Tasa
              Nominal Anual (TNA). De esta manera, podés conocer el rendimiento
              de tu plazo fijo con anticipación. Las tasas de interés están hoy
              reguladas por el Banco Central de la República Argentina (BCRA).
            </p>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Simulator;
