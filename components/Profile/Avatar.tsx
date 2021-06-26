import { Box, IconButton, Stack, StackDivider, Text, Image } from "@chakra-ui/react";
import React from "react";
import FaIcon from "../Icons";

type Props = {
  name: string;
  avatar: string | null | undefined;
};

const ProfileAvatar = ({ name, avatar }: Props) => {
  return (
    <>
      <Box bg="white" w="400px" h="300px" rounded="2xl" boxShadow="xs">
        <Stack
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="100%"
          spacing="0"
        >
          <Box w="100%" h="100%" roundedTop="2xl" overflow="hidden">
            <Image
              src={avatar ? avatar : "/images/last-entries/ava-1.png"}
              alt={`${name} profile pic`}
              w="100%"
            />
          </Box>
          <Box w="100%" h="75px" p="4">
            <Box
              as="button"
              h="100%"
              w="100%"
              p="0"
              rounded="3xl"
              border="1px"
              borderColor="gray.100"
              boxShadow="xs"
            >
              <Stack
                direction="row"
                align="center"
                justify="center"
                w="100%"
                h="100%"
                spacing="0"
                divider={<StackDivider borderColor="gray.300" />}
              >
                <Box w="100%" textAlign="center">
                  <Text fontSize="md">Send friend request</Text>
                </Box>
                <Box w="30%" textAlign="center">
                  <IconButton
                    variant="rounded"
                    colorScheme="teal"
                    aria-label="shouts"
                    fontSize="14px"
                    icon={<FaIcon style="fal" name="user-plus" />}
                  />
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
export default ProfileAvatar;
