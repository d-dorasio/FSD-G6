import { Inter } from "next/font/google";
import NavBar from "../../../components/navBarHB";
import Footer from "../../../components/footerHB";
import Header from "../../../components/headerHB";
import '../../app/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Banking - ITBANK",
  description: "Esta es mi descripción del homeBanking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          <div className="sub-container">
            <Header></Header>
            <div className="main-container">
              <main>{children}</main>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </body>
    </html>
  );
}
