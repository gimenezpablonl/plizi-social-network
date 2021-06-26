import { Avatar, Stack, Box, Heading, Text, Divider } from "@chakra-ui/react";
import React from "react";
import FaIcon from "../../Icons";

const NotificationBox = () => {
  return (
    <>
      <Box as="button" w="100%">
        <Stack direction="row" align="center" justify={"space-between"} my={3}>
          <Box>
            <Stack spacing={5} direction="row" align="center">
              <Avatar
                name="Pablo Gimenez"
                src="https://avatars.githubusercontent.com/u/37600947"
              />
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
          <Box>
            <FaIcon style="fal" name="comment-alt" size="2x" />
          </Box>
        </Stack>
      </Box>
      <Divider borderColor="gray.300" />
    </>
  );
};

export default NotificationBox;
