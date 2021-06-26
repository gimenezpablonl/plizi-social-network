import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ChatLayout from "../../components/Messages/ChatLayout";

const messagesPage = () => {
  return (
    <>
      <Head>
        <title>Plizi - My Messages</title>
        <meta
          property="og:title"
          content="Plizi Social Network - My Messages"
          key="title"
        />
      </Head>
      <Layout>
        <ChatLayout />
      </Layout>
    </>
  );
};
export default messagesPage;
