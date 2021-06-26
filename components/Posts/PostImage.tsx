import { Box, Image } from "@chakra-ui/react";
import React from "react";

const PostImage = () => {
  return (
    <>
      <Box>
        <Image
          objectFit="cover"
          h={400}
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
      </Box>
    </>
  );
};

export default PostImage;
