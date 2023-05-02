import { motion } from 'framer-motion'
import styled from 'styled-components'

interface StyledHeroTypes {
  navState: boolean
}

const StyledHero = styled(motion.section).attrs({
  className: 'relative mb-24 py-[93px]'
})<StyledHeroTypes>`
  /* z-index: ${(props) => (props.navState ? 1 : -1)}; */
  
  &::before {
    content: "";
    background-size: cover;
    background-image: url("/hero/kid_reading_a_book.webp");
  }
`
export const StyledHeroExplore = styled(motion.a)`
  position: relative;
  padding: .75em 3em;
  border: 3px solid rgb(255, 202, 66);
  color: rgb(27, 55, 100);
  background-color: rgb(255, 202, 66);
  border-radius: 5px;
  letter-spacing:2px;
  transition: background 300ms ease-in-out 0s, color 300ms ease-in-out 0s,
    opacity 400ms ease-in-out 0s;
  box-shadow: rgb(255 202 66) 0px 0px 0.5em 0px inset,
    rgb(27 55 100) 0px 0px 0.5em 0px;
`
export const StyledPageTitle = styled(motion.h1).attrs({
  className:
    'mb-8 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient'
})`
  font-family: "Lobster Two";
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
export const StyledPageDescription = styled(motion.p).attrs({
  className:
    'mb-8 text-[19px] leading-[180%] tracking-[-0.01em] text-[#B4C7E7]'
})``
export const StyledHeroWrapper = styled.div.attrs({
  className: 'grid gap-16 md:grid-flow-col md:gap-8'
})``
export const StyledHeroInner = styled.div.attrs({
  className: ''
})``

export default StyledHero
