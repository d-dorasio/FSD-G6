import React from "react";
import NavBar from './navHB'
import Header from './headerHB'
import Footer from "./footerHB";
import BasicTable from "./basicTable";

function Payments() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div style={{ paddingTop: '64px', paddingLeft: '300px' }}>
        <main>
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
                <BasicTable />
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
