import React, { useState } from "react";
import NavBar from './navHB'
import Header from './headerHB'
import Footer from "./footerHB";

function Profile() {
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
    <div>
      <NavBar></NavBar>
      <div>
        <Header></Header>
        <main>
          <section>
            <h1>Perfil:</h1>
            <form id="profileForm">
              <label>Subir foto</label>
              <br />
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="btn"
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
              <p>[Nombre de Usuario]</p>
            </form>

            <h3>Datos:</h3>
            <ul>
              <li>
                Nombre Completo: <span>Nombre Apellido</span>
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
                  <button className="btn">Agregar edad</button>
                </span>
              </li>
              <li>
                Fecha de nacimiento:{" "}
                <span>
                  <button className="btn">Agregar fecha</button>
                </span>
              </li>
              <li>
                Estado civil:{" "}
                <span>
                  <button className="btn">Agregar Estado</button>
                </span>
              </li>
              <li>
                Profesión:{" "}
                <span>
                  <button className="btn">Agregar profesión</button>
                </span>
              </li>
              <br />
              <button className="btn">
                <a href="/sprint 1/htmls/index.html">CERRAR SESIÓN</a>
              </button>
            </ul>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Profile;
