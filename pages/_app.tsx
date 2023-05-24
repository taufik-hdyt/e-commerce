import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import mystyles from '../styles/mystyles';
import { AuthProvider } from '@/providers/AuthProvider';
import nookies from 'nookies';

export default function App({ Component, pageProps }: AppProps) {
  const { token } = nookies.get();
  return (
    <AuthProvider token={token}>
      <ChakraProvider theme={mystyles}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
