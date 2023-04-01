import useNavStore from "@src/features";
import StyledHamburger, { StyledHamburgerLine } from "./hamburger.styles";

export default function Hamburger() {
  const { toggleDisplay, display } = useNavStore();
  return (
    <StyledHamburger title="Open menu" aria-expanded={!display} onClick={toggleDisplay}>
      <StyledHamburgerLine>
      </StyledHamburgerLine>
      <StyledHamburgerLine>
      </StyledHamburgerLine>
      <StyledHamburgerLine>
      </StyledHamburgerLine>
    </StyledHamburger>
  )
}
