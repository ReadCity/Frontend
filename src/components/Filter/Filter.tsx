import CategoryList from '../CategoryList'
import type { FilterFields } from '@src/interfaces'
import { Box, Divider, Grid, Heading } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { StyledContainer } from '@src/styles/globals'
import StyledFilter from './filter.styles'

export default function Filter () {
  const { register } = useForm<FilterFields>({
    mode: 'all',
    defaultValues: {
      category: 'all'
    }
  })

  return (
    <StyledFilter pos="relative">
      <StyledContainer>
        <Box as="form">
          {/* <Heading
              color="red.400"
              fontSize='6xl'
              fontWeight='extrabold'
            >
              Filter by category
            </Heading> */}
          <CategoryList />
        </Box>
      </StyledContainer>
    </StyledFilter>
  )
}
