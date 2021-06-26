import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { fetcher } from "../../graphql/client";
import { createUser } from "../../graphql/mutations";
import { useAppContext } from "../HOC/AppContext";
import FaIcon from "../Icons";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterModal = ({ isOpen, onClose }: Props) => {
  const { handleAuthentication } = useAppContext();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      name: "",
      avatar: "",
      dob: "",
      location: "",
    },
    onSubmit: async (values) => {
      const { username, name, password, avatar, dob, location } = values;
      try {
        const data = await fetcher(createUser, undefined, {
          username,
          name,
          password,
          avatar,
          dob,
          location,
        }).then(async () => {
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
        });
        console.log(JSON.stringify(data, undefined, 2));
      } catch (err) {
        console.error(err);
      }
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl id="username">
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
              <FormControl id="password">
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
              <FormControl id="name">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaIcon style="far" name="newspaper" />}
                  />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    variant="flushed"
                    bgColor="white"
                    _hover={{ backgroundColor: "gray.50" }}
                    placeholder="Full name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="dob">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaIcon style="far" name="calendar" />}
                  />
                  <Input
                    id="dob"
                    nane="dob"
                    type="date"
                    variant="flushed"
                    bgColor="white"
                    _hover={{ backgroundColor: "gray.50" }}
                    placeholder="dob"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="avatar">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaIcon style="far" name="image" />}
                  />
                  <Input
                    id="avatar"
                    avatar="avatar"
                    type="text"
                    variant="flushed"
                    bgColor="white"
                    _hover={{ backgroundColor: "gray.50" }}
                    placeholder="Avatar"
                    value={formik.values.avatar}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="location">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaIcon style="far" name="city" />}
                  />
                  <Input
                    name="location"
                    id="location"
                    type="input"
                    variant="flushed"
                    bgColor="white"
                    _hover={{ backgroundColor: "gray.50" }}
                    placeholder="Location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <Button
                type="submit"
                w="100%"
                mt="6"
                colorScheme="blue"
                rounded="2xl"
                mr={3}
              >
                REGISTER
              </Button>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
