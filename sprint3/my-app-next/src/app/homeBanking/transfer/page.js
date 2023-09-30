"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import BasicTable from "../basicTable/page";
import { Button, Card, CardContent, InputLabel, MenuItem, Select, TextField } from "@mui/material";


export default function transfer() {
  const [mensajeVisible, setMensajeVisible] = useState(false);
  const [formularioVisible, setFormularioVisible] = useState(true);

  useEffect(() => {
    const botonForm = document.querySelector(".boton-form");

    botonForm.addEventListener("click", function () {
      setFormularioVisible(false);

      // Mostrar el mensaje y luego ocultarlo después de 3 segundos
      setMensajeVisible(true);
      setTimeout(() => {
        setMensajeVisible(false);
        setFormularioVisible(true);
      }, 3000);
    });
  }, []);

  return (
    <><Head>
      <meta name="keywords" content="transferencias" />
      <meta name="description" content="formulario de transferencia"/>
    </Head>
    <div>
      <h1 className="h1-center">Transferencias</h1>
      <br />

      <div id="container-form">
        {formularioVisible && (
          <Card sx={{ boxShadow: 5 }}>
            <CardContent>
              <form className="form-container">
                <h2>Formulario de Transferencia</h2>
                <InputLabel>Nueva transferencia a:</InputLabel>
                <Select required name="accountFrom" variant="standard">
                  <MenuItem value="otro">Otro ITBANK</MenuItem>
                  <MenuItem value="cbu">CBU</MenuItem>
                  <MenuItem value="alias">Alias</MenuItem>
                </Select>
                <br />
                <TextField
                  required
                  label="Cuenta de destino"
                  type="text"
                  variant="standard"
                  name="amount"
                  placeholder="Ingrese CBU, Alias o nombreITBANK"
                />
                <br />
                <TextField
                  required
                  type="text"
                  label="Monto"
                  className="campo-form"
                  name="amount"
                  variant="standard"
                  placeholder="Ingrese el monto"
                />
                <br />
                <TextField
                  required
                  type="text"
                  className="campo-form"
                  name="description"
                  label="Referencia"
                  placeholder="Ingrese una descripción de referencia"
                  variant="standard"
                />
                <br />
                <Button type="button" className="boton-form" variant="contained">
                  Transferir
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {mensajeVisible && (
          <p>
            Transferencia enviada con éxito &#10004;
          </p>
        )}
      </div>

      <h2>Transferencias realizadas</h2>
      <BasicTable /> 
    </div></>
  );
}
