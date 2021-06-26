import { Box, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import FaIcon from "../Icons";

const PostFooter = () => {
  return (
    <>
      <Stack
        spacing={0}
        direction="row"
        align="center"
        justify={"space-between"}
      >
        <Box>
          <Stack spacing={0} direction="row" align="center">
            <IconButton
              variant="rounded"
              colorScheme="teal"
              aria-label="like"
              fontSize="14px"
              icon={<FaIcon style="fal" name="heart" />}
            />
            <Text fontSize="sm">0</Text>
            <IconButton
              variant="rounded"
              colorScheme="teal"
              aria-label="comments"
              fontSize="14px"
              icon={<FaIcon style="fal" name="comments" />}
            />
            <Text fontSize="sm">0</Text>
            <IconButton
              variant="rounded"
              colorScheme="teal"
              aria-label="shouts"
              fontSize="14px"
              icon={<FaIcon style="fal" name="megaphone" />}
            />
            <Text fontSize="sm">0</Text>
          </Stack>
        </Box>
        {/*         <Box mr={5}>
          <Stack spacing={0} direction="row-reverse" align="center">
            <FaIcon style="fal" name="eye" color="gray.400" />
            <Text fontSize="sm" color="gray.400">0</Text>
          </Stack>
        </Box> */}
      </Stack>
    </>
  );
};
export default PostFooter;
