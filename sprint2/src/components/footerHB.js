import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import 'font-awesome/css/font-awesome.min.css';



const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));




function Footer() {
  return (
    <footer>
      <Box sx={{ 
        flexGrow: 1 ,
        width: '77.7%',
        height: '120',
        backgroundColor: 'secondary.light',
        position:"absolute", 
        bottom:"auto",
        fontSize:"small",
        justifyContent:"flex-end",
        }}>

        <Grid container spacing={3} style={{ color: '#4d4d4d' }} >
          <Grid item xs >
            <Item><Link to="/privacyPolicy" style={{ color: '#4d4d4d' }}>Políticas de privacidad.</Link>|
            <Link to="/terms&Conditions"style={{ color: '#4d4d4d' }}>Términos y Condiciones</Link>|
            <Link  to="/contact"style={{ color: '#4d4d4d' }}>Contacto</Link></Item>
          </Grid>
        
          <Grid item xs>
            <Item> &copy; 2023 <Link style={{ color: '#4d4d4d' }}> ITBANK </Link>.
            Todos los derechos reservados. </Item>
          </Grid>
        </Grid>
      </Box>

    </footer>
  );
}

export default Footer;

