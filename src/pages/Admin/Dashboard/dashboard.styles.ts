import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledSidebar = styled(motion.aside).attrs({
  className:
    'absolute hidden w-[min(250px,100%)] md:block h-full pb-6 md:relative sidebar bg-myPrimary-100'
})`
  border-top: 1px solid #222;
  flex-shrink: 0;
  /* width: min(350px, 100%); */
`

export const StyledSidebarToggler = styled(motion.button).attrs({
  className: 'hidden'
})`
  & span:nth-child(1) {
    position: absolute;
    transform: rotate(135deg);
  }
  & span:nth-child(2) {
    position: absolute;
    transform: rotate(-135deg);
  }
`

export const StyledSidebarList = styled(motion.ul).attrs({
  className: ''
})``

export const StyledSidebarItem = styled(motion.li).attrs({
  className: 'relative sidebar-item flex gap-2 text-white  bg-myPrimary-100'
})``

export const StyledSidebarLink = styled(NavLink).attrs({
  className:
    'relative sidebar-link block py-6 font-bold font-roboto text-center text-white hover:bg-slate-600'
})`
  flex-grow: 1;
  &.active {
    background-color: #ffca42;
  }
  &::before {
    content: attr(data-name);
  }
`
