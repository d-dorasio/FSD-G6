// import Link from "next/link";
// import Head from "next/head";
// import '../../app/globals.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserShield } from '@fortawesome/free-solid-svg-icons'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import { faIdCard } from '@fortawesome/free-solid-svg-icons'

// function Feature({ icon, title, description }) {
//   return (
//     <div className={styles.feature}>
//       <i className={icon}></i>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// function Feature({ icon, title, description }) {
//   return (
//     <div className="feature">
//       <i className={icon}></i>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// function Features() {
//   const featuresData = [
//     {
//       icon: <FontAwesomeIcon icon={faUserShield} />,
//       title: "Transferencias Seguras",
//       description: "Realiza transferencias con total confianza y seguridad.",
//     },
//     {
//       icon: <FontAwesomeIcon icon={faCartPlus} />,
//       title: "Pagos en Línea",
//       description:
//         "Paga tus facturas y realiza compras en línea de forma conveniente.",
//     },
//     {
//       icon: <FontAwesomeIcon icon={faIdCard} />,
//       title: "Administración de Cuentas",
//       description: "Administra tus cuentas y finanzas personales fácilmente.",
//     },
//   ];

//   return (
//     <section id="features">
//       {featuresData.map((feature, index) => (
//         <Feature key={index} {...feature} />
//       ))}
//     </section>
//   );
// }

// export default function LandingPage() {
//   return (
//     <><Head>
//     <meta name="keywords" content="pagina principal" />
//     <meta name="description" content="bienvenidos a la pagina principal del Itbank"/>
//   </Head>
//     <div>
//       <section id="banner">
//         <div
//           className="banner-image" alt="banner" style={{height:'550px', paddingTop: '80px', paddingBottom: '80px', backgroundImage: 'url(/Banco.jpg)', backgroundSize: 'cover' , backgroundPosition: 'bottom',}}
//         >
//           <h1 className="h1-banner-image">
//             Bienvenidos al Home Banking de ITBANK
//             <br />
//             Gestiona tus finanzas con facilidad
//           </h1>
//           <p>
//             Accede a tu dinero las 24 horas del día, los 7 días de la semana,
//             desde cualquier lugar.
//           </p>
//           <Link href="/landingPage/signUp" className="cta-button">
//             Iniciar sesión
//           </Link>
//         </div>
//         <Features />
//       </section>
//     </div></>
//   );
// }
