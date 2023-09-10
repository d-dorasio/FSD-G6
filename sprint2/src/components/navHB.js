import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <button className="btn-menu" id="btn-open" onClick={openMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav id="nav" className={isMenuOpen ? "visible" : ""}>
        <div className="container-nav">
          <button className="btn-menu" id="btn-close" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <Link to="/inicio">
            <img
              src=""
              alt="Logo del banco"
              id="logo"
            />
          </Link>
          <ul>
            <li>
              <Link to="/estadoDeCuenta">Estado de cuenta</Link>
            </li>
            <li>
              <Link to="/transferencias">Transferencias</Link>
            </li>
            <li>
              <Link to="/tarjetas">Tarjetas</Link>
            </li>
            <li>
              <Link to="/pagos">Pagos</Link>
            </li>
            <li>
              <Link to="/préstamos">Préstamos</Link>
            </li>
            <li>
              <Link to="/simuladorPlazoFijo">Simulador</Link>
            </li>
            <li>
              <Link to="/convertidorDeMoneda">Convertidor de moneda</Link>
            </li>
            <li>
              <Link to="/movimientos">Mis Movimientos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
