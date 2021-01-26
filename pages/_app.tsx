import React, { useState } from "react";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/fonts.css";
import { merge, get } from "lodash";
import theme from "./../styles/theme";
import { ThemeProvider } from "styled-components";

// options for different color modes
const modes = [
  "light",
  "dark",
  // more than two modes can follow...
];

const getTheme = (mode: string) => {
  return merge({}, theme, {
    colors: get(theme.colors.modes, mode, theme.colors),
  });
};

function MyApp({ Component, pageProps }: AppProps) {
  const [mode] = useState(modes[0]);
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} theme={theme} />
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
