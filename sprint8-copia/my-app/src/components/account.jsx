import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import axios from 'axios'
import { useEffect, useState } from 'react'

const baseUrl = 'http://127.0.0.1:8000/api/clients/1'

function Profile() {
  // const [profileImage, setProfileImage] = useState(null);
  // const [imagePreview, setImagePreview] = useState(null);

  // const handleImageChange = (event) => {
  //   const selectedImage = event.target.files[0];

  //   if (selectedImage) {
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       setProfileImage(selectedImage);
  //       setImagePreview(e.target.result);
  //     };

  //     reader.readAsDataURL(selectedImage);
  //   }
  // };
  const [cliente, setCliente]= useState(null)

  useEffect(()=>{
    axios.get(baseUrl).then((response)=>{
      setCliente(response.data)
    })
  },[])

  return (
    cliente ?
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section>
              <h1>Perfil:</h1>
              <form id="profileForm">
                {/* <label>Subir foto</label>
                <br /> */}
                {/* <TextField
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
                )} */}
                <h2>{cliente.apellido}, {cliente.nombre}</h2>
              </form>

              <h3>Datos:</h3>
              <ul>
                <li>
                  Nombre Completo: <span>{cliente.apellido}, {cliente.nombre}</span>
                </li>
                {/* <li>
                  Email: <span>no hay</span>
                </li> */}
                <li>
                  DNI: <span>{cliente.dni}</span>
                </li>
                {/*<li>
                  Sexo: <span>Indefinido</span>
                </li>
                 <li>
                  Edad:{" "}
                  <span>
                    <Button variant="contained" size="small">Agregar edad</Button>
                  </span>
                </li> */}
                <li>
                  Fecha de nacimiento:{" "}
                  <span>
                  {cliente.fecha_nacimiento}
                  </span>
                </li>
                {/* <li>
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
                </li> */}
                <br />
                <Button 
                  size="large" 
                  color="secondary" 
                  variant="outined"
                  sx={{ border: 2, borderColor: 'secondary.main' }}>
                  <Link to="/">CERRAR SESIÓN</Link>
                </Button>
              </ul>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>: <>Nada que mostrar (tenes que runear el back)</>
  );
}

export default Profile;