import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import mystyles from "../styles/mystyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mystyles}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
