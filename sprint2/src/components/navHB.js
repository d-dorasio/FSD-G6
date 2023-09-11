import * as react from "react";
import { Link } from "react-router-dom";
// import styles from "../css/navBar.css"



// function Navbar() {
//   return (
//     <div className="nav">
//       <div className="container-nav">
//         <ul style={{listStyleType:"none"}}>
//           <li>
//             <Button>
//               <Link to="/estadoDeCuenta">Estado de cuenta</Link>
//             </Button>
//           </li>
//           <li>
//             <Button>
//               <Link to="/transferencias">Transferencias</Link>
//             </Button>
//           </li>
//           <li>  
//             <Button>
//               <Link to="/tarjetas">Tarjetas</Link>
//             </Button>
//           </li>
//           <li>
//             <Button>
//               <Link to="/pagos">Pagos</Link>
//             </Button>
//           </li>
//           <li>
//             <Button>
//               <Link to="/préstamos">Préstamos</Link>
//             </Button>
//           </li>
//           <li>
//             <Button>
//               <Link to="/simuladorPlazoFijo">Simulador</Link>
//             </Button>
//           </li>
//           <li>
//             <Button>
//               <Link to="/convertidorDeMoneda">Convertidor de moneda</Link>
//             </Button>
//           </li>
//           <li>
//             <Button>
//               <Link to="/movimientos">Mis Movimientos</Link>
//             </Button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// -----------------------

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";


const drawerWidth = 240;

export default function NavBar() {
  return (
    <Box textAlign='left' sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
         <ul style={{listStyleType:"none"}}>
           <li>
             <Button>
               <Link to="/estadoDeCuenta">Estado de cuenta</Link>
             </Button>
           </li>
           <li>
             <Button>
               <Link to="/transferencias">Transferencias</Link>
             </Button>
           </li>
           <li>  
             <Button>
               <Link to="/tarjetas">Tarjetas</Link>
             </Button>
           </li>
           <li>
             <Button>
               <Link to="/pagos">Pagos</Link>
             </Button>
           </li>
           <li>
             <Button>
               <Link to="/préstamos">Préstamos</Link>
             </Button>
           </li>
           <li>
            <Button>
               <Link to="/simuladorPlazoFijo">Simulador</Link>
             </Button>
           </li>
           <li>
             <Button>
               <Link to="/convertidorDeMoneda">Convertidor de moneda</Link>
             </Button>
           </li>
           <li>
             <Button>
               <Link to="/movimientos">Mis Movimientos</Link>
             </Button>
           </li>
         </ul>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      </Box>
    </Box>
  );
}
