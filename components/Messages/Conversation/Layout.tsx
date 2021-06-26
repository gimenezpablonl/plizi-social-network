import { Box, Divider, Stack } from "@chakra-ui/react";
import React from "react";
import Conversation from "./Conversation";
import ConversationHeader from "./Header";
import ConversationInput from "./Input";

const ConversationLayout = () => {
  return (
    <>
      <Box w="100%" h="80vh">
        <Stack w="100%" h="100%" direction="column" spacing="0">
          <ConversationHeader />
          <Divider borderColor="gray.300" />
          <Conversation />
          <Divider borderColor="gray.300" />
          <ConversationInput />
        </Stack>
      </Box>
    </>
  );
};

export default ConversationLayout;
