import {
  Avatar,
  Box,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FaIcon from "../../Icons";

const ConversationHeader = () => {
  return (
    <>
      <Stack
        w="100%"
        direction="row"
        align="center"
        p={2}
        justify="space-between"
      >
        <Box>
          <Stack w="100%" direction="row" align="center">
            <Box>
              <Avatar
                name="Pablo Gimenez"
                src="https://avatars.githubusercontent.com/u/37600947"
              />
            </Box>
            <Box>
              <Stack ml={1} spacing={1} direction="column">
                <Box>
                  <Heading as="h6" size="xs">
                    Pablo Gimenez
                  </Heading>
                </Box>
                <Box>
                  <Text fontSize="xs" color="gray.400">
                    18:32 23 Oct
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Stack w="100%" direction="row" align="center">
            <Box>
              <InputGroup w={250}>
                <Input
                  roundedLeft="2xl"
                  variant="filled"
                  placeholder="Search"
                />
                <InputRightAddon
                  roundedRight="2xl"
                  children={
                    <IconButton
                      aria-label="Search something in this chat"
                      icon={<FaIcon style="far" name="search" />}
                    />
                  }
                />
              </InputGroup>
            </Box>
            <Box>
              <IconButton
                size="xs"
                variant="rounded"
                colorScheme="teal"
                aria-label="shouts"
                fontSize="24px"
                icon={<FaIcon style="fal" name="ellipsis-v" />}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default ConversationHeader;
