import { Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  name: string;
  image?: string;
};

const UserCard = ({ name, image }: Props) => {
  return (
    <>
      <Box align="center" rounded="2xl" border="solid" borderWidth={2} borderColor="gray.100" px={3} pt={5} minW={32}>
        <Avatar name={name} src={image} size="lg" />
        <Text fontSize="md" textAlign="center" mb={5}>
          {name}
        </Text>
      </Box>
    </>
  );
};

export default UserCard;
