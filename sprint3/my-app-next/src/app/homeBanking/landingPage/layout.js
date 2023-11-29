import { Inter } from "next/font/google";
import HeaderLanding from "../../../components/headerLandingPage";
import FooterLanding from "../../../components/footerLandingPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page",
  description: "Esta es mi descripción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <HeaderLanding></HeaderLanding>
        {children}
        <FooterLanding></FooterLanding>
      </body>
    </html>
  );
}