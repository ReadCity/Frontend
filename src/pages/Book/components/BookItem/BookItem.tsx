import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { type BookModel } from '@src/models/book'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, IconButton, Image, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { FaShoppingCart as ShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion'
import useCart from "@src/features/cart"
import { toast } from "react-toastify"

export default function BookItem(props: BookModel) {
  const { image, title, id, count, } = props;
  const doesBookExist = Number(count) !== 0
  const navigate = useNavigate();
  const { addBook } = useCart();
  const handleBookItemClick = () => { navigate(`/books/${id}`) }
  return (
    <Card rounded="lg" overflow="hidden" size="sm" shadow="dark-lg" as={motion.div} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} maxW="full">
      <Box w="full" overflow="hidden">
        <Image bg="gray.200" p="2" rounded="lg" mt="4" mx="4" transform={["none", "none", "scale(1.02)"]} cursor="zoom-in" transition="all 500ms ease-in-out" _hover={{
          transform: 'scale(1.05)'
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        }} className="self-center mx-auto object-fill" src={`${import.meta.env.VITE_BACKEND_URL}/${image?.img}`} fallbackSrc="https://via.placeholder.com/300x300" height={200} loading="lazy" width={200} alt={'Loading'} />
      </Box>
      <CardBody>
        <Flex>
          <Heading colorScheme="telegram" size="sm" as="h3">
            <Link target="blank" fontFamily="Roboto" fontWeight="light" color={useColorModeValue('blackAlpha.900', 'white')} className="limit-text-3" as={RouterLink} to={`/books/${id}`}>
              {title}
            </Link>
          </Heading>
        </Flex>
        {!doesBookExist ? <Text fontFamily="Roboto" fontWeight="light" pos="absolute" top="0" left="0" bg="red" p="2" borderBottomRightRadius="lg">
          Not available
        </Text>
          : null}
      </CardBody>

      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button isDisabled={!doesBookExist} size="sm" aria-label="Click on the button to go to the book's page" onClick={() => { handleBookItemClick() }}
            variant="solid"
            colorScheme="teal"
          >
            Read more
          </Button>
          <IconButton size="sm" isDisabled={!doesBookExist} onClick={() => {
            addBook(props.id)
            toast.success("Added to the cart!");
          }} aria-label="Read more..." icon={<ShoppingCart />}></IconButton>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
