import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

function HeaderLanding() {
  return (
    <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/logo.png" height="80px"></img>
        </Typography>
          <div>
              <Link to= "/account">
                <IconButton
                  sx={{ fontSize: 200 }}
                  color="secondary">
                  <AccountCircle />
                </IconButton>
              </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderLanding;