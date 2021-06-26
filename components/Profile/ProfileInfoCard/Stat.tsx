import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  number: string;
  name: string;
};

const InfoCardStat = ({number, name}: Props) => {
  return (
    <>
      <Box>
        <Stack
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="100%"
          spacing="0"
        >
          <Box>
            <Heading as="h4" size="md">
              {number}
            </Heading>
          </Box>
          <Box>
            <Text fontSize="md">{name}</Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default InfoCardStat;
