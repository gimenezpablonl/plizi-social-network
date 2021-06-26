import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Post as PostType } from "../../graphql/types";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

type Props = {
  data: PostType;
};

const Post = ({ data }: Props) => {
  return (
    <>
      <Box
        rounded="2xl"
        boxShadow="base"
        size="lg"
        border="2px"
        bgColor="white"
        borderColor="gray.50"
        w="100%"
        px={5}
        py={3}
        mb={5}
      >
        <PostHeader author={data.author} date={data.created} />
        <Box my={5} mx={5}>
          <Box my={5}>
            <Text fontSize="sm" color="black">
              {data.text}
            </Text>
          </Box>
        </Box>
        <PostFooter />
      </Box>
    </>
  );
};

export default Post;
