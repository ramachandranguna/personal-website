import React from "react";
import { Box, BoxProps } from "../../atoms";

interface FooterProps extends BoxProps {}

const Footer: React.FC<FooterProps> = (props: FooterProps) => (
  <Box as="footer" {...props}>
    Footer
  </Box>
);

export default Footer;
