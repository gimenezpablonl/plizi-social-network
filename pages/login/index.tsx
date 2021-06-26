import Head from "next/head";
import React from "react";
import Login from "../../components/Authentication/Login";

const LoginPage = () => (
  <>
    <Head>
      <title>Plizi - Login</title>
      <meta
        property="og:title"
        content={`Plizi Social Network - Login`}
        key="title"
      />
    </Head>
    <Login />
  </>
);

export default LoginPage;
