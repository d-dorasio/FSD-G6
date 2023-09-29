import ThemeRegistry from "../../themes/ThemeRegistry";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ITBANK",
  description: "Esta es mi descripción",
};

export default function RootLayout(props) {
  const { children } = props;

  return (
    <html lang="es">
      <ThemeRegistry>
        <body className={inter.className}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
