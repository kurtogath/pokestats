import Head from 'next/head';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import Layout from '../components/layout';
import useFetch from 'use-http';
import { useEffect } from 'react';
import { Games } from '../enums/endpoints';

const Index = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { get, loading } = useFetch();

    useEffect(() => {
        handleDeliveryNote('1');
    }, []);

    const fetchPokedex = async (payload: string): Promise<any> => {
        const res = await get(Games.Pokedexes + payload);
        return res;
    };

    const obtrenerPokedex = async (code: string): Promise<void> => {
        if (!!code) {
            const res = await fetchPokedex(code);
            console.log('res => ', res);
        }
    };

    const handleDeliveryNote = async (codigo: string): Promise<void> => {
        await obtrenerPokedex(codigo);
    };

    return <Layout>{'Piplup'}</Layout>;
};

export default Index;
