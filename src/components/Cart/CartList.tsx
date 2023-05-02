import { Heading, Stack } from "@chakra-ui/react";
import useCart from "@src/features/cart";
import CartItem from "./CartItem";

export default function CartList() {
  const { books } = useCart();
  if (!books) {
    return (
      <Heading as="h3">Your cart is empty</Heading>
    )
  }
  return (
    <Stack spacing="4">
      {books.map(book => <CartItem key={book.id} id={book.id} />)}
    </Stack>
  )
}
