import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import {
  sessionReducer,
  initialState,
  AppProvider,
} from "../components/HOC/AppContext";

import "../scripts/wdyr";
import theme from "../components/theme";
function MyApp({ Component, pageProps }: AppProps) {
  const [user, handleAuthentication] = React.useReducer(sessionReducer, initialState);
  return (
    <AppProvider value={{ user, handleAuthentication }}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  );
}

export default MyApp;
