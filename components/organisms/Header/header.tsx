import { List } from "components/molecules";
import React from "react";
import { Flex, FlexProps, Box, ListItem, Anchor } from "../../atoms";

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
      <List display="flex">
        <ListItem p="20px">Test</ListItem>
        <ListItem p="20px">
          <Anchor>Test</Anchor>
        </ListItem>
      </List>
    </Box>
  </Flex>
);

export default Header;
