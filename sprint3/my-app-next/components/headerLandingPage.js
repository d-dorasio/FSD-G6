import Link from "next/link";

function HeaderLanding() {
    return (
    //   <AppBar
    //     position="fixed"
    //     sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    //   >
        <div className="container-header">
        {/* <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
          <Link href="/landingPage"><img src="/logo.png" height="80px" className="logo-landingpage"></img></Link>
          {/* </Typography>  */}
          <div>
             <ul>
              <li>
                <Link href="/landingPage/aboutUs" >Nosotros</Link>
              </li>
              <li>
              <Link href="/landingPage/services" >Servicios</Link>
              </li>
              <li>
                <Link href="/landingPage/register" >Registrarse</Link>
              </li>
            </ul>
          </div>
        {/* </Toolbar> */}
        </div>
    //   </AppBar>
    );
  }
  
export default HeaderLanding;