import { StyledContainer } from '@src/styles/globals'
import { type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> { };

export default function CategorySection ({ children, ...rest }: Props) {
  return (
    <section>
      <StyledContainer>
      </StyledContainer>
    </section>
  )
}
