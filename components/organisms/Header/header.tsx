import { List } from "components/molecules";
import React from "react";
import { Github } from "@styled-icons/remix-line";

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
    justifyContent="flex-end"
  >
    <Box>
      <List display="flex" justifyContent="center" alignItems="center">
        <ListItem p="20px">
          <Anchor href="/blogs" color="primary" fontSize="h5" fontWeight="bold">
            Blogs
          </Anchor>
        </ListItem>
        <ListItem p="20px">
          <Anchor
            href="https://github.com/ramachandranguna/"
            target="_blank"
            color="black"
            fontSize="h5"
            fontWeight="bold"
          >
            <Github width="24px" color="primary" height="24px" />
          </Anchor>
        </ListItem>
      </List>
    </Box>
  </Flex>
);

export default Header;
