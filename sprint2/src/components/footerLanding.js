import React from 'react';
import { Link } from 'react-router-dom';

function FooterLanding() {
  return (
    <footer>
      <div id="container-footer">
        <div id="container-politica-empresa">
          <Link>Políticas de privacidad.</Link>
          <br />
          <Link>Términos y Condiciones</Link>
          <br />
          <Link>Contacto</Link>
        </div>
        <div id="redes">
          <p>Encontranos en:</p>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>
      <span id="copy">&copy; 2023 ITBANK. Todos los derechos reservados.</span>
    </footer>
  );
}

export default FooterLanding;