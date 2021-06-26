import { Avatar, Box, Divider, VStack } from "@chakra-ui/react";
import React from "react";
import FaIcon from "../Icons";

const GroupsSidebar = () => {
  return (
    <>
      <VStack p="3" pt="1" pb="5" spacing={3}>
        <Divider borderColor="gray.300" />
        <Box h="30px">
          <Avatar size="sm"/>
        </Box>
        <Box h="30px">
          <Avatar size="sm"/>
        </Box>
        <Box h="30px">
          <Avatar size="sm"/>
        </Box>
        <Box h="30px">
          <Avatar size="sm"/>
        </Box>
        <Box as="button" borderRadius="50%" py={2} px={1} bgColor="gray.100">
          <FaIcon style="fal" name="plus" />
        </Box>
      </VStack>
    </>
  );
};

export default GroupsSidebar;
