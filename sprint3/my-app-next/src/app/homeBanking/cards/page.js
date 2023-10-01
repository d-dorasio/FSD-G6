"use client"

import { useState, useRef } from "react";
import Head from "next/head";
import { Button, Card, CardContent, TextField } from "@mui/material";
import styles from "../page.module.css"

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
    const numeroValor = numeroRef.current.value || "";
    const vencimiento = vencimientoRef.current.value;
    const codigo = codigoRef.current.value;

    const nuevaTarjeta = {
      nombre,
      numero: `**** **** **** ${numeroValor.substring(numeroValor.length - 4)}`,
      vencimiento,
      codigo: "***",
    };

    setCards([...cards, nuevaTarjeta]);
    nombreRef.current.value = "";
    numeroRef.current.value = "";
    vencimientoRef.current.value = "";
    codigoRef.current.value = "";
  };

  return (
    <><Head>
      <meta name="keywords" content="tarjetas, agregar tarjeta" />
      <meta name="description" content="tarjetas registradas en el Itbank"/>
    </Head>
    <section>
      <h1>Mis Tarjetas</h1>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <h3>{card.nombre}</h3>
          <p>Número: {card.numero}</p>
          <p>Vencimiento: {card.vencimiento}</p>
          <p>Código de Seguridad: {card.codigo}</p>
        </div>
      ))}
      <div id="tarjetas-container"></div>
      <br />
      <Card variant="outlined" sx={{ boxShadow: 5 }}>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="form-container"
          >
            <h1>Agregar nueva tarjeta:</h1>

            <TextField
              required
              variant="standard"
              label="Nombre del Titular"
              type="text"
              id="nombre"
              ref={nombreRef}
            />
            <br />
            <TextField
              required
              variant="standard"
              label="Número de la tarjeta"
              type="text"
              id="numero"
              ref={numeroRef}
              maxLength="16"
            />
            <br />
            <TextField
              required
              variant="standard"
              label="Fecha de Vencimiento"
              type="text"
              id="vencimiento"
              ref={vencimientoRef}
            />
            <br />
            <TextField
              required
              variant="standard"
              label="Código de Seguridad"
              type="password"
              id="codigo"
              ref={codigoRef}
              maxLength="3"
            />
            <br />
            <Button variant="contained" type="submit">
              Agregar tarjeta
            </Button>
          </form>
        </CardContent>
      </Card>
    </section></>
  );
}

export default Cards;
