import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Icon
} from '@chakra-ui/react'
import { useRef } from "react";
import { FaShoppingCart as ShoppingCart } from 'react-icons/fa';
import CartList from "./CartList";
import useCart from "@src/features/cart";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { clearBooks } = useCart();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your cart</DrawerHeader>

          <DrawerBody>
            <CartList />
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={() => {
              clearBooks()
            }} variant='outline' mr={3}>
              Clear
            </Button>
            <Button colorScheme='teal'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Button onClick={onOpen}>
        <Icon as={ShoppingCart} />
      </Button>
    </>
  )
}
