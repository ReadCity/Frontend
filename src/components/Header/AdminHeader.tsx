import { StyledContainer } from '@src/styles/globals'
import StyledHeader, {
  StyledHeaderInner,
  StyledHeaderWrapper,
  StyledMainPageLink,
  StyledSiteLogo
} from './header.styles'
import ReadLogo from '/read.webp'
import { lazy } from 'react'

const Hamburger = lazy(async () => await import('@components/Hamburger'))
const Navigation = lazy(async () => await import('@components/Navigation'))

export default function AdminHeader() {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledHeaderWrapper>
          <StyledHeaderInner>
            <StyledMainPageLink to="/">
              <StyledSiteLogo
                src={ReadLogo}
                width={90}
                height={40}
                alt="Read books"
                loading="eager"
                title="Readcity.uz's logo"
              />
            </StyledMainPageLink>
          </StyledHeaderInner>
          <Hamburger />
          <Navigation />
        </StyledHeaderWrapper>
      </StyledContainer>
    </StyledHeader>
  )
}
