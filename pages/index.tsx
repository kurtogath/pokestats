import Head from 'next/head';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import Layout from '../components/layout';

const Index = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return <Layout>{'Piplup'}</Layout>;
};

export default Index;
