import useNavStore from "@src/features";
import { StyledButton } from "@src/styles/components";
import { StyledContainer, StyledTextContainer } from "@src/styles/globals";
import StyledHero, { StyledHeroInner, StyledHeroWrapper, StyledPageDescription, StyledPageTitle } from "./hero.styles";

export default function Hero() {
  const { display } = useNavStore();

  return (
    <StyledHero initial={{ opacity: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} navState={display}>
      <StyledContainer>
        <StyledHeroWrapper>
          <StyledHeroInner>
            <StyledTextContainer className="mx-auto grid place-items-center text-center lg:text-start lg:place-items-start lg:m-0" maxWidth="450px" margin="">
              <StyledPageTitle>
                Books are just TVs for smart kids
              </StyledPageTitle>
              <StyledPageDescription>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
              </StyledPageDescription>
              <StyledButton colorScheme="secondary" variant="large">
                Explore
              </StyledButton>
            </StyledTextContainer>
          </StyledHeroInner>
        </StyledHeroWrapper>
      </StyledContainer>
    </StyledHero>
  )
}