"use client";

import Link from "next/link";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navBar">
      <Box textAlign="center" sx={{ display: "flex" ,}}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            fontFamily: "Montserrat Variable",
            flexShrink: 0,
            
            [`& .MuiDrawer-paper`]: { boxSizing: "border-box" },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "#000000",
              width: "250px",
              paddingTop: "25px",
              zIndex:"1",
              "@media (max-width: 780px)": {
                maxWidth: "45px",
                height: "56px",
                paddingTop: "0px",
                backgroundColor: "#35103d",
                border: "none",
              },
            },
          }}
        >
          <div className={`nav-items ${isOpen && "open"}`}>
            <Box sx={{ overflow: "auto" }}>
              <div className="nav-logo">
                <Link href="/homeBanking">
                  <img src="/logo.png" height="100px"></img>
                </Link>
              </div>
              <ul style={{ listStyleType: "none" }} className="ul-nav">
                <li>
                  <Button>
                    <Link href="/homeBanking/accountStatus">
                      Estado de cuenta
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link href="/homeBanking/transfer">Transferencias</Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link href="/homeBanking/cards">Tarjetas</Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link href="/homeBanking/payments">Pagos</Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link href="/homeBanking/loans">Préstamos</Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link href="/homeBanking/simulator">Plazos Fijos</Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link href="/homeBanking/currencyConverter">
                      Convertidor de moneda
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link href="/homeBanking/movements">Mis Movimientos</Link>
                  </Button>
                </li>
              </ul>
            </Box>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        ></Box>
      </Box>
    </div>
  );
}
