import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <Box textAlign='center' sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(245, 228, 255, 0.8)",
            width : "250px",
            paddingTop : "25px"
          }
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
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, p: 3,
          }}>

      </Box>
    </Box>
  );
}

