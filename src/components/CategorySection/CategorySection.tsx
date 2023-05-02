import { StyledContainer, StyledSection } from '@src/styles/globals'
import { type HTMLAttributes, lazy } from 'react'
import CategoryList from '../CategoryList'

interface Props extends HTMLAttributes<HTMLDivElement> { };

export default function CategorySection ({ children, ...rest }: Props) {
  return (
    <StyledSection>
      <StyledContainer>
        <CategoryList />
      </StyledContainer>
    </StyledSection>
  )
}
