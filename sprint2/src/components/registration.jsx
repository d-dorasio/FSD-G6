import React from "react";
import HeaderLanding from "./headerLanding";
import FooterLanding from './footerLanding';
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";


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

const gender = [
  {
    value: 'Fem',
    label: 'Femenino',
  },
  {
    value: 'Masc',
    label: 'Masculino',
  },
  {
    value: 'Otro',
    label: 'Otro',
  },
];




function RegistrationForm() {
  return (
    <div>
      <HeaderLanding></HeaderLanding>
      <section>
        <form className="form-container" action="" method="post">
        <Box
          component="form"
          sx={{
            margin:"auto",
            display:"table-row",
            justifyContent:"center",
            alignItems:"center",
            minHeight: '100vh',
            '& .MuiTextField-root': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete="off"
        >  
   
          <h1 className="h1-contacto">Registrate:</h1>
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
            <TextField
              required
              id="standard-required"
              label="Email"
              variant="standard"
            />

          </div>

         <div>
            <TextField
              required
              id="standard-required"
              label="Nombre/s"
              variant="standard"
            />

            <TextField
              required
              id="standard-required"
              label="Apellido/s"
              variant="standard"
            />
          </div>

          <br/>

          <div>
            <TextField
              id="standard-select"
              select
              helperText="Sexo"
              variant="standard"
            >
              {gender.map((option) => (
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
              label="Usuario"
              variant="standard"
            />
            <TextField
              required
              id="standard-required"
              label="Clave digital"
              type="password"
              variant="standard"
            />
          </div>    

          <FormControlLabel required control={<Checkbox />} label="Terminos y Condiciones" />

         
         </Box>
        </form>
      </section>
      <FooterLanding></FooterLanding>
    </div>
  );
}

export default RegistrationForm;
