import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

const PokeApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <ChakraProvider resetCSS>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
    </ChakraProvider>
);

export default PokeApp;
