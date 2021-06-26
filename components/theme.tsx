import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "grayBlue.50",
      },
    },
  },
  colors: {
    black: "#16161D",
    blue: {
      50: "#E7EBFD",
      100: "#BCC6FA",
      200: "#92A2F7",
      300: "#677EF4",
      400: "#3C59F1",
      500: "#1135EE",
      600: "#0E2ABE",
      700: "#0A208F",
      800: "#07155F",
      900: "#030B30",
    },
    grayBlue: {
      50: "#f7f8fc",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
