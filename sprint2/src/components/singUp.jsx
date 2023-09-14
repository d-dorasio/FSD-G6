import React from "react";
import { Link } from "react-router-dom";
import HeaderLanding from "./headerLanding";
import FooterLanding from "./footerLanding";
import '@fontsource-variable/montserrat/wght-italic.css';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

function SingUpForm() {
  return (
    <div>
      <HeaderLanding></HeaderLanding>
      <section id="ingreso" className="sectionLandingPage">
        <div>
          <form className="form-container" action="" method="post">
            <h1 className="h1-center">Iniciar sesión:</h1>
            <label>Tipo de documento</label>
            <select className="tipo" name="Documento" required>
              <option value="DNI">DNI</option>
              <option value="LC">LC</option>
              <option value="LE">LE</option>
              <option value="CI">CI</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="RENAPER">RENAPER</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              className="campo-form"
              name="numero de documento"
              type="text"
              placeholder="Número de documento"
              required
            />
            <input
              className="campo-form"
              name="usuario"
              type="text"
              placeholder="Usuario"
              maxLength="45"
              required
            />
            {/* <TextField id="standard-basic" label="Standard" variant="standard"></TextField> */}
            <input
              className="campo-form"
              name="clave"
              type="password"
              placeholder="Clave digital"
              minLength="8"
              required
            />
            <button className="boton-form">
              <Link to='/inicio'>Iniciar sesión </Link>
            </button>
          </form>
        </div>
      </section>
      <FooterLanding></FooterLanding>
    </div>
  );
}

export default SingUpForm;
