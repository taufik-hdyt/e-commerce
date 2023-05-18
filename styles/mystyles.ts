import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#9747FF",
    secondary: "rgba(5, 5, 5, 0.5)",
    bgDelete: "#FB6565",
    myBlack: "#050505",
    myYellow: "#F4BD2F",
    myRed: "#FA3636",
    myBlue: "#4468E5",
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        display: "none",
      },
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
  },
});

export default theme;
