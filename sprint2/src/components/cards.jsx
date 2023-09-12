import React from "react";
import NavBar from './navHB'
import Header from './headerHB'
import Footer from "./footerHB";

function Cards() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div style={{ paddingTop: '64px', paddingLeft: '300px' }}>
        <main>
          <section>
            {/* Registered cards */}
            <h1 className="h1-center">Mis Tarjetas</h1>
            <div className="card">
              <h3>NOMBRE APELLIDO</h3>
              <p>Número: **** **** **** 1234</p>
              <p>Vencimiento: 12/23</p>
              <p>Código de Seguridad: ***</p>
            </div>

            <div className="card">
              <h3>APELLIDO NOMBRE</h3>
              <p>Número: **** **** **** 5678</p>
              <p>Vencimiento: 06/24</p>
              <p>Código de Seguridad: ***</p>
            </div>
            <div id="tarjetas-container"></div>
            {/* Add card */}
            <form id="tarjeta-form" className="form-container">
              <h1>Agregar tarjeta adicional:</h1>
              <label htmlFor="nombre">Nombre del Titular:</label>
              <input className="campo-form" type="text" id="nombre" required />

              <label htmlFor="numero">Número de la Tarjeta:</label>
              <input
                className="campo-form"
                type="text"
                id="numero"
                maxLength="16"
                required
              />

              <label htmlFor="vencimiento">Fecha de Vencimiento:</label>
              <input
                className="campo-form"
                type="text"
                id="vencimiento"
                required
              />

              <label htmlFor="codigo">Código de Seguridad:</label>
              <input
                className="campo-form"
                type="password"
                id="codigo"
                maxLength="3"
                required
              />

              <button className="boton-form" type="submit">
                Agregar
              </button>
            </form>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Cards;