import React from "react";
import NavBar from './navHB'
import Header from './headerHB'
import Footer from "./footerHB";

function Transfers() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Header></Header>
        <main>
          <h1 className="h1-center">Transferencias</h1>
          {/* Transfer form */}
          <div id="container-form">
            <form className="form-container">
              <h2>Formulario de Transferencia</h2>
              <label>Nueva transferencia A:</label>
              <select className="tipo" name="accountFrom">
                <option value="otro">Otro ITBANK</option>
                <option value="cbu">CBU</option>
                <option value="alias">Alias</option>
              </select>

              <label>Cuenta de Destino:</label>
              <input
                type="text"
                className="campo-form"
                name="amount"
                placeholder="Ingrese CBU, Alias o nombreITBANK"
              ></input>

              <label htmlFor="amount">Monto:</label>
              <input
                type="text"
                className="campo-form"
                name="amount"
                placeholder="Ingrese el monto"
              />

              <label htmlFor="description">Descripción o Motivo:</label>
              <input
                type="text"
                className="campo-form"
                name="description"
                placeholder="Ingrese una descripción"
              />

              <label htmlFor="executionDate">Fecha de Ejecución:</label>
              <input type="date" className="campo-form" name="executionDate" />

              <button type="button" className="boton-form">
                Transferir
              </button>
            </form>
          </div>

          <h2>Transferencias realizadas</h2>
          <table
            className="tab-movimientos"
            cellSpacing="1"
            style={{ borderCollapse: "collapse" }}
            width="100%"
            id="transactionTable"
          >
            <tr>
              <th style={{ backgroundColor: "#C2B2B4" }}>Fecha</th>
              <th style={{ backgroundColor: "#C2B2B4" }}>Descripción</th>
              <th style={{ backgroundColor: "#C2B2B4" }} colSpan="2">
                Movimiento
              </th>
            </tr>
            <tr>
              <td>2023-08-28</td>
              <td>Compra en línea</td>
              <td>-$50.00</td>
            </tr>
            <tr>
              <td>2023-08-22</td>
              <td>Devolución de compra</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>2023-08-18</td>
              <td>Retiro de cajero</td>
              <td>-$200.00</td>
            </tr>
            <tr>
              <td>2023-08-15</td>
              <td>Pago de factura</td>
              <td>-$75.00</td>
            </tr>
            <tr>
              <td>2023-08-10</td>
              <td>Transferencia recibida</td>
              <td>$500.00</td>
            </tr>
            <tr>
              <td>2023-08-05</td>
              <td>Compra en tienda</td>
              <td>-$150.00</td>
            </tr>
            <tr>
              <td>2023-08-01</td>
              <td>Depósito de nómina</td>
              <td>$2000.00</td>
            </tr>
          </table>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Transfers;
