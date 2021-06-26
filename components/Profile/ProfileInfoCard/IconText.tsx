import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import FaIcon from "../../Icons";

type Props = {
  icon: string;
  text: string;
};

const IconText = ({ icon, text }: Props) => {
  return (
    <Box>
      <Stack w="100%" direction="row" align="center" spacing="0">
        <Box>
          <FaIcon style="fal" name={icon} color="gray" />
        </Box>
        <Box>
          <Text fontSize="xs">{text}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default IconText;
