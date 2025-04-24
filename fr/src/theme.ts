import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#ffe5d0",
      200: "#f9c69c",
      300: "#f69b4f",
      400: "#ef8946", // Main brand color
      500: "#d7733d",
      600: "#b95f33",
      700: "#984b29",
      800: "#783820",
      900: "#582716",
    },
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
