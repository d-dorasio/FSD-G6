import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { zIndex } from "../themes/ThemeRegistry"


function HeaderLanding() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: zIndex }}
    >
      <div className="container-header">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: "5px", paddingTop: "5px" }}>
            <Link href="/landingPage"><img src="/logo.png" height="80px" className="logo-landingpage" alt="Logo"></img></Link>
          </Typography> 
          <div>
            <ul className="ul-LandingPage">
              <li style={{paddingRight: "15px"}}>
                <Link href="/landingPage/aboutUs" >Nosotros</Link>
              </li>
              <li style={{paddingRight: "15px"}}>
                <Link href="/landingPage/services" >Servicios</Link>
              </li>
            </ul>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default HeaderLanding;
