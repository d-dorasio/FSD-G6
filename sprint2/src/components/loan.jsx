import React, { useState } from "react";
import NavBar from './navHB';
import Header from './headerHB';
import Footer from './footerHB';

function Loans() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("publica");
  const [monto, setMonto] = useState("");
  const [plazoEjecucion, setPlazoEjecucion] = useState("");
  const [cuotas, setCuotas] = useState([]);

  const calcularPrestamo = () => {
    let tasaInteres = 0.012;

    if (tipoSeleccionado === "publica") {
      tasaInteres = 0.012;
    } else if (tipoSeleccionado === "privado") {
      tasaInteres = 0.012;
    } else if (tipoSeleccionado === "IPS") {
      tasaInteres = 0.0115;
    } else if (tipoSeleccionado === "ANSES") {
      tasaInteres = 0.0115;
    }

    const tasaInteresMensual = tasaInteres / 12;
    const mesesTotales = parseInt(plazoEjecucion);
    const datosTabla = [];
    let saldoRestante = parseFloat(monto);

    for (let mes = 1; mes <= mesesTotales; mes++) {
      const pagoInteres = saldoRestante * tasaInteresMensual * 100;
      const pagoPrincipal =
        (monto * tasaInteresMensual) /
        (1 - Math.pow(1 + tasaInteresMensual, -mesesTotales));
      const pagoMensual = pagoInteres + pagoPrincipal;

      saldoRestante -= pagoPrincipal;

      datosTabla.push([
        mes,
        saldoRestante,
        pagoPrincipal,
        pagoInteres,
        pagoMensual,
      ]);

      if (saldoRestante <= 0) {
        break;
      }
    }

    setCuotas(datosTabla);
  };

  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div style={{ paddingTop: '64px', paddingLeft: '300px' }}>
        <main>
          <section>
            <h1>Préstamos</h1>
            <h2>Préstamos Hipotecarios:</h2>
            <p>
              Los préstamos hipotecarios se utilizan para comprar una vivienda.
              La propiedad se utiliza como garantía del préstamo. Los términos,
              tasas de interés y plazos pueden variar.
            </p>
            <h2>Préstamos Automotores:</h2>
            <p>
              Estos préstamos están diseñados para financiar la compra de
              vehículos, ya sean automóviles nuevos o usados. El vehículo suele
              servir como garantía.
            </p>
            <h2>Préstamos con Tasa Fija o Variable:</h2>
            <p>
              Los préstamos pueden tener tasas de interés fijas (que no cambian)
              o variables (que se ajustan según las tasas de mercado).
            </p>
            <h2>Préstamos a Corto Plazo:</h2>
            <p>
              Estos préstamos son de menor monto y se pagan en un período corto,
              a menudo en unos pocos meses.
            </p>
            <h2>Préstamos a Largo Plazo:</h2>
            <p>
              Los préstamos a largo plazo tienen plazos más largos, a menudo
              varios años, y son adecuados para financiar proyectos más grandes.
            </p>
          </section>
          <section>
            <h1 className="h1-center">Simulador de préstamos</h1>
            <div className="container-form">
              <form className="form-container">
                <label>Sector de Pertenencia</label>
                <select
                  className="tipo"
                  name=""
                  onChange={(e) => setTipoSeleccionado(e.target.value)}
                >
                  <option value="publica">Administración Pública</option>
                  <option value="privado">Sector privado</option>
                  <option value="IPS">IPS</option>
                  <option value="ANSES">ANSES</option>
                </select>

                <label htmlFor="amount">Monto:</label>
                <input
                  type="text"
                  className="campo-form"
                  name="amount"
                  placeholder="Ingrese el monto"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                />

                <label htmlFor="months">Plazo en meses:</label>
                <input
                  type="number"
                  className="campo-form"
                  name="months"
                  placeholder="Ingrese los meses"
                  value={plazoEjecucion}
                  onChange={(e) => setPlazoEjecucion(e.target.value)}
                />

                <button
                  type="button"
                  className="boton-form"
                  onClick={calcularPrestamo}
                >
                  Calcular
                </button>
              </form>
              <table
                cellSpacing="1"
                style={{ borderCollapse: "collapse" }}
                width="100%"
                id="transactionTable"
                className="table tab-movimientos"
              >
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#C2B2B4" }}>Cuota</th>
                    <th style={{ backgroundColor: "#C2B2B4" }}>Saldo</th>
                    <th style={{ backgroundColor: "#C2B2B4" }}>Amortización</th>
                    <th style={{ backgroundColor: "#C2B2B4" }}>Interés</th>
                    <th style={{ backgroundColor: "#C2B2B4" }}>
                      Cuota sin I.V.A.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cuotas.map((cuota, index) => (
                    <tr key={index}>
                      {cuota.map((valorCelda, indexCelda) => (
                        <td key={indexCelda}>{valorCelda.toFixed(2)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Loans;
