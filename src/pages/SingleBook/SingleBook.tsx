import { useLocation } from "react-router-dom";
import { BookTypes } from "@src/types/book";
import { StyledPageDescription, StyledPageTitle } from "@components/Hero/hero.styles";
import { StyledContainer, StyledDiv, StyledImg, StyledTextContainer } from "@styles/globals";
import { StyledButton, StyledTwoCols } from "@src/styles/components";
import { StyledBookInfoText, StyledBookInfoTitle, StyledBookInfoWrapper, StyledSingleBook } from "./single-book.styles";

export default function SingleBook() {
    const { state } = useLocation();
    const { author, desc, id, img, pages, price, rating, release_year, title }: BookTypes = state;
    return (
        <StyledSingleBook>
            <StyledContainer>
                <StyledTwoCols gap="2rem">
                    <StyledTextContainer className="grid items-center justify-center place-content-center" margin="0" maxWidth="520px">
                        <StyledPageTitle>
                            {title}
                        </StyledPageTitle>
                        <StyledPageDescription>
                            {desc}
                        </StyledPageDescription>

                        <StyledDiv className="grid gap-3 sm:flex md:gap-4 lg:gap-8 items-center  mb-10">
                            <StyledBookInfoWrapper>
                                <StyledBookInfoTitle>
                                    Pages
                                </StyledBookInfoTitle>
                                <StyledBookInfoText>
                                    {pages}
                                </StyledBookInfoText>
                            </StyledBookInfoWrapper>
                            <StyledBookInfoWrapper>
                                <StyledBookInfoTitle>
                                    Rating
                                </StyledBookInfoTitle>
                                <StyledBookInfoText>
                                    {rating}
                                </StyledBookInfoText>
                            </StyledBookInfoWrapper>
                        </StyledDiv>
                        <StyledDiv className="flex gap-4 items-center justify-between">
                            <StyledButton colorScheme="secondary" variant="small">
                                Order Today
                            </StyledButton>
                        </StyledDiv>
                    </StyledTextContainer>
                    <StyledImg src={img} width={300} height={500} loading="lazy" alt={desc} />
                </StyledTwoCols>
            </StyledContainer>
        </StyledSingleBook>
    )
}
