import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav.attrs({ className: '' })`
  &[aria-hidden="false"] {
    display: block;
  }
  &[aria-hidden="false"] ul {
    top: 110px;
  }
  &[aria-hidden="true"] {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    &[aria-hidden="true"] {
      display: block;
    }
  }
`
export const StyledNavList = styled(motion.ul).attrs({
  className:
    'absolute z-[1] -top-[250px] bottom-0 left-1/2 w-1/2 grid gap-[40px] items-center justify-center h-max px-2 py-6 transition-all duration-300  bg-myPrimary-100 border lg:relative lg:flex lg:inset-0 lg:grid-flow-col lg:p-0 lg:z-[1] lg:px-8 lg:py-6 lg:border-none lg:rounded-lg'
})`
  transform: translateX(-50%);
`
export const StyledNavItem = styled(motion.li)``
export const StyledNavLink = styled(NavLink).attrs({
  className: 'font-medium text-[17px] leading-[125%] text-white'
})`
  &.active {
    color: #ffca42;
  }
`

export default StyledNav
