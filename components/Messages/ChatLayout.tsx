import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import ChatsList from "./ChatsList";
import ConversationLayout from "./Conversation/Layout";

const ChatLayout = () => {
  return (
    <>
      <Box bgColor="white" rounded="2xl" boxShadow="xs" w="100%" h="100%" mb="4">
        <Stack direction="row" w="100%" h="100%" spacing="0">
          <ChatsList />
          <ConversationLayout />
        </Stack>
      </Box>
    </>
  );
};

export default ChatLayout;
