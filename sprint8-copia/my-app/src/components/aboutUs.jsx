import React from "react";
import FooterLanding from "./footerLanding";
import HeaderLanding from "./headerLanding";



function AboutUs() {
  return (
    <div >
      <HeaderLanding></HeaderLanding>
      <section className="sectionLandingPage">
        <h1>Somos ITBANK</h1>
        <p>
          Somos más que un banco. Somos miembros de la comunidad que estamos
          orgullosos de utilizar nuestro conocimiento y experiencia para
          apoyarlo en su viaje financiero, ahora y en el futuro.
        </p>

        <h2>Lo que nos impulsa</h2>
        <p>
          Nos esforzamos por hacer de nuestras comunidades mejores lugares para
          vivir y trabajar. Para todo el mundo.
          <br /> Prestamos nuestro tiempo a proyectos locales necesitados y
          participamos en donaciones corporativas y programas de préstamos
          especiales. También apoyamos a organizaciones cuyas causas se alinean
          con las de nuestros empleados y clientes.
          <br /> ITBANK alienta a los miembros de nuestro equipo a ir más allá
          dondequiera que ayudemos.
        </p>

        <h2>Generar un impacto</h2>
        <p>
          Aprovechamos el poder de la banca para crear valor social y ambiental
          para nuestra gente, comunidades y clientes. Creemos en
          responsabilizarnos a nosotros mismos y a los demás y hacer siempre lo
          correcto cuando se trata de nuestras comunidades locales.
        </p>

        <p>
          Somos una institución financiera comprometida con la excelencia en
          servicios bancarios y la satisfacción del cliente. A través de décadas
          de experiencia, hemos construido una reputación sólida como un socio
          confiable para todas tus necesidades financieras.
        </p>

        <h2>Nuestra Misión:</h2>
        <p>
          En ITBANK, nuestra misión es brindar soluciones financieras
          innovadoras y accesibles que enriquezcan la vida de nuestros clientes
          y contribuyan al desarrollo de nuestras comunidades.
        </p>

        <h2>Nuestros valores:</h2>
        <ul>
          <li>
            Integridad: Actuamos con honestidad y transparencia en todo lo que
            hacemos.
          </li>
          <li>
            Excelencia: Buscamos la mejora continua y la calidad en cada aspecto
            de nuestros servicios.
          </li>
          <li>
            Empatía: Escuchamos y comprendemos las necesidades de nuestros
            clientes para brindar soluciones personalizadas.
          </li>
          <li>
            Innovación: Adoptamos la tecnología y las nuevas ideas para ofrecer
            experiencias bancarias modernas y convenientes.
          </li>
        </ul>

        <h2>Nuestros servicios:</h2>
        <ul>
          <li>Cuentas Bancarias</li>
          <li>Préstamos Personales y Hipotecarios</li>
          <li>Tarjetas de Crédito y Débito</li>
          <li>Banca en Línea y Móvil</li>
          <li>Inversiones y Planificación Financiera</li>
        </ul>

        <h2>Compromiso social:</h2>
        <p>
          Creemos en hacer una diferencia en nuestras comunidades. Participamos
          en proyectos de responsabilidad social que abordan desafíos locales y
          fomentan el bienestar.
        </p>

        <h2>Innovación Tecnológica:</h2>
        <p>
          Nos esforzamos por estar a la vanguardia de la tecnología financiera,
          brindando a nuestros clientes experiencias bancarias seguras y sin
          complicaciones a través de nuestras plataformas en línea y móviles.
          <br />
          <br />
          En ITBANK, tu éxito financiero es nuestro objetivo. Nos enorgullece
          ser tu socio confiable en cada paso del camino. Gracias por
          considerarnos como tu banco de elección.
        </p>
      </section>
      <FooterLanding></FooterLanding>
    </div>
  );
}

export default AboutUs;
