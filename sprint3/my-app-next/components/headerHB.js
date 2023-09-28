import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";

function Header() {
    return (
      <header>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <div>
              <Link href="/homeBanking/account"> mi cuenta
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
  
  export default Header;