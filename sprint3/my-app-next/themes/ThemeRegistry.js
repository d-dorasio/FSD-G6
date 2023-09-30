// "use client";

// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
// import '@fontsource-variable/montserrat/wght.css';
// import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

// const themeOptions = {
//     palette: {
//         mode: 'light',
//         primary: {
//           main: '#35103d',
//           dark: '#220829',
//         },
//         secondary: {
//           main: '#ff6431',
//         },
//         error: {
//           main: '#e42617',
//           light: '#f53424',
//         },
//         info: {
//           main: '#ba68c8',
//           contrastText: '#000000',
//         },
//         warning: {
//           main: '#ff6431',
//           contrastText: 'rgba(255,255,255,0.87)',
//         },
//       },
//       typography: {
//           fontFaimily: 'Montserrat Variable',
//       },
//       zIndex: (theme) => ({
//           appBar: theme.zIndex.drawer + 1,
//         }),
// };

// const theme = createTheme(themeOptions);

// export default function ThemeRegistry({
//   children,
// }) {
//   return (
//     <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </NextAppDirEmotionCacheProvider>
//   );
// }

"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import '@fontsource-variable/montserrat/wght.css';
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const themeOptions = {
    palette: {
        mode: 'light',
        primary: {
          main: '#35103d',
          dark: '#220829',
        },
        secondary: {
          main: '#ff6431',
        },
        error: {
          main: '#e42617',
          light: '#f53424',
        },
        info: {
          main: '#ba68c8',
          contrastText: '#000000',
        },
        warning: {
          main: '#ff6431',
          contrastText: 'rgba(255,255,255,0.87)',
        },
      },
      typography: {
          fontFamily: 'Montserrat Variable',
      },
    
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
