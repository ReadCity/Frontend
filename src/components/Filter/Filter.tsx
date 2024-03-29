import { Box, Flex } from '@chakra-ui/react'
import { StyledContainer } from '@src/styles/globals'
import StyledFilter from './filter.styles';
import Search from "../Search/Search";
export default function Filter() {
  return (
    <StyledFilter py="5" pos="relative">
      <StyledContainer>
        <Box as="form">
          <Flex>
            <Search />
          </Flex>
        </Box>
      </StyledContainer>
    </StyledFilter>
  )
}
