import { Avatar, Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import FaIcon from "../Icons";

const ChatTab = () => {
  return (
    <>
      <Stack w="100%" spacing={5} direction="row" align="center" mt="4">
        <Avatar
          boxSize="10"
          name="Pablo Gimenez"
          src="https://avatars.githubusercontent.com/u/37600947"
        />
        <Stack w="100%" direction="column">
          <Box>
            <Stack w="100%" direction="row" align="center">
              <Heading as="h6" size="xs">
                Pablo Gimenez
              </Heading>
              <Box>
                <Stack w="100%" direction="row" align="center" spacing="0">
                  <Box>
                    <FaIcon style="fal" name="check-double" color="green.400" />
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="gray.500">
                      20:15
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Text fontSize="xs" color="gray.400">
              Hi
            </Text>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default ChatTab;
