import { StyledContainer } from '@src/styles/globals'
import { type HTMLAttributes, lazy } from 'react'
import CategoryList from '../CategoryList'

interface Props extends HTMLAttributes<HTMLDivElement> { };

export default function CategorySection ({ children, ...rest }: Props) {
  return (
    <section>
      <StyledContainer>
        {/* <CategoryList /> */}
      </StyledContainer>
    </section>
  )
}
