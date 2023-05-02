import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

const StyledFilter = styled(Box)`
  & .slick-list {
    margin: 0 -5px;
  }
  & .slick-slide > div {
    padding: 0 5px;
  }
`

export default StyledFilter
