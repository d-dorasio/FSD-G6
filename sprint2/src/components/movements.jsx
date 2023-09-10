import React from "react";
import NavBar from './navHB'
import Header from './headerHB'
import Footer from "./footerHB";

function Movements() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Header></Header>
        <main>
          <h1>Movimientos:</h1>
          <p>
            En la siguiente tabla se muestran los movimientos de{" "}
            <strong>este mes</strong>.
            <br />
            Para visualizar movimientos de fechas anteriores, por favor,{" "}
            <strong>solicite un resumen de cuenta</strong>.
          </p>
          <table
            className="tab-movimientos"
            cellSpacing="1"
            style={{ borderCollapse: "collapse" }}
            width="100%"
          >
            <thead>
              <tr>
                <th style={{ backgroundColor: "#C2B2B4" }}>Fecha:</th>
                <th style={{ backgroundColor: "#C2B2B4" }}>Descripción:</th>
                <th style={{ backgroundColor: "#C2B2B4" }} colSpan="2">
                  Movimiento:
                </th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
          <button type="submit" className="btn">
            Solicitar resumen de cuenta
          </button>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Movements;
