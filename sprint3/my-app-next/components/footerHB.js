import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons' 

// import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
      <footer>
        <div id="container-footer">
          <div id="container-politica-empresa">
            <Link href="/homeBanking/privacyPolicy">Políticas de privacidad.</Link>
            <br />
            <Link href="/homeBanking/termsAndConditions">Términos y Condiciones</Link>
            <br />
            <Link href="/homeBanking/contact">Contacto</Link>
          </div>
          <div id="redes">
            <p>Encontranos en:</p>
            <a href="https://www.instagram.com/" target="_blank">ig
              <FontAwesomeIcon icon={faSquareInstagram} size="2xl" style={{color: "#35103d",}} />
            </a>
            <a href="https://www.twitter.com/" target="_blank">x
              <FontAwesomeIcon icon={faSquareTwitter} size="2xl" style={{color: "#35103d",}} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">fb
              <FontAwesomeIcon icon={faSquareFacebook} size="2xl" style={{color: "#35103d",}} />
            </a>
          </div>
        </div>
  
        <p id="copy">&copy; 2023 ITBANK. Todos los derechos reservados.</p>
      </footer>
    );
  }
  
  export default Footer;