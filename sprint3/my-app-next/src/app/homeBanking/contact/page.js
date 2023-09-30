"use client"

import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, Card, CardContent, MenuItem, Select } from "@mui/material";
import { TextField, InputLabel } from "@mui/material";

function ContactForm() {
  const [nombreApellido, setNombreApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNombreApellido("");
    setEmail("");
    setTelefono("");
    setComentario("");
  };

  return (
    <><Head>
      <meta name="keywords" content="contacto" />
      <meta name="description" content="informacion de tus contactos"/>
    </Head>
    <div className="section-form">
      <h1 className="h1-center">Información de contacto</h1>
      <form
        className="form-container"
        onSubmit={handleSubmit}
      >
        <TextField
          variant="standard"
          name="nombre y apellido"
          type="text"
          placeholder="NOMBRE Y APELLIDO"
          value={nombreApellido}
          onChange={(e) => setNombreApellido(e.target.value)}
        />
        <br />
        <TextField
          variant="standard"
          name="email"
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          variant="standard"
          name="telefono"
          type="text"
          placeholder="TELEFONO"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <br />
        <label>
          <TextField
            variant="standard"
            name="comentario"
            type="comment"
            placeholder="COMENTARIO"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </label>
        <Button className="boton-form" type="submit" value="enviar">
          ENVIAR
        </Button>
      </form>
    </div> </>
  );
}

export default ContactForm;