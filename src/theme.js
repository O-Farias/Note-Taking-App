// src/theme.js
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    ...baseTheme.colors,
    primary: baseTheme.colors.teal,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.100",
      },
    }),
  },
});

export default theme;
