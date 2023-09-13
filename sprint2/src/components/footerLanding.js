import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';

function FooterLanding() {
  return (
    <footer>
      <Box sx={{ 
        flexGrow: 1,
        width: '100%',
        height: '90px',
        backgroundColor:'primary.light',
        display:"flex",
        alignItems:"flex-end",
        position:"absolute", 
        bottom:"auto",
        textAlign: 'center',
        }}>

        <div id="container-footer">
          <Grid 
            container spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
              <div id="container-politica-empresa">
                <Grid item xs="auto" md={0} marginLeft={10}>
                  
                  <Typography ><Link  to="/privacyPolicy" style={{ color: '#faebd7' }}>Políticas de privacidad.</Link></Typography>
                  <Typography><Link to="/terms&Conditions" style={{ color: '#faebd7' }}>Términos y Condiciones</Link></Typography>
                  <Typography><Link to="/contact" style={{ color: '#faebd7' }}>Contacto</Link></Typography>
                </Grid>
              </div>
              
              <Grid item xs md={0} marginLeft={40}>
                <Typography fontSize={12} style={{ color: '#faebd7' }}> &copy; 2023 <Link fontSize={12} style={{ color: '#faebd7' }} > ITBANK </Link>. Todos los derechos reservados. </Typography>
              </Grid>

              <div id="redes">
                <Grid item xs="auto" md={0} marginLeft={40}>
                  <Typography fontSize="" style={{ color: '#faebd7' }} >Encontranos en</Typography>
                  <IconButton aria-label='instagram' size='small'>
                  <InstagramIcon  style={{ color: '#faebd7' }}><Link to="https://www.instagram.com/" style={{ color: '#faebd7' }}>Instagram</Link></InstagramIcon>
                  </IconButton>
                  <IconButton aria-label='facebook' size='small' style={{ color: '#faebd7' }}>
                  <FacebookIcon><Link to="https://www.facebook.com/" style={{ color: '#faebd7' }}>Facebook</Link></FacebookIcon>
                  </IconButton>
                  <IconButton aria-label='twitter' size='small' style={{ color: '#faebd7' }}>
                  <TwitterIcon><Link to="https://www.twitter.com/" style={{ color: '#faebd7' }}>Twitter</Link></TwitterIcon>
                  </IconButton>
                </Grid>
              </div>
          </Grid>    
        </div>
      </Box>
    </footer>
  );
}

export default FooterLanding;