import { Box, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FaIcon from "../Icons";
import GroupsSidebar from "./GroupsSidebar";

const SideNavbar = () => {
  const router = useRouter();
  return (
    <VStack>
      <Box>
        <Link href="/">
          <IconButton
            aria-label="Home"
            icon={
              <FaIcon
                style="far"
                name="fire"
                size="lg"
                color={router.asPath === "/" ? "blue.300" : "gray.500"}
              />
            }
            variant="ghost"
          />
        </Link>
      </Box>
      <Box>
        <Link href="/explore">
          <IconButton
            aria-label="Explore"
            icon={
              <FaIcon
                style="far"
                name="binoculars"
                size="lg"
                color={router.asPath === "/explore" ? "blue.300" : "gray.500"}
              />
            }
            variant="ghost"
          />
        </Link>
      </Box>
      <GroupsSidebar></GroupsSidebar>
    </VStack>
  );
};

export default SideNavbar;
