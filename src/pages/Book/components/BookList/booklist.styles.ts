import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledBookList = styled(motion.ul).attrs({
  className:
        'grid grid-cols-[repeat(auto-fit,min(450px,90%))] justify-center place-content-center gap-x-8 gap-y-32 lg:gap-x-12 xl:gap-x-32'
})``
export default StyledBookList
