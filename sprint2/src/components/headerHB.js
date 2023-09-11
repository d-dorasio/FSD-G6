import React from 'react';
import { Link } from 'react-router-dom';

import * as react from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link><img src="/logo.png" height="80px"></img></Link>
        </Typography>
          <div>
            <IconButton
              size="large"
              color="inherit">
              <AccountCircle />
              {/* <Link></Link> */}
            </IconButton>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;