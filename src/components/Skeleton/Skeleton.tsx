import { StyledContainer, StyledDiv } from "@src/styles/globals"
import { HTMLProps } from "react"

interface Props extends HTMLProps<HTMLDivElement> {

}

function Skeleton({ children, ...reset }: Props) {
    return (
        <StyledDiv>
            <StyledContainer>
                
            </StyledContainer>
        </StyledDiv>
    )
}

export default Skeleton