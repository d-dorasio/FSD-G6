import React from "react";
import NavBar from './navHB'
import Header from './headerHB'
import Footer from "./footerHB";

function AccountStatus() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
<Header></Header>
        <main>
          {/* Current balance */}
          <h1>Estado de cuenta</h1>
          <p>
            Desde el panel de control, podés administrar tus finanzas de manera
            sencilla y segura.
          </p>
          <div className="card">
            <h2>Saldo Actual</h2>
            <p>Saldo: $1,234.56</p>
            <p>Nuevo Cobro: 03/09/23</p>
          </div>

          <div className="card">
            <h2>Comparación de Balances</h2>
            <canvas id="barChart" className="chart"></canvas>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default AccountStatus;
