import React from "react";
import { Link } from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";


export default function Header() {
  return (
    <header>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <Link href="/inicio">
              <img src="/logo.png" height="80px"></img>
            </Link> */}
          </Typography>
          <div>
            <Link href="/cuenta">
              <IconButton sx={{ fontSize: 200 }} color="secondary">
                <AccountCircle />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}