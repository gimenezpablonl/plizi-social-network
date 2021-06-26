import {
  Avatar,
  Box,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Scalars, User } from "../../graphql/types";
import FaIcon from "../Icons";

type Props = {
  author: User;
  date: Scalars["Date"];
};

const PostHeader = ({ author, date }: Props) => {
  console.log("autor", author, date);
  return (
    <>
      <Stack
        ml={5}
        mt={3}
        mb={5}
        direction="row"
        align="center"
        justify={"space-between"}
      >
        <Box>
          <Stack spacing={5} direction="row" align="center">
            <Box>
              <Avatar
                size="sm"
                name={author.username}
                src={author.avatar ? author.avatar : ""}
              />
            </Box>
            <Stack spacing={1} direction="column" justify="center" align="left">
              <Box>
                <Heading as="h6" size="xs">
                  <a href={`/u/${author.username}`}>{author.username}</a>
                </Heading>
              </Box>
              <Box>
                <Text fontSize="xs" color="gray.400">
                  {date}
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
              fontSize="24px"
              icon={<FaIcon style="fal" name="ellipsis-v" />}
            />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default PostHeader;
