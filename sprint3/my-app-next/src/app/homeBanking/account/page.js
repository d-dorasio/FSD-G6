"use client"

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Card, CardContent, TextField } from "@mui/material";
import Cuentas from "./Cuentas";


export default async function Cuenta() {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setProfileImage(selectedImage);
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <><Head>
      <meta name="keywords" content="perfil, datos usuario" />
      <meta name="description" content="datos del usuario del banco" />
    </Head>
      <section>
        <h1>Perfil:</h1>
        <Card sx={{padding: "30px", margin: "20px"}}>
          <CardContent>
            <h2>Apellido, Nombre</h2>
            <h3>Datos:</h3>
            <ul>
              <li>
                Nombre Completo: <span>Apellido, Nombre</span>
              </li>
              <li>
                Email: <span>nombre@mail.com</span>
              </li>
              <li>
                DNI: <span>12.345.678</span>
              </li>
              <li>
                Sexo: <span>Indefinido</span>
              </li>
              <li>
                Edad:{" "}
                <span>
                  <Button variant="contained" size="small">
                    Agregar edad
                  </Button>
                </span>
              </li>
              <li>
                Fecha de nacimiento:{" "}
                <span>
                  <Button variant="contained" size="small">
                    Agregar fecha
                  </Button>
                </span>
              </li>
              <li>
                Estado civil:{" "}
                <span>
                  <Button variant="contained" size="small">
                    Agregar Estado
                  </Button>
                </span>
              </li>
              <li>
                Profesión:{" "}
                <span>
                  <Button variant="contained" size="small">
                    Agregar profesión
                  </Button>
                </span>
              </li>
            </ul>
            <form id="profileForm">
              <label>Subir foto</label>
              <br />
              <TextField
                type="file"
                id="profileImage"
                variant="outlined"
                accept="image/*"
                onChange={handleImageChange}
              />
              <br />
              {imagePreview && (
                <img
                  id="preview"
                  src={imagePreview}
                  alt="Vista previa de la imagen"
                  style={{ maxWidth: "50%" }}
                />
              )}
            </form>
          </CardContent>
        </Card>
          <br />
          <h2>Tus cuentas</h2>
          <Cuentas />
          <Button
            size="large"
            color="secondary"
            variant="outined"
            sx={{ border: 2, borderColor: "secondary.main" }}
          >
            <Link href="/">CERRAR SESIÓN</Link>
          </Button>
      </section>
    </>
  );
}
