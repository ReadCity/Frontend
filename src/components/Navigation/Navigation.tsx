import { navLinks } from '@src/data'
import StyledNav, { StyledNavItem, StyledNavLink, StyledNavList } from './navigation.styles'
import useNavStore from '@src/features'

export default function Navigation () {
  const { display, toggleDisplay, changeDisplay } = useNavStore()

  return (
    <StyledNav aria-hidden={display}>
      <StyledNavList>
        {navLinks.map(link => (
          <StyledNavItem onClick={() => { changeDisplay(true) }} key={link.to}>
            <StyledNavLink aria-hidden={display} to={link.to}>
              {link.title}
            </StyledNavLink>
          </StyledNavItem>
        ))}
      </StyledNavList>
    </StyledNav>
  )
}
