"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import '@fontsource-variable/montserrat/wght-italic.css';
import { Button, Card, CardContent, MenuItem, Select } from "@mui/material";
import { TextField, InputLabel } from "@mui/material";

export default function signUp() {
  return (
    <><Head>
    <meta name="keywords" content="ingreso, formulario" />
    <meta name="description" content="formulario de ingreso del banco"/>
  </Head>
    <section id="ingreso" className="sectionLandingPage">
      <div>
        <Card variant="outlined" sx={{ borderColor: 'primary.main',border: 2 }}>
          <CardContent>
        <form className="form-container" action="" method="post">
          <h1 className="h1-center">Iniciar sesión:</h1>
          <br />
          <InputLabel id="tipo-doc-label">Tipo de documento</InputLabel>
              <Select
                id="tipo-doc-label"
                required
                variant="standard" 
                name="Documento">
                <MenuItem value="DNI">DNI</MenuItem>
                <MenuItem value="LC">LC</MenuItem>
                <MenuItem value="LE">LE</MenuItem>
                <MenuItem value="CI">CI</MenuItem>
                <MenuItem value="Pasaporte">Pasaporte</MenuItem>
                <MenuItem value="RENAPER">RENAPER</MenuItem>
                <MenuItem value="Otro">Otro</MenuItem>
              </Select>
              <br/><br/>
              <TextField
                variant="standard"
                className="campo-form"
                name="numero de documento"
                type="text"
                placeholder="Número de documento"
                required
              />
              <br/><br/>
              <TextField
                variant="standard"
                className="campo-form"
                name="usuario"
                type="text"
                placeholder="Usuario"
                maxLength="45"
                required
              />
              <br/><br/>
              
              <TextField
                variant="standard"
                name="clave"
                type="password"
                placeholder="Clave digital"
                minLength="8"
                required
              />
              <br/>
              <Button variant="outlined" color="secondary" sx={{border: 2}}>
          <Link href="/homeBanking">Iniciar sesión </Link>
          </Button>
        </form>
        </CardContent>
      </Card>
      </div>
    </section></>
  );
}
