import React from "react";
import NavBar from './navHB'
import Header from './headerHB'
import Footer from "./footerHB";

function Payments() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <main>
          <Header></Header>
          <section>
            <h1 className="h1-center">Pagos</h1>
            <div className="anotherContainer">
              <div id="container-form">
                <h2>Realizar Pago</h2>
                <form className="form-container">
                  <label htmlFor="payment">Pago a realizar:</label>
                  <select className="tipo" name="paymentMethod" required>
                    <option value="gas">Gas</option>
                    <option value="luz">Luz</option>
                    <option value="agua">Agua</option>
                    <option value="expensas">Expensas</option>
                  </select>
                  <br />
                  <label htmlFor="amount">Monto:</label>
                  <input
                    type="number"
                    className="campo-form"
                    name="amount"
                    step="0.01"
                    required
                  />
                  <br />
                  <label htmlFor="paymentMethod">Método de Pago:</label>
                  <select className="tipo" name="paymentMethod" required>
                    <option value="debito">Débito</option>
                    <option value="credito">Crédito</option>
                    <option value="transferencia">Transferencia</option>
                  </select>
                  <br />
                  <button type="submit" className="boton-form">
                    Realizar Pago
                  </button>
                </form>
              </div>
              <div>
                <h2>Pagos realizados</h2>
                <table
                  className="tab-movimientos"
                  cellSpacing="1"
                  style={{ borderCollapse: "collapse" }}
                  width="100%"
                  id="transactionTable"
                >
                  <tr>
                    <th style={{ backgroundColor: "#C2B2B4" }}>Fecha:</th>
                    <th style={{ backgroundColor: "#C2B2B4" }}>
                      Pago realizado:
                    </th>
                    <th style={{ backgroundColor: "#C2B2B4" }} colSpan="2">
                      Monto:
                    </th>
                  </tr>
                  <tr>
                    <td>2023-08-28</td>
                    <td>Agua</td>
                    <td>$50.00</td>
                  </tr>
                  <tr>
                    <td>2023-08-22</td>
                    <td>Luz</td>
                    <td>$30.00</td>
                  </tr>
                  <tr>
                    <td>2023-08-18</td>
                    <td>Gas</td>
                    <td>$20.00</td>
                  </tr>
                  <tr>
                    <td>2023-07-10</td>
                    <td>Expensas</td>
                    <td>$50.00</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Payments;
