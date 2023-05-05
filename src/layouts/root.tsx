import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import CategoryCarousel from "@src/components/CategoryCarousel/CategoryCarousel"
import Filter from "@src/components/Filter/Filter"
import { lazy } from 'react'
import { Outlet } from 'react-router-dom'

const Footer = lazy(async () => await import('@components/Footer'))
const Header = lazy(async () => await import('@components/Header'))

export default function RootLayout() {
  return (
    <>
      <Header />
      <Box color={useColorModeValue('white', 'blackAlpha.900')} pt="4" mt="100px" as="main" className="site-main">
        <Box display={{
          base: "block",
          lg: "none"
        }}>
          <Container maxW="1240px">
            <Filter />
          </Container>
        </Box>
        <Box display={{
          base: "none",
          lg: "block"
        }}>
          <CategoryCarousel />
        </Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}
