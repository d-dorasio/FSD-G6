import React, { useEffect } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import BasicTable from "./basicTable";

function Payments() {
  // ...

useEffect(() => {
  const form = document.querySelector('.form-container');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const payment = form.querySelector('[name="paymentMethod"]').value;
    const amountInput = form.querySelector('[name="amount"]');
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount)) {
      alert(`Pago realizado con éxito!\nServicio: ${payment}\nMonto: $${amount.toFixed(2)}`);
      form.reset();
    } else {
      amountInput.focus(); 
    }
  });
}, []);

// ...


  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
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
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Payments;
