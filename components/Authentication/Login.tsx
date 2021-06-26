import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "../HOC/AppContext";
import FaIcon from "../Icons";
import RegisterModal from "./RegisterModal";
const Login = () => {
  const { handleAuthentication } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((res) => res.json())
          .then((data) => {
            handleAuthentication({
              type: "login",
              data: data,
            });
            router.push("/");
          });
      } catch (err) {
        console.error(err);
      }
    },
  });
  return (
    <>
      <Box
        w="100vw"
        h="100vh"
        bgImage="url('/images/blue-wave.png')"
        bgPosition="center"
        bgSize="100%"
        bgRepeat="no-repeat"
      >
        <Flex direction="column" w="100%" h="100%" align="center">
          <Spacer />
          <Box
            w={400}
            bgColor="white"
            pt={4}
            px={50}
            rounded="2xl"
            boxShadow="dark-lg"
          >
            <form onSubmit={formik.handleSubmit}>
              <FormControl id="username" mb={5}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaIcon style="far" name="user" />}
                  />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    variant="flushed"
                    bgColor="white"
                    _hover={{ backgroundColor: "gray.50" }}
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="password" mb={5}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaIcon style="far" name="key" />}
                  />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="flushed"
                    bgColor="white"
                    _hover={{ backgroundColor: "gray.50" }}
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <Stack spacing={2} my={10} direction="column" align="center">
                <Button
                  type="submit"
                  rounded="2xl"
                  colorScheme="blue"
                  variant="solid"
                  minW="72"
                  boxShadow="md"
                >
                  LOGIN
                </Button>
                <Button
                  onClick={onOpen}
                  rounded="2xl"
                  colorScheme="blue"
                  variant="outline"
                  minW="72"
                  boxShadow="md"
                >
                  JOIN US
                </Button>
              </Stack>
            </form>
          </Box>
          <Spacer />
          <Box
            display={["none", "none", "block"]}
            w={400}
            bgColor="white"
            px={5}
            rounded="2xl"
            boxShadow="base"
            my={5}
          >
            <Stack h="100%" direction="row" align="center" justify="center">
              <Stack direction="column" maxW={32}>
                <Heading size="sm">
                  Download our application to your phone
                </Heading>
                <Stack direction="row" spacing="3">
                  <FaIcon style="fab" size="lg" name="app-store" />
                  <FaIcon style="fab" size="lg" name="google-play" />
                </Stack>
              </Stack>
              <Image src="images/PliziMobileBg.jpg" h="32" />
            </Stack>
          </Box>
        </Flex>
      </Box>
      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Login;
