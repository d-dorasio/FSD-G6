import Link  from "next/link";

export default function ImagenBanner() {
    return (
        <section id="banner">
            <div className="banner-image" style={{height:'550px', paddingTop: '80px', paddingBottom: '80px', backgroundImage: 'url(/Banco.jpg)', backgroundSize: 'cover' , backgroundPosition: 'bottom',}}>
                <h1 className="h1-banner-image">
                Bienvenidos al Home Banking de ITBANK
                <br />
                Gestiona tus finanzas con facilidad
                </h1>
                <p>
                Accede a tu dinero las 24 horas del día, los 7 días de la semana, desde
                cualquier lugar.
                </p>
                <Link href='/inicioSesión' className="cta-button">Iniciar sesión</Link>
                <Link href='/registro' className="cta-button">Registrarse</Link>
            </div>
        </section>
    );
  }
  
