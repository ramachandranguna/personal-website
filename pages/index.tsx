import React, { useState } from "react";
import { BaseLayout } from "components/templates";

import { ThemeProvider } from "styled-components";
import { merge, get } from "lodash";
import theme from "./../styles/theme";

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

const IndexPage = () => {
  const [mode, setMode] = useState(modes[0]);
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <h1>Hello, world!</h1>
      </BaseLayout>
    </ThemeProvider>
  );
};

export default IndexPage;
