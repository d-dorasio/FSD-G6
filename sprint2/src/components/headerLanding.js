import React from "react";
import { Link } from "react-router-dom";


const HeaderLanding = () => {
  return (
    <div>
      <header>
      <Link to='/'>
        <img src="/" alt="Logo del banco" id="logo-banco" />
      </Link>
      <button className="btn-menu" id="btn-open"><i className="fa-solid fa-bars"></i></button>
      <nav id="nav">
        <button className="btn-menu" id="btn-close"><i className="fa-solid fa-xmark"></i></button>
        <ul>
          <li><Link to='/servicios'>Servicios</Link></li>
          <li><Link to='/sobreNosotros'>Nosotros</Link></li>
          <li><Link to='/registro'>Registrarse</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default HeaderLanding;