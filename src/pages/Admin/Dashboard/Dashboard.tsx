import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Button, Link, List, ListItem, useDisclosure, IconButton, useColorMode } from '@chakra-ui/react'
import { MdBook as MenuBookIcon, MdPerson as PersonIcon, MdCategory as CategoryIcon } from "react-icons/md";
import { BsTable as BookOnlineIcon } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { StyledContainer } from "@src/styles/globals";
const dashboardItems = [
  { title: 'Kitoblar', to: '/admin/book', helper: 'course', icon: MenuBookIcon },
  { title: 'Adiblar', to: '/admin/author', helper: 'author', icon: PersonIcon },
  { title: 'Buyurtmalar', to: '/admin/order', helper: 'order', icon: BookOnlineIcon },
  { title: 'Kategoriyalar', to: '/admin/category', helper: 'category', icon: CategoryIcon }
]

export default function Dashboard() {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <>
      <StyledContainer>
        <IconButton onClick={onOpen} aria-label="Open sidebar" icon={<HamburgerIcon />}>

        </IconButton>
      </StyledContainer>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}  >
        <DrawerOverlay />
        <DrawerContent bg="teal" >
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Sidebar</DrawerHeader>
          <DrawerBody>
            <List colorScheme="teal">
              {dashboardItems.map(item => (
                <ListItem pos="relative" key={item.title}>
                  <Link w="full" _activeLink={{
                    bg: "white",
                    color: "teal"
                  }} px="4" pl="16" py="4 " pos="relative" color="white" as={NavLink} data-name={item.title} to={item.to} state={{ addItemRoute: item.helper }}>
                    {<item.icon style={{ position: 'absolute', zIndex: '10', top: '50%', left: '10%', transform: 'translate(-10%,-50%)' }} color="inherit" />}
                    {item.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </>
  )
}
