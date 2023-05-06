import { Card, CardBody, Image, Stack, Text, Heading, CardFooter, ButtonGroup, Button, Link, Divider, Box } from "@chakra-ui/react";
import useOrderDialogStore from "@src/features/order-dialog";
import { axiosClient, BASE_URL } from "@src/main";
import type { BookModel } from "@src/models/book";
import BookOrder from "@src/pages/Order";
import { useQuery } from "@tanstack/react-query";
import { BookLoader } from "../Loader";
import { Link as RouterLink } from "react-router-dom";
import useCart from "@src/features/cart";

export default function CartItem({ id }: { id: BookModel["id"] }) {
  const { data: book, isLoading } = useQuery({
    queryKey: ["cart", id],
    queryFn: async (): Promise<BookModel> => {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      return await (await axiosClient.get("/book/" + id)).data.data;
    }
  });
  const { toggle } = useOrderDialogStore();
  const { removeBook } = useCart();
  if (isLoading) return <BookLoader />
  return (
    <Card shadow="2xl" maxW="sm">
      <Box w="full" overflow="hidden" px="4">
        <Image bg="gray.200" p="2" rounded="lg" mt="4" transform={["none", "none", "scale(1.02)"]} cursor="zoom-in" transition="all 500ms ease-in-out" _hover={{
          transform: 'scale(1.05)'
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        }} className="self-center mx-auto object-fill" src={`${import.meta.env.VITE_BACKEND_URL}/${book?.image?.img}`} fallbackSrc="https://via.placeholder.com/300x300" height={200} loading="lazy" width={200} alt={'Loading'} />
      </Box>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading as="h3" size="md" fontFamily="Roboto">
            <Link target="blank" to={`/books/${String(book?.id)}`} as={RouterLink} size='md'>
              {book?.title}
            </Link>
          </Heading>
          <Text color='white' fontWeight="light" fontSize='xl'>
            {book?.price} UZS
          </Text>
          <Text color='white' fontWeight="light" fontSize='xl'>
            {book?.pages} pages
          </Text>
          <BookOrder bookId={String(book?.id)} />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button size="sm" onClick={() => {
            toggle();
          }} colorScheme="teal">
            Buy now
          </Button>
          <Button size="sm" onClick={() => {
            removeBook(book?.id as number)
          }} colorScheme="red">
            Remove
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
