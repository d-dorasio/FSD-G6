import React from "react";
import NavBar from './navHB';
import Header from './headerHB';
import Footer from './footerHB';
import BasicTable from "./basicTable";

function Transfers() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div style={{ paddingTop: '64px', paddingLeft: '300px' }}>
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
          <BasicTable />
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Transfers;
