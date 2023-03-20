import { navLinks } from "@src/data"
import StyledNav, { StyledNavItem, StyledNavLink, StyledNavList } from "./navigation.styles"
import useNavStore from "@src/features";

export default function Navigation() {
  const { display, toggleDisplay } = useNavStore();

  return (
    <StyledNav aria-hidden={display}>
      <StyledNavList>
        {navLinks.map(link => (
          <StyledNavItem onClick={() => toggleDisplay()} key={link.to}>
            <StyledNavLink to={link.to}>
              {link.title}
            </StyledNavLink>
          </StyledNavItem>
        ))}
      </StyledNavList>
    </StyledNav>
  )
}
