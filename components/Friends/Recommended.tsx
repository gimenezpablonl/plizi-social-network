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

const FriendsRecommended = () => {
  return (
    <>
      <Stack
        w="400px"
        p="5"
        direction="row"
        align="center"
        justify={"space-between"}
      >
        <Box>
          <Stack spacing={5} direction="row" align="center">
            <Box>
              <Avatar
                boxSize="10"
                name="Pablo Gimenez"
                src="https://avatars.githubusercontent.com/u/37600947"
              />
            </Box>
            <Stack spacing={1} direction="column" justify="center" align="left">
              <Box>
                <Heading as="h6" size="xs">
                Pablo Gimenez
                </Heading>
              </Box>
              <Box>
                <Text fontSize="xs" color="gray.400">
                  13 mutuals friends
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box mr={5}>
          <Stack spacing={0} direction="row-reverse" align="center">
            <IconButton
              size="xs"
              variant="rounded"
              colorScheme="teal"
              aria-label="shouts"
              fontSize="14px"
              icon={<FaIcon style="fal" name="user-plus" />}
            />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
export default FriendsRecommended;
