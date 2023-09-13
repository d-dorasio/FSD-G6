import React from "react";
import { Link } from "react-router-dom";
import HeaderLanding from "./headerLanding";
import FooterLanding from "./footerLanding";
import '@fontsource-variable/montserrat/wght-italic.css';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";


const id = [
  {
    value: 'DNI',
    label: 'DNI',
  },
  {
    value: 'LC',
    label: 'LC',
  },
  {
    value: 'LE',
    label: 'LE',
  },
  {
    value: 'CI',
    label: 'CI',
  },
  {
    value: 'Pasaporte',
    label: 'Pasaporte',
  },
  {
    value: 'RENAPER',
    label: 'RENAPER',
  },
  {
    value: 'Otro',
    label: 'Otro',
  },
];


function SignInForm() {
  return (
    <div>
      <HeaderLanding></HeaderLanding>
      <div>
      <section id="ingreso">
        <form className="form-container" action="" method="post">
          <Box
            component="form"
            sx={{
              margin:"auto",
              textAlign:"center",
              minHeight: '100vh',
              '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >  
            <h1 className="h1-center">Iniciar sesión:</h1>     
            <div>
              <TextField
                id="standard-select"
                select
                helperText="Tipo de documento"
                defaultValue="Dni"
                variant="standard"
              >
                {id.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>        
            </div>

            <div>
              <TextField
                required
                id="standard-required"
                label="Ingrese su documento"
                variant="standard"
              />
            </div>

            <div>
              <TextField
                required
                id="standard-required"
                label="Usuario"
                variant="standard"
              />
            </div>

            <div>
              <TextField
                required
                id="standard-required"
                label="Contraseña"
                type="password"
                variant="standard"
              />
            </div>
          
            <br/>

            <div>
              <Button>
                <Link to='/inicio'>Iniciar sesión </Link>
              </Button>
            </div>

          </Box>   

        </form> 
      </section>
      </div>
      <FooterLanding></FooterLanding>

    </div>
      
  );
}

export default SignInForm;
