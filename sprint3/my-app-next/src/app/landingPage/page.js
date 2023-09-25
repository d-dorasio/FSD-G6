import Link from "next/link";

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
      // icon: <FontAwesomeIcon icon={faUserShield} />,
      title: "Transferencias Seguras",
      description: "Realiza transferencias con total confianza y seguridad.",
    },
    {
      // icon: <FontAwesomeIcon icon={faCartPlus} />,
      title: "Pagos en Línea",
      description:
        "Paga tus facturas y realiza compras en línea de forma conveniente.",
    },
    {
      // icon: <FontAwesomeIcon icon={faIdCard} />,
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

export default function LandingPage() {
  return (
    <div>
      <section id="banner">
        <div
          className="banner-image" /* style={{height:'550px', paddingTop: '80px', paddingBottom: '80px', backgroundImage: 'url(/Banco.jpg)', backgroundSize: 'cover' , backgroundPosition: 'bottom',}} */
        >
          <h1 className="h1-banner-image">
            Bienvenidos al Home Banking de ITBANK
            <br />
            Gestiona tus finanzas con facilidad
          </h1>
          <p>
            Accede a tu dinero las 24 horas del día, los 7 días de la semana,
            desde cualquier lugar.
          </p>
          <Link href="/landingPage/signUp" className="cta-button">
            Iniciar sesión
          </Link>
          <Link href="/landingPage/register" className="cta-button">
            Registrarse
          </Link>
        </div>
        <Features />
      </section>
    </div>
  );
}
