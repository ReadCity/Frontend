import { Box, useColorModeValue } from '@chakra-ui/react'
import { lazy } from 'react'
import { Outlet } from 'react-router-dom'

const Footer = lazy(async () => await import('@components/Footer'))
const Header = lazy(async () => await import('@components/Header'))

export default function RootLayout() {
  return (
    <>
      <Header />
      <Box color={useColorModeValue('white', 'blackAlpha.900')} mt="150px" as="main" className="site-main">
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}
