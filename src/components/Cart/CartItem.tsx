import { Card, CardBody, Image, Stack, Text, Heading, CardFooter, ButtonGroup, Button, Link, Divider } from "@chakra-ui/react";
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
      <Image maxW="full" rounded="lg" className="skeleton" src={`${BASE_URL as string}/${book?.image.img as string}`} htmlWidth={300} htmlHeight={300} w="full" h="auto" objectFit="contain" loading="lazy" alt={book?.desc} />
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
          <BookOrder bookId={String(book?.id)} />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button onClick={() => {
            toggle();
          }} colorScheme="teal">
            Buy now
          </Button>
          <Button onClick={() => {
            removeBook(book?.id as number)
          }} colorScheme="red">
            Remove
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
