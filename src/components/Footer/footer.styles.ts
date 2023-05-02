import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledFooter = styled(motion.footer).attrs({
  className: 'py-8'
})``
export const StyledFooterContactItem = styled.li.attrs({
  className: 'grid gap-2 sm:flex sm:gap-4 md:gap-6'
})``
export const StyledFooterContactTitle = styled.strong.attrs({
  className:
        'hidden font-bold text-2xl leading-[120%] tracking-[-0.02em] text-white md:block'
})``
export const StyledFooterContactItemHeading = styled.strong.attrs({
  className:
        'font-bold text-lg leading-[125%] flex items-center text-center tracking-[0.02em] text-white'
})``
export const StyledFooterContactItemInfo = styled.p.attrs({
  className: 'text-lg leading-[180%] tracking-[-0.01em] text-mySecondary-100'
})``
export const StyledPageCopyright = styled.strong.attrs({
  className: 'text-[17px] leading-[200%] tracking-[-0.01em] text-[#B4C7E7]'
})``
export default StyledFooter
