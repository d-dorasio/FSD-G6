// import ThemeRegistry from "../../themes/ThemeRegistry";
// import { Inter } from "next/font/google";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "ITBANK",
//   description: "Esta es mi descripción",
// };

// export default function RootLayout(props) {
//   const { children } = props;

//   return (
//     <html lang="es">
//       <ThemeRegistry>
//         <body className={inter.className}>{children}</body>
//       </ThemeRegistry>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
//import HeaderLanding from "./components/headerLandingPage";
//import FooterLanding from "./components/footerLandingPage";

import HeaderLanding from "../../components/headerLandingPage";
import FooterLanding from "../../components/footerLandingPage";

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