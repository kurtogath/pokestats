import React from 'react';
import { AppProps } from 'next/app';
import { Provider, CachePolicies, Res, IncomingOptions } from 'use-http';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

const fetchOptions: IncomingOptions = {
    cachePolicy: CachePolicies.NO_CACHE,
    // credentials: 'include',
    headers: {
        Accept: '*/*'
    }
};

const PokeApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Provider url={'https://pokeapi.co/api/v2'} options={fetchOptions}>
        <ChakraProvider resetCSS>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Component {...pageProps} />
        </ChakraProvider>
    </Provider>
);

export default PokeApp;
