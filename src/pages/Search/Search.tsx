import { Container, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";
import { BreadCrumb, type BreadCrumbItem } from "@src/components/BreadCrumb";
import { axiosClient } from "@src/main";
import { type BookModel } from "@src/models/book";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { BookListWithProps } from "../Book/components/BookList/BookList";

export function Search() {
  const { colorMode } = useColorMode();
  const { query } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: async (): Promise<BookModel[]> => {
      console.log("Query", query);
      if (query === "all") {
        const data: Promise<BookModel[]> = (await axiosClient.get('/book/all')).data.data.data;
        return data;
      }
      const regex = new RegExp(query as string, "gi");
      const data: Promise<BookModel[]> = (await axiosClient.get('/book/all')).data.data.data
      return (await data).filter(book => book.title.match(regex))
    },
  });
  const paths: BreadCrumbItem[] = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Search",
      to: "/"
    },
    {
      title: query as string,
      to: `/books/query/${query as string}`
    }
  ]
  return (
    <Container py="8" maxW="1240px">
      <Stack spacing="2">
        <BreadCrumb paths={paths} />
        <Heading color="teal">
          Search results for <Text as="span" color={colorMode === "dark" ? "white" : "dark"}>
            {query}
          </Text>
        </Heading>
        <BookListWithProps books={data as BookModel[]} isLoading={isLoading} />
      </Stack>
    </Container>
  )
}
