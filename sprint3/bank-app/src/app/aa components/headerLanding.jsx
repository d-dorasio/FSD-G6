import React from "react";
import { Link } from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function HeaderLanding() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <div className="container-header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href= "/"><img src="/logo.png" height="80px" className="logo-landingpage"></img></Link>
        </Typography>
        <div>
          <ul className="ul-LandingPage"> 
            <li>
              <Link href="/sobreNosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/servicios">Servicios</Link>
            </li>
            <li>
              <Link href="/registro">Registrarse</Link>
            </li>
          </ul>
        </div>
      </Toolbar>
      </div>
    </AppBar>
  );
}