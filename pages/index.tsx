import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import useSWR from "swr";
import withAuthentication from "../components/HOC/withAuthentication";
import FaIcon from "../components/Icons";
import Layout from "../components/Layout/Layout";
import Post from "../components/Posts/Post";
import { Post as PostType } from "../graphql/types";
import { fetcher } from "../graphql/client";
import { createPost } from "../graphql/mutations";
import { getPosts } from "../graphql/querys";
import { getAuthCookie } from "../utils/authCookies";
import Head from "next/head";

type Props = {
  token: string;
};

const Index: NextPage<Props> = ({ token }: Props) => {
  console.log("token", token);
  const { data } = useSWR([getPosts, token], fetcher);
  return (
    <>
      <Head>
        <title>Plizi Social Network</title>
        <meta property="og:title" content="Plizi Social Network" key="title" />
      </Head>
      <Layout>
        <Flex w="100%" flexDir={"column"} align={"flex-end"}>
          <Box w="100%" mb={5}>
            <Formik
              initialValues={{ text: "" }}
              onSubmit={async (values) => {
                const { text } = values;
                try {
                  await fetcher(createPost, token, { text }).then((res) =>
                    console.log("created post: ", res.createPost)
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <InputGroup
                    rounded="2xl"
                    boxShadow="base"
                    size="lg"
                    border="2px"
                    textColor="black"
                    borderColor="gray.50"
                  >
                    <Input
                      id="text"
                      name="text"
                      roundedLeft="2xl"
                      variant="filled"
                      bgColor="white"
                      _hover={{ backgroundColor: "gray.50" }}
                      placeholder="Share something with us!"
                      value={props.values.text}
                      onChange={props.handleChange}
                    />
                    <InputRightAddon
                      roundedRight="2xl"
                      bgColor="white"
                      border="none"
                      children={
                        <>
                          <IconButton
                            mr={1}
                            size="xs"
                            bgColor="white"
                            aria-label="Search database"
                            icon={<FaIcon style="fal" name="paperclip" />}
                          />
                          <IconButton
                            mr={1}
                            size="xs"
                            bgColor="white"
                            aria-label="Search database"
                            icon={<FaIcon style="fal" name="camera" />}
                          />
                          <IconButton
                            size="xs"
                            bgColor="white"
                            aria-label="Search database"
                            icon={<FaIcon style="fal" name="icons" />}
                          />
                        </>
                      }
                    />
                  </InputGroup>
                </form>
              )}
            </Formik>
          </Box>
        </Flex>
        {data
          ? data.getPosts.data.map((post: PostType, index: number) => (
              <Post key={index} data={post} />
            ))
          : null}
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = await getAuthCookie(ctx.req);
  return {
    props: {
      token: token || null,
    },
  };
};

export default withAuthentication(Index);
