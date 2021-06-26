import {
  Avatar,
  Box,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FaIcon from "../Icons";

const FriendsList = () => {
  return (
    <>
      <Box bgColor="white" rounded="2xl" boxShadow="xs" w="100%" h="100%">
        <Stack
          w="100%"
          p="5"
          direction="row"
          align="center"
          justify={"space-between"}
        >
          <Box>
            <Stack spacing={5} direction="row" align="center">
              <Box>
                <Avatar name="Pablo Gimenez" src="https://avatars.githubusercontent.com/u/37600947" />
              </Box>
              <Stack
                spacing={1}
                direction="column"
                justify="center"
                align="left"
              >
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
            </Stack>
          </Box>
          <Box mr={5}>
            <Stack spacing={0} direction="row" align="center">
              <IconButton
                size="xs"
                variant="rounded"
                colorScheme="teal"
                aria-label="shouts"
                fontSize="24px"
                icon={<FaIcon style="fal" name="comment" />}
              />
              <IconButton
                size="xs"
                variant="rounded"
                colorScheme="teal"
                aria-label="shouts"
                fontSize="24px"
                icon={<FaIcon style="fal" name="ellipsis-v" />}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default FriendsList;
