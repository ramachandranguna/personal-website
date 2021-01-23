import React from "react";
import Layout from "../components/Layout";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;

const Container = styled.div`
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <Container>
      <GlobalStyle />
      <h1>Hello, world!</h1>
    </Container>
  </Layout>
);

export default IndexPage;
