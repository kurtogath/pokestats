import { Box, Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { FiSun, FiMoon } from 'react-icons/fi';

const Layout: React.FC = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex height='100vh' width='100vw'>
            <Box w='250px' h='100vh' shadow='xl' p={[2, 3, 5]}>
                <IconButton
                    aria-label='Toggle color mode'
                    onClick={toggleColorMode}
                    icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
                    bg='transparent'
                />
            </Box>
            <Box w='100%' h='100vh' bg='whitesmoke' p={[2, 3, 5]}>
                {children}
            </Box>
        </Flex>
    );
};

export default Layout;
