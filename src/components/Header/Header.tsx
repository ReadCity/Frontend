import { StyledContainer } from '@src/styles/globals'
import {
    StyledHeaderWrapper,
    StyledMainPageLink
} from './header.styles'
import ReadLogo from '/read.svg'
import ReadLightLogo from '/read_dark.png'
import { Box, Button, ButtonGroup, Divider, Flex, Image, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon as DarkMode, SunIcon as LightMode } from '@chakra-ui/icons';
import Cart from "../Cart/Cart";

export default function Header() {
    const { toggleColorMode, colorMode } = useColorMode();
    const headerBg = useColorModeValue('gray.50', 'gray.900')
    return (
        <>
            <Box pos="fixed" w="full" zIndex="100" as="header" py="10" bg={headerBg}>
                <StyledContainer>
                    <StyledHeaderWrapper>
                        <Flex gap={['1', '2', '3']} flexGrow="1" justifyContent="space-between" alignItems="center">
                            <StyledMainPageLink to="/">
                                <Image
                                    src={colorMode === 'light' ? ReadLightLogo : ReadLogo}
                                    width={120}
                                    height="60px"
                                    objectFit="cover"
                                    alt="Read books"
                                    loading="eager"
                                    title="Readcity.uz's logo"
                                    rounded="base"
                                />
                            </StyledMainPageLink>
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
            <Divider mb="12" />
        </>

    )
}
