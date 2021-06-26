import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "../../HOC/AppContext";
import FaIcon from "../../Icons";
import NotificationsIcon from "./NotificationsIcon";

const Navbar = () => {
  const router = useRouter();
  const { user, handleAuthentication } = useAppContext() ;

  const logout = async () => {
    const res = await fetch("/api/logout");
    if (res.ok) {
      handleAuthentication({
        type: "logout",
      });
      router.push("/login");
    }
  };
  
  return (
    <>
      <Flex w="100%" direction="row" align="center" my={5}>
        <Link href="/">
          <Box mr={[5, 25, 75]} ml={1}>
            <svg
              id="b2f26598-15e1-4052-b9b8-b35be7e12378"
              data-name="Capa 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              height="48"
            >
              <title>Plizi</title>
              <path
                className="a71b477a-2c72-4982-8a15-06489d995681"
                d="M627.29,515l-22,13.08c-1.52,4-6.06,18.54-9.43,20.89l.75,2c3.48,2.33,11.18,1.75,15.53,1,3.08-1.81,7-14,8.25-16.72,47.6,1.72,36.63-1.68,51.22-35.46L654.29,506c-1.5,4.88-3,11.65-6.86,15.75-5.24.23-17.21.67-22.5.65l3.86-7.07Z"
                transform="translate(-582.72 -478.8)"
              />
              <path
                className="a71b477a-2c72-4982-8a15-06489d995681"
                d="M582.72,539.45c1.81-10.73,21-21,29.3-28.37,5.07-3.73,8-21.08,13.2-22.41,39.63,3.69,71.56-18.34,63.4-6.17-2.75,14.94-15.84,11.06-23.47,14.6.56-3.72,2.5-5.41-1.07-3.63C628.88,505.27,604.47,518,582.72,539.45Z"
                transform="translate(-582.72 -478.8)"
              />
            </svg>
          </Box>
        </Link>
        <Box>
          <InputGroup w={[250, 400, 500]} rounded="2xl" boxShadow="sm">
            <Input
              roundedLeft="2xl"
              variant="filled"
              placeholder="Search anything"
            />
            <InputRightAddon
              roundedRight="2xl"
              children={
                <IconButton
                  aria-label="Search database"
                  icon={<FaIcon style="far" name="search" />}
                />
              }
            />
          </InputGroup>
        </Box>
        <Spacer />
        <Box mr={[0, 1, 16]}>
          <HStack isInline>
            <NotificationsIcon />
            <Link href="/messages">
              <IconButton
                aria-label="Messages"
                icon={
                  <FaIcon
                    style="far"
                    name="comment"
                    size="lg"
                    color={
                      router.asPath === "/messages" ? "blue.300" : "gray.500"
                    }
                  />
                }
                variant="ghost"
              />
            </Link>
            <Link href="/friends">
              <IconButton
                aria-label="Friends"
                icon={
                  <FaIcon
                    style="far"
                    name="user-friends"
                    size="lg"
                    color={
                      router.asPath === "/friends" ? "blue.300" : "gray.500"
                    }
                  />
                }
                variant="ghost"
              />
            </Link>
          </HStack>
        </Box>
        {user ? (
          <>
            <Box>
              <Avatar name={user.name} src={user.avatar ? user.avatar : ""} />
            </Box>
            <Box ml="1">
              <Menu>
                <MenuButton>
                  <FaIcon
                    style="far"
                    size="xs"
                    name="chevron-down"
                    color={
                      router.asPath === "/friends" ? "blue.300" : "gray.500"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <Link href={`/u/${user?.username}`}>
                    <MenuItem>Profile</MenuItem>
                  </Link>
                  <Link href="/settings">
                    <MenuItem isDisabled>Settings</MenuItem>
                  </Link>
                  <MenuItem onClick={logout}>Log out</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </>
        ) : null}
      </Flex>
    </>
  );
};
export default Navbar;
