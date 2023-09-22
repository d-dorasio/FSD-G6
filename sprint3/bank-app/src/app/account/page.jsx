import React, { useState } from "react";
import NavBar from "../aa components/navHB";
import Header from "../aa components/headerHB";
import Footer from "../aa components/footerHB";
import  Link  from "next/link";
import { Button, TextField } from "@mui/material";



export default function Profile() {
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
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section>
              <h1>Perfil:</h1>
              <form id="profileForm">
                <label>Subir foto</label>
                <br />
                <TextField
                  type="file"
                  id="profileImage"
                  variant="outlined"
                  accept="image/*"
                  onChange={handleImageChange}                />
                <br />
                {imagePreview && (
                  <img
                    id="preview"
                    src={imagePreview}
                    alt="Vista previa de la imagen"
                    style={{ maxWidth: "50%" }}
                  />
                )}
                <h2>Apellido, Nombre</h2>
              </form>

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
                    <Button variant="contained" size="small">Agregar edad</Button>
                  </span>
                </li>
                <li>
                  Fecha de nacimiento:{" "}
                  <span>
                    <Button variant="contained" size="small">Agregar fecha</Button>
                  </span>
                </li>
                <li>
                  Estado civil:{" "}
                  <span>
                    <Button variant="contained" size="small">Agregar Estado</Button>
                  </span>
                </li>
                <li>
                  Profesión:{" "}
                  <span>
                    <Button variant="contained" size="small">Agregar profesión</Button>
                  </span>
                </li>
                <br />
                <Button 
                  size="large" 
                  color="secondary" 
                  variant="outined"
                  sx={{ border: 2, borderColor: 'secondary.main' }}>
                  <Link href="/">CERRAR SESIÓN</Link>
                </Button>
              </ul>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
