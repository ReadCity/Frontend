import { StyledContainer, StyledDiv, StyledSection, StyledSectionText, StyledSectionTitle, StyledTextContainer, StyledUnderline } from "@src/styles/globals"
import { HTMLMotionProps } from "framer-motion";
import { HTMLProps, ReactNode } from "react";

interface ReusableHeroTypes extends HTMLMotionProps<"section"> {
    title: string;
    description: string;
}

export default function ReusableHero({ title, description,className, ...rest }: ReusableHeroTypes) {
    return (
        <StyledSection {...rest} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
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
