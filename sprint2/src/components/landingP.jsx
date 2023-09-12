import HeaderLanding from "./headerLanding";
import Footer from "./footerLanding";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import 'font-awesome/css/font-awesome.min.css';

function Banner() {
  return (
    <section id="banner">
      <div style={{ paddingTop: '80px' }}>
        <h1>
          Bienvenidos al Home Banking de ITBANK
          <br />
          Gestiona tus finanzas con facilidad
        </h1>
        <p>
          Accede a tu dinero las 24 horas del día, los 7 días de la semana, desde
          cualquier lugar.
        </p>
        <Link to='/inicioSesión' className="cta-button">Iniciar sesión</Link>
        <Link to='/registro' className="cta-button">Registrarse</Link>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="feature">
      <i className={icon}></i>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Features() {
  const featuresData = [
    {
      icon: "fa-solid fa-shield-halved",
      title: "Transferencias Seguras",
      description: "Realiza transferencias con total confianza y seguridad.",
    },
    {
      icon: "fa-solid fa-credit-card",
      title: "Pagos en Línea",
      description:
        "Paga tus facturas y realiza compras en línea de forma conveniente.",
    },
    {
      icon: "fa-solid fa-id-card",
      title: "Administración de Cuentas",
      description: "Administra tus cuentas y finanzas personales fácilmente.",
    },
  ];

  return (
    <section id="features">
      {featuresData.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </section>
  );
}

function Home() {
  return (
    <div>
      <HeaderLanding />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Banner />
          <Features />
        </Box>
      <Footer></Footer>
    </div>
  );
}

export default Home;