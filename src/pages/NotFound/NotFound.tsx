import { StyledDiv, StyledSection } from "@src/styles/globals";
import NotFoundImg from "/not-found/404.svg";
export default function NotFound() {
    return (
        <StyledSection>
            <StyledDiv className="flex items-center justify-center">
                <img className="w-1/2 h-full" width={300} height={500} src={NotFoundImg} alt="The page you're looking for is not found..." />
            </StyledDiv>
        </StyledSection>
    )
}