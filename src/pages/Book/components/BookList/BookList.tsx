import BookItem from '../BookItem'
import EmptyContent from '@src/components/EmptyContent'
import { StyledContainer } from '@styles/globals'
import { useQuery } from '@tanstack/react-query'
import { axiosClient, queryClient } from '@src/main'
import { type BookModel } from '@src/models/book'
import { motion } from 'framer-motion'
import { Box, Container, Grid, Heading, useColorMode } from '@chakra-ui/react'
import { BookLoader } from '@src/components/Loader'
import { useState } from "react";
import ReactPaginate from "react-paginate";

interface BookListProps {
  title?: string;
}

export default function BookList({ title }: BookListProps) {
  const [activePage, setActivePage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(10);
  const itemsPerPage = 20;
  const { colorMode } = useColorMode();
  const { data: books, isLoading, isFetching } = useQuery({
    queryKey: ['books', 'all', activePage],
    queryFn: async (): Promise<BookModel[]> => {
      const response = await (await axiosClient.get('/book/all', { params: { skip: (activePage - 1) * itemsPerPage, take: itemsPerPage } })).data;
      setPageCount(Math.floor(response.data.total / itemsPerPage));
      return response.data.data
    },
    staleTime: 60000 * 1000
  });
  function handlePageClick(e: { selected: number }) {
    const selectedPage = e.selected + 1;
    setActivePage(selectedPage);
    queryClient.invalidateQueries({ queryKey: ["books", "all", activePage] })
  }
  if (isLoading || isFetching) return <BookLoader />
  if (books?.length === 0) return <EmptyContent contentType="books" />
  return (
    <Box as={motion.section} px="8" pt="12" pb="24" id="books" exit={{ opacity: 0 }} layout>
      <Container maxW="1240px">
        {!!title && (
          <Heading mb="2" color={colorMode === "dark" ? "white" : "black"}>
            {title}
          </Heading>
        )}
        <Grid as={motion.div} templateColumns={["repeat(auto-fit,min(200px,100%))", "repeat(auto-fit,min(250px,100%))", "repeat(auto-fit,min(250px,90%))"]} justifyContent={["center", "center", "unset"]} rowGap="4" columnGap="4" layout>
          {books?.map(book => <BookItem key={book.id} {...book} />)}
        </Grid>
        <div id="container">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            containerClassName="flex gap-4 my-8 justify-center"
            previousLabel="<"
            className={`flex gap-4 my-8  justify-center items-center ${colorMode === "dark" ? "text-dark" : "text-white"}`}
            previousLinkClassName="text-lg text-teal-600"
            nextLinkClassName="text-lg text-teal-600"
            forcePage={activePage - 1}
            pageLinkClassName={`px-2 py-[4px] rounded-[5px] ${colorMode === "dark" ? "bg-white" : "bg-black"}`}
            activeLinkClassName="bg-teal-800 text-white"
            renderOnZeroPageCount={null}
          />
        </div>
      </Container>
    </Box>
  )
}

export function BookListWithProps({ books, isLoading }: { books: BookModel[], isLoading: boolean }) {
  if (isLoading) return <BookLoader />
  if (books?.length === 0) return <EmptyContent contentType="books" />
  return (
    <Box as={motion.section} px="8" pt="12" pb="24" id="books" exit={{ opacity: 0 }} layout>
      <StyledContainer>
        <Grid as={motion.div} templateColumns={["repeat(auto-fit,min(200px,100%))", "repeat(auto-fit,min(250px,100%))", "repeat(auto-fit,min(250px,90%))"]} justifyContent={["center", "center", "unset"]} rowGap="4" columnGap="4" layout>
          {books?.map(book => <BookItem key={book.id} {...book} />)}
        </Grid>

      </StyledContainer>
    </Box>
  )
}

// export function BookListWithInfiniteQuery({ title }: BookListProps) {
//   const BOOK_DISPLAY_COUNT = 10;
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const { ref, inView } = useInView();
//   const {
//     status,
//     data,
//     error,
//     isFetching,
//     isFetchingNextPage,
//     isFetchingPreviousPage,
//     fetchNextPage,
//     fetchPreviousPage,
//     hasNextPage,
//     hasPreviousPage,
//     isLoading
//   } = useInfiniteQuery({
//     queryKey: ["books", "infinite"],
//     queryFn: async (): Promise<BookModel[]> => {
//       return (await axiosClient.get('/book/all', {
//         params: {
//           skip: currentPage * BOOK_DISPLAY_COUNT,
//           take: BOOK_DISPLAY_COUNT
//         }
//       })).data.data.data;
//     }
//   });
//   useEffect(() => {
//     console.log(currentPage);
//     setCurrentPage(currentPage => currentPage + 1);
//     void fetchNextPage();
//   }, [inView]);
//   if (isLoading) return <BookLoader />
//   console.log(data);
//   return (
//     <Box as={motion.section} px="8" pt="12" pb="24" id="books" exit={{ opacity: 0 }} layout>
//       <Container maxW="1240px">
//         {!!title && (
//           <Heading mb="2" color="teal">
//             {title}
//           </Heading>
//         )}
//         <Grid as={motion.div} templateColumns={["repeat(auto-fit,min(100px,100%))", "repeat(auto-fit,min(150px,100%))", "repeat(auto-fit,min(200px,100%))", "repeat(auto-fit,min(250px,90%))"]} rowGap="4" columnGap="4" layout>
//           {data?.pages.flatMap(data => data).map(book => (
//             <BookItem {...book} key={book.id} />
//           ))}
//         </Grid>
//         {/* <Button colorScheme="teal"
//           ref={ref}
//           onClick={() => {
//             void fetchNextPage();
//           }}
//           disabled={!hasNextPage || isFetchingNextPage}
//         >Load more</Button> */}
//       </Container>
//     </Box>
//   )
// }
