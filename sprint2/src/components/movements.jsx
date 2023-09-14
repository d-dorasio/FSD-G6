import React from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import BasicTable from "./basicTable";


function Movements() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <h1>Movimientos:</h1>
            <p>
              En la siguiente tabla se muestran los movimientos de{" "}
              <strong>este mes</strong>.
              <br />
              Para visualizar movimientos de fechas anteriores, por favor,{" "}
              <strong>solicite un resumen de cuenta</strong>.
            </p>
            <BasicTable />
            <button type="submit" className="btn">
              Solicitar resumen de cuenta
            </button>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Movements;
