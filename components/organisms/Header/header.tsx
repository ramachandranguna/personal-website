import { List } from "components/molecules";
import React from "react";
import { Flex, FlexProps, Box, ListItem } from "../../atoms";

interface HeaderProps extends FlexProps {}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <Flex
    as="header"
    {...props}
    alignItems="center"
    maxWidth="1080px"
    margin="auto"
    flexDirection="row"
    justifyContent="space-between"
  >
    <Box>Left</Box>
    <Box>
      <List>
        <ListItem>Test</ListItem>
        <ListItem>Test</ListItem>
      </List>
    </Box>
  </Flex>
);

export default Header;
