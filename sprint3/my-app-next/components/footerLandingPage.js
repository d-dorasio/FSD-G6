import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'


function FooterLanding() {
  return (
    <footer>
      <div id="container-footer">
        <div id="container-politica-empresa">
          <Link href="/landingPage/signUp">Políticas de privacidad.</Link>
          <br />
          <Link href="/landingPage/signUp">Términos y Condiciones</Link>
          <br />
          <Link href="/landingPage/signUp">Contacto</Link>
        </div>
        <div id="redes">
          <p>Encontranos en:</p>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareInstagram} style={{ color: "#35103d", height: "30px" }} />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareTwitter} style={{ color: "#35103d", height: "30px" }} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#35103d", height: "30px" }} />
          </a>
        </div>
      </div>
      <span id="copy">&copy; 2023 ITBANK. Todos los derechos reservados.</span>
    </footer>
  );
}

export default FooterLanding;