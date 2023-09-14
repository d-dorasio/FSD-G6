import React, { useState, useRef } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";

function Cards() {
  const [cards, setCards] = useState([
    {
      nombre: "NOMBRE APELLIDO",
      numero: "**** **** **** 1234",
      vencimiento: "12/23",
      codigo: "***",
    },
    {
      nombre: "APELLIDO NOMBRE",
      numero: "**** **** **** 5678",
      vencimiento: "06/24",
      codigo: "***",
    },
  ]);

  const nombreRef = useRef(null);
  const numeroRef = useRef(null);
  const vencimientoRef = useRef(null);
  const codigoRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombre = nombreRef.current.value;
    const numero = numeroRef.current.value;
    const vencimiento = vencimientoRef.current.value;
    const codigo = codigoRef.current.value;

    const nuevaTarjeta = {
      nombre,
      numero: `**** **** **** ${numero.substring(numero.length - 4)}`,
      vencimiento,
      codigo: "***",
    };

    setCards([...cards, nuevaTarjeta]);

    // Limpiar el formulario
    nombreRef.current.value = "";
    numeroRef.current.value = "";
    vencimientoRef.current.value = "";
    codigoRef.current.value = "";
  };

  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section>
              <h1 className="h1-center">Mis Tarjetas</h1>
              {cards.map((card, index) => (
                <div key={index} className="card">
                  <h3>{card.nombre}</h3>
                  <p>Número: {card.numero}</p>
                  <p>Vencimiento: {card.vencimiento}</p>
                  <p>Código de Seguridad: {card.codigo}</p>
                </div>
              ))}
              <div id="tarjetas-container"></div>
              {/* Add card */}
              <form onSubmit={handleSubmit} className="form-container">
                <h1>Agregar tarjeta adicional:</h1>
                <label htmlFor="nombre">Nombre del Titular:</label>
                <input
                  className="campo-form"
                  type="text"
                  id="nombre"
                  ref={nombreRef}
                  required
                />

                <label htmlFor="numero">Número de la Tarjeta:</label>
                <input
                  className="campo-form"
                  type="text"
                  id="numero"
                  ref={numeroRef}
                  maxLength="16"
                  required
                />

                <label htmlFor="vencimiento">Fecha de Vencimiento:</label>
                <input
                  className="campo-form"
                  type="text"
                  id="vencimiento"
                  ref={vencimientoRef}
                  required
                />

                <label htmlFor="codigo">Código de Seguridad:</label>
                <input
                  className="campo-form"
                  type="password"
                  id="codigo"
                  ref={codigoRef}
                  maxLength="3"
                  required
                />

                <button className="boton-form" type="submit">
                  Agregar
                </button>
              </form>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Cards;
