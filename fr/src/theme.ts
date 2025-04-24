import { extendTheme } from "@chakra-ui/react";

// Define your theme settings here (e.g., colors, fonts, etc.)
const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#f5f8fa",
      100: "#e1e8f0",
      200: "#c1d0e0",
      300: "#a1b8d0",
      400: "#809fc0",
      500: "#6087a0", // primary color
      600: "#406080",
      700: "#304060",
      800: "#202040",
      900: "#101020",
    },
  },
});

export default theme;
