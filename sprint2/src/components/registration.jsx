import React from "react";
import HeaderLanding from "./headerLanding";
import FooterLanding from "./footerLanding";
import { Link } from "react-router-dom";

function RegistrationForm() {
  return (
    <div>
      <HeaderLanding></HeaderLanding>
      <section>
        <form className="form-container" action="" method="post">
          <h1 className="h1-contacto">Registrate:</h1>
          <input
            className="campo-form"
            name="nombre"
            type="text"
            placeholder="Nombre/"
            required
            maxLength="50"
          />
          <input
            className="campo-form"
            name="apellido"
            type="text"
            placeholder="Apellido/s"
            required
            maxLength="50"
          />
          <input
            className="campo-form"
            name="email"
            type="text"
            placeholder="Email"
            maxLength="100"
            required
          />
          <label className="label">Sexo:</label>
          <select name="Sexo" className="tipo">
            <option value="">Seleccionar:</option>
            <option value="Masc">Masculino</option>
            <option value="Fem">Femenino</option>
            <option value="otro">Otro</option>
          </select>
          <label className="label">Tipo de documento</label>
          <select className="tipo" name="Documento">
            <option value="">Seleccionar:</option>
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
            placeholder="Nro de documento"
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
          <input
            className="campo-form"
            name="clave"
            type="password"
            placeholder="Clave digital"
            minLength="8"
            required
          />
          <input type="checkbox" name="condiciones" required /> Aceptar los{" "}
          <Link>
            terminos y condiciones.
          </Link>
          <button className="boton-form" type="submit" value="ingresar">
            <Link to='/inicioSesión'/>Registrarse
          </button>
        </form>
      </section>
      <FooterLanding></FooterLanding>
    </div>
  );
}

export default RegistrationForm;
