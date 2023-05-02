import BookItem from '../BookItem'
import EmptyContent from '@src/components/EmptyContent'
import { StyledContainer } from '@styles/globals'
import { useQuery } from '@tanstack/react-query'
import { axiosClient } from '@src/main'
import { type BookModel } from '@src/models/book'
import { motion } from 'framer-motion'
import { Box, Grid } from '@chakra-ui/react'
import { BookLoader } from '@src/components/Loader'

export default function BookList() {
  const { data: books, isLoading, isFetching } = useQuery({
    queryKey: ['books'],
    queryFn: async (): Promise<BookModel[]> => {
      return (await axiosClient.get('/book/all')).data.data.data
    },
    staleTime: 60000 * 1000
  })
  if (isLoading || isFetching) return <BookLoader />
  if (books?.length === 0) return <EmptyContent contentType="books" />
  return (
    <Box as={motion.section} px="8" pt="12" pb="24" id="books" exit={{ opacity: 0 }} layout>
      <StyledContainer>
        <Grid as={motion.div} templateColumns={["repeat(auto-fit,min(200px,100%))", "repeat(auto-fit,min(250px,90%))"]} rowGap="4" columnGap="4" justifyContent="center" layout>
          {books?.map(book => <BookItem key={book.id} {...book} />)}
        </Grid>

      </StyledContainer>
    </Box>
  )
}
