import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ProfileLayout from "../../components/Profile/Layout";
import { fetcher } from "../../graphql/client";
import { getProfile } from "../../graphql/querys";
import { User } from "../../graphql/types";
import { getAuthCookie } from "../../utils/authCookies";

type Props = {
  user: User;
};

const Post = ({ user }: Props) => {
  return (
    <>
      <Head>
        <title>Plizi - {user.username} profile</title>
        <meta property="og:title" content={`Plizi Social Network - ${user.username} profile`}key="title" />
      </Head>
      <Layout>
        <ProfileLayout user={user} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const username = ctx.params?.username;
  const token = await getAuthCookie(ctx.req);
  const user = await fetcher(getProfile, token, {
    username
  });
  return {
    props: {
      user: user.getUserByUsername || null,
    },
  };
};

export default Post;
