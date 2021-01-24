import Head from "next/head";
import React, { ReactNode } from "react";
import { Box, BoxProps } from "../../atoms";
import Footer from "../../organisms/Footer/footer";
import Header from "../../organisms/Header/header";

interface BaseLayoutProps extends BoxProps {
  children?: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => (
  <Box as="main">
    <Head>
      <title>Ramachandran G</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header></Header>
    {children}
    <Footer></Footer>
  </Box>
);
