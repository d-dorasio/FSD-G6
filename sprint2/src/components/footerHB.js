import React from 'react';
import { Link } from 'react-router-dom';


import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer>
      <div id="container-footer">
        <div id="container-politica-empresa">
          <Link to='/politicasDePrivacidad'>Políticas de privacidad.</Link>
          <br />
          <Link to='/terminos&condiciones'>Términos y Condiciones</Link>
          <br />
          <Link to='/contacto'>Contacto</Link>
        </div>
        <div id="redes">
          <p>Encontranos en:</p>
          <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-square-twitter"></i></a>
          <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
        </div>
      </div>

      <p id="copy">&copy; 2023 ITBANK. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
