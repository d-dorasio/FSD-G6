import { ThemeOptions, createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";

let themeITBANK;

// Verificar si estamos en el lado del cliente antes de crear el tema
if (typeof window !== "undefined") {
  themeITBANK = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#35103d",
        dark: "#220829",
        nav:"red,"
      },
      secondary: {
        main: "#ff6431",
      },
      error: {
        main: "#e42617",
        light: "#f53424",
      },
      info: {
        main: "#ba68c8",
        contrastText: "#000000",
      },
      warning: {
        main: "#ff6431",
        contrastText: "rgba(255,255,255,0.87)",
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
    zIndex: (theme) => ({
      appBar: theme.zIndex.drawer + 2,
    }),
  });
}

export default themeITBANK;
