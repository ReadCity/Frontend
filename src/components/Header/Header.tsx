import { StyledContainer } from '@src/styles/globals'
import {
    StyledHeaderWrapper,
} from './header.styles'
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, ButtonGroup, Divider, Flex, Image, Link, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon as DarkMode, SunIcon as LightMode } from '@chakra-ui/icons';
import Cart from "../Cart/Cart"
import LogoLight from "/read-dark.svg"
import LogoDark from "/read-light.jpg"
import Logo from "@src/utils/icons";
import Search from "../Search/Search";
export default function Header() {
    const { toggleColorMode, colorMode } = useColorMode();
    const headerBg = useColorModeValue('gray.50', 'gray.900')
    return (
        <>
            <Box pos="fixed" w="full" zIndex="100" as="header" py="0" bg={headerBg}>
                <StyledContainer>
                    <StyledHeaderWrapper>
                        <Flex gap={['1', '2', '3']} flexGrow="1" justifyContent="space-between" alignItems="center">
                            <Link color={colorMode === "light" ? "black" : "white"} as={RouterLink} to="/">

                                <Logo />
                            </Link>
                            <Box flexGrow="1" display={{
                                base: "none",
                                lg: "block"
                            }} maxW="60%">
                                <Search />
                            </Box>
                            <ButtonGroup>
                                <Button onClick={toggleColorMode}>
                                    {colorMode === 'light' ? <DarkMode /> : <LightMode />}
                                </Button>
                                <Cart />
                            </ButtonGroup>
                        </Flex>
                    </StyledHeaderWrapper>
                </StyledContainer>
            </Box>
            {/* <Divider mb="12" /> */}
        </>

    )
}
