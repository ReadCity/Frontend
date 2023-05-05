import { StyledContainer } from '@src/styles/globals'
import { type HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {

}

function Skeleton ({ children, ...reset }: Props) {
  return (
    <div>
            <StyledContainer>

            </StyledContainer>
    </div>
  )
}

export default Skeleton
