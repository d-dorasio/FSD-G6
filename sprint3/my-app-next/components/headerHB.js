import Link from "next/link";

function Header() {
    return (
      <header>
        {/* <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography> */}
            <div>
              <Link href="/homeBanking/account"> mi cuenta
                {/* <IconButton sx={{ fontSize: 200 }} color="secondary">
                  <AccountCircle />
                </IconButton> */}
              </Link>
            </div>
          {/* </Toolbar>
        </AppBar> */}
      </header>
    );
  }
  
  export default Header;