import { Box, Container, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import FriendsSidenavbar from "./FriendsSidenavbar";
import Navbar from "./Navbar/Navbar";
import SideNavbar from "./SideNavbar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <Box>
    <Container maxW="container.xl" centerContent>
      <Navbar />
      <Flex w="100%" mt={5} direction="row" align="start" justify="space-between">
        <SideNavbar />
        <Box w="100%" px={[5, 25, 65]}>
          {children}
        </Box>
        <FriendsSidenavbar />
      </Flex>
    </Container>
  </Box>
);

export default Layout;
