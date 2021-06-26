import { Avatar, Box, Divider, VStack } from "@chakra-ui/react";
import React from "react";
import FaIcon from "../Icons";

const FriendsSidenavbar = () => {
  return (
    <VStack
      bgColor="gray.200"
      boxShadow="md"
      backgroundColor="white"
      rounded="2xl"
      p="3"
      pt="1"
      pb="5"
      spacing={3}
    >
      <Box as="button" borderRadius="md" mt={3} h={5}>
        <FaIcon style="fal" name="chevron-left" />
      </Box>
      <Divider borderColor="gray.300" />
      <Box h="30px">
        <Avatar size="sm" />
      </Box>
      <Box h="30px">
        <Avatar size="sm" />
      </Box>
      <Box h="30px">
        <Avatar size="sm" />
      </Box>
      <Box h="30px">
        <Avatar size="sm" />
      </Box>
      <Box h="30px">
        <Avatar size="sm" />
      </Box>
      <Box h="30px">
        <Avatar size="sm" />
      </Box>
    </VStack>
  );
};

export default FriendsSidenavbar;
