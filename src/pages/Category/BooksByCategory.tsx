import { Container, Stack } from "@chakra-ui/react";
import { BreadCrumb, type BreadCrumbItem } from "@src/components/BreadCrumb";
import { axiosClient } from "@src/main";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { BookListWithProps } from "../Book/components/BookList/BookList";

export function BooksByCategory() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['books', 'category', id],
    queryFn: async () => {
      if (id === 'all') return await (await axiosClient.get('/book/all')).data.data.data
      else return (await axiosClient.get('/category/' + (id as string))).data.data
    },
    keepPreviousData: true
  });

  const paths: BreadCrumbItem[] = [
    {
      title: "Home",
      to: "/"
    },
    {
      title: "Category",
      to: "/"
    },
    {
      title: data?.name,
      to: `/books/category/${id as string}`
    }
  ]

  return (
    <Stack spacing="2">
      <Container maxW="1240px">
        <BreadCrumb paths={paths} />
      </Container>
      <BookListWithProps books={data?.books} isLoading={isLoading} />
    </Stack>
  )
}
