import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';

const Layout: React.FC = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex height='100vh' width='100vw'>
            <Box w='250px' h='100vh' shadow='xl' p={[2, 3, 5]}>
                <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
            </Box>
            <Box w='100%' h='100vh' bg='whiteAlpha.300' p={[2, 3, 5]}>
                {children}
            </Box>
        </Flex>
    );
};

export default Layout;
