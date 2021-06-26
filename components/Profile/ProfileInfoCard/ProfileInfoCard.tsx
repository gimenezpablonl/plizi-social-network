import { Badge, Box, Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import IconText from "./IconText";
import InfoCardStat from "./Stat";

type Props = {
  name: string;
  dob: string;
  location: string | null | undefined;
};

const ProfileInfoCard = ({ name, dob, location }: Props) => {
  return (
    <>
      <Box bg="white" w="100%" h="300px" rounded="2xl" boxShadow="xs">
        <Stack
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="100%"
          spacing="0"
          divider={<StackDivider borderColor="gray.300" />}
        >
          <Stack
            direction="column"
            align="center"
            justify="center"
            w="100%"
            h="100%"
            spacing="0"
            p="6"
          >
            <Stack
              direction="row"
              justify="space-between"
              w="100%"
              h="100%"
              spacing="0"
            >
              <Box>{name}</Box>
              <Box>
                <Badge colorScheme="green">ONLINE</Badge>
              </Box>
            </Stack>
            <Stack w="100%" direction="column" justify="center" spacing="2">
              <IconText icon="calendar-day" text={dob} />
              <IconText icon="map-marker-alt" text={location ? location : "Somewhere in the world"} />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            align="center"
            justify="space-around"
            w="100%"
            h="100%"
            spacing="0"
          >
            <InfoCardStat number="12K" name="Comments" />
            <InfoCardStat number="454" name="Posts" />
            <InfoCardStat number="1,7K" name="Likes" />
            <InfoCardStat number="62" name="Friends" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default ProfileInfoCard;
