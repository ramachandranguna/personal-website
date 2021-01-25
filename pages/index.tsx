import React, { useState } from "react";
import { BaseLayout } from "components/templates";

import { ThemeProvider } from "styled-components";
import { merge, get } from "lodash";
import theme from "./../styles/theme";
import { Box, Flex, Text } from "components/atoms";
import Link from "next/link";

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
  const [mode] = useState(modes[0]);
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="left"
          width="100%"
          height="85vh"
          maxWidth="1080px"
          margin="0 auto"
        >
          <Text as="p" fontSize="p1" mb="0px" color="secondary">
            Hello 👋, Good Evening. My name is
          </Text>
          <Text
            as="h1"
            fontSize="86px"
            fontWeight="900"
            m="0px"
            lineHeight="90px"
            color="primary"
          >
            Ramachandran <br /> Gunasekaran
          </Text>
          <Text as="p" fontSize="p2" color="ternary" lineHeight="h3">
            Core Architect and Technical Solution @{" "}
            <Link href="https://wekan.company" passHref>
              <a
                target="_blank"
                style={{
                  color: theme.colors.highlight,
                  fontWeight: theme.fontWeights.semibold,
                }}
              >
                WeKan Company.
              </a>
            </Link>
            <br />
            Ex-Founding Team @{" "}
            <Link href="https://teliver.io" passHref>
              <a
                target="_blank"
                style={{
                  color: theme.colors.highlight,
                  fontWeight: theme.fontWeights.semibold,
                }}
              >
                Teliver.
              </a>
            </Link>
          </Text>
          <Text as="h3" fontSize="h4" color="secondary">
            Optimistic & Enthusiastic Software Engineer based out of Chennai 🏡.
          </Text>
          <Text
            as="p"
            fontSize="p1"
            color="ternary"
            maxWidth="60%"
            lineHeight="h3"
          >
            With Bachelors in Information Technology specializing in building
            exceptional, high-quality websites and applications.
          </Text>
        </Flex>
      </BaseLayout>
    </ThemeProvider>
  );
};

export default IndexPage;
