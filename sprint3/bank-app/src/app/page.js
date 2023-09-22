import React from "react"
import HeaderLanding from "./aa components/HeaderLanding"
import Footer from "./aa components/FooterLanding"

export default function Home() {
  return (
    <div>
      <HeaderLanding></HeaderLanding>
      <ImagenBanner />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Features />
        </Box>
      <Footer></Footer>
    </div>
  );
}