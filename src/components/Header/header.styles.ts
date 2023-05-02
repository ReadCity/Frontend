import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header.attrs({
  className: 'relative py-10 bg-myPrimary-100'
})``

export const StyledHeaderWrapper = styled.div.attrs({
  className: 'flex items-center justify-between gap-4'
})``
export const StyledHeaderInner = styled.div.attrs({
  className: 'flex items-center md:gap-12 lg:gap-20 xl:gap-32 2xl:gap-[30rem]'
})`
  flex-grow: 1;
  justify-content:space-between;
`

export const StyledMainPageLink = styled(Link)``

export const StyledSiteLogo = styled.img.attrs({
  className: 'w-[90px] h-[55px] mr-8 md:w-[118px]'
})`
  object-fit: cover;
`

export const StyledHeaderSocialMedia = styled(motion.ul).attrs({
  className: ' items-center gap-[10px] flex'
})``

export const StyledHeaderSocialItem = styled(motion.li).attrs({
  className: ''
})``
export const StyledHeaderSocialLink = styled(motion.a).attrs({
  className: 'flex items-center justify-center'
})``
export const StyledHeaderSocialLogo = styled(motion.img).attrs({
  className: 'w-[45px] h-[45px]'
})``

export default StyledHeader
