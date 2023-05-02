import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledCategorySection = styled(motion.section).attrs({
  className: 'relative py-12 px-8 text-white bg-myPrimary-100'
})`

  & .slick-list {
    margin: 0 -5px;
  }
  & .slick-slide > div {
    padding: 0 5px;
  }
`
export const StyledCategoryList = styled(motion.ul)``
export const StyledCategoryItem = styled.div``
