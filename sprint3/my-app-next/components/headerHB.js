import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { zIndex } from "../themes/ThemeRegistry"

function Header() {
  return (
    <header>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <div>
            <Link href="/homeBanking/account">
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
