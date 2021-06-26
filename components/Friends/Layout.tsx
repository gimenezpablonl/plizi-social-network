import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import FriendsList from "./List";
import FriendsRecommended from "./Recommended";

const FriendsLayout = () => {
  return (
    <>
      <Box w="100%" h="100%">
        <Stack direction="row" w="100%" h="100%" spacing="4">
          <FriendsList />
          <FriendsRecommended />
        </Stack>
      </Box>
    </>
  );
};

export default FriendsLayout;
