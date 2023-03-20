import { StyledContainer, StyledDiv, StyledSection, StyledSectionText, StyledSectionTitle, StyledTextContainer, StyledUnderline } from "@src/styles/globals"

type ReusableHeroTypes = {
    title: string;
    description: string;
}

export default function ReusableHero({ title, description }: ReusableHeroTypes) {
    return (
        <StyledSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <StyledContainer>
                <StyledTextContainer maxWidth="550px" margin="0 auto">
                    <StyledSectionTitle>
                        {title}
                    </StyledSectionTitle>
                    <StyledDiv className="flex items-center justify-center mb-8">
                        <StyledUnderline>

                        </StyledUnderline>
                    </StyledDiv>
                    <StyledSectionText>
                        {description}
                    </StyledSectionText>
                </StyledTextContainer>
            </StyledContainer>
        </StyledSection>
    )
}
