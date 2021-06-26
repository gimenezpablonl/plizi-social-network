import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import ChatTab from "./ChatTab";

const ChatsList = () => {
  const [chats, _setChats] = useState<Number[]>([
    0,
    1,
    2,
    3,
    5,
    6,
    7,
    8,
    9,
    10,
    1,
    2,
    3,
    4,
    5,
    5,
    5,
    5,
    5,
  ]);
  const renderChats = chats.map((_chat, index) => <ChatTab key={index} />);
  return (
    <>
      <Box w="400px" h="80vh" overflowY="auto" pl="4">
        <Stack direction="column">
          <Box>{renderChats}</Box>
        </Stack>
      </Box>
    </>
  );
};
export default ChatsList;
