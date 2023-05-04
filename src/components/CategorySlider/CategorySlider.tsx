import { Box, Container, Grid, Heading, Stack } from "@chakra-ui/react";
import { axiosClient } from "@src/main";
import { type BookModel } from "@src/models/book";
import { type CategoryModel } from "@src/models/category";
import BookItem from "@src/pages/Book/components/BookItem";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookLoader } from "../Loader";
interface CategoryCarouselProps {
  categoryId: CategoryModel["id"]

}
export function CategoryCarousel({ categoryId }: CategoryCarouselProps) {
  console.log(categoryId);

  const [category, setCategory] = useState();
  const { data: booksByCategory, isLoading } = useQuery({
    queryKey: ["books", "category", categoryId],
    queryFn: async (): Promise<BookModel[]> => {
      const data = (await axiosClient.get('/category/' + String(categoryId)));
      setCategory(data.data.data.name);
      return data.data.data.books;
    },

  });
  if (isLoading) {
    return (
      <Stack spacing="4">
        <Heading as="h3" className="skeleton-text"></Heading>
        <BookLoader count={10} />
      </Stack>
    )
  };
  return (
    <>
      <Box as={motion.section} px="8" pt="12" pb="24" id="books" exit={{ opacity: 0 }} layout>
        <Container maxW="1240px">

          <Heading mb="2" as="h3" color="teal">
            {category}
          </Heading>
          <Grid as={motion.div} templateColumns={["repeat(auto-fit,min(200px,100%))", "repeat(auto-fit,min(250px,90%))"]} rowGap="4" columnGap="4" layout>
            {booksByCategory?.map(book => <BookItem key={book.id} {...book} />)}
          </Grid>
        </Container>

      </Box>
    </>
  )
}
