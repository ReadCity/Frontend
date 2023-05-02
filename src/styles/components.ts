import { motion } from 'framer-motion'
import styled from 'styled-components'

interface StyledButtonTypes {
  variant: 'small' | 'large'
  colorScheme: 'primary' | 'secondary' | 'outlined' | 'contained'
}

interface ColorSchemeTypes {
  bg: string
  color: string
  hover?: {
    bg?: string
    color?: string
  }
  active?: string
}

interface StyledFormControlTypes {
  leftIcon: string
}

interface StyledTwoColsTypes {
  gap?: string
}

const COLOR_SCHEMES = {
  primary: {
    bg: '#1B3764',
    color: '#FFFFFF',
    hover: {
      bg: '',
      color: ''
    }
  } satisfies ColorSchemeTypes,
  secondary: {
    bg: '#FFCA42',
    color: '#1B3764',
    hover: {
      bg: '',
      color: ''
    }
  } satisfies ColorSchemeTypes,
  outlined: {
    bg: '#FFF',
    color: '#1B3764',
    hover: {
      bg: '',
      color: ''
    }
  } satisfies ColorSchemeTypes,
  contained: {
    bg: '#FFCA42',
    color: '#1B3764',
    hover: {
      bg: '#1B3764',
      color: '#FFCA42'
    }
  } satisfies ColorSchemeTypes
}

const defaultButtonClassName = 'rounded-[5px]'

// Button
export const StyledButton = styled.button.attrs({
  className: defaultButtonClassName
})<StyledButtonTypes>`
  position: relative;
  padding: ${(props) => (props.variant === 'small' ? '1em 1.2em' : '1em 4em')};
  border: ${({ colorScheme }) =>
    colorScheme === 'outlined'
      ? `1px solid ${COLOR_SCHEMES.secondary.bg}`
      : '1px solid transparent'};
  color: ${({ colorScheme }) => COLOR_SCHEMES[colorScheme].color};
  background-color: ${({ colorScheme }) => COLOR_SCHEMES[colorScheme].bg};
  transition: background 300ms ease-in-out, color 300ms ease-in-out,
    opacity 400ms ease-in-out;
  &:is(:hover, :active, :focus) {
    color: ${({ colorScheme }) => COLOR_SCHEMES[colorScheme]?.hover?.color};
    background-color: ${({ colorScheme }) =>
      COLOR_SCHEMES[colorScheme]?.hover?.bg};
  }
  border-width: 3px;
  border-color: ${({ colorScheme }) => COLOR_SCHEMES[colorScheme].bg};
  /* text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor; */
  box-shadow: inset 0 0 0.5em 0
      ${({ colorScheme }) => COLOR_SCHEMES[colorScheme].bg},
    0 0 0.5em 0 ${({ colorScheme }) => COLOR_SCHEMES[colorScheme].color};
`

export const StyledPageTitle = styled(motion.h1).attrs({
  className: 'text-[65px]'
})``

export const StyledSectionTitle = styled(motion.h2).attrs({
  className: 'text-[55px] bg-gradient'
})``

export const StyledSectionSubtitle = styled(motion.h3).attrs({
  className: 'text-[45px]'
})``

export const StyledHeadingFour = styled(motion.h4).attrs({
  className: 'text-[32px]'
})``

export const StyledFormControl = styled.input.attrs({
  className:
    'px-[59px] py-[15px] border border-solid border-[#DCE1E9] bg-no-repeat bg-[21px] :placeholder:text-[19px] :placeholder:leading-[180%] :placeholder:tracking-[-0.01em] :placeholder:text-[#969AA0]'
})<StyledFormControlTypes>`
  background-image: ${({ leftIcon }) =>
    leftIcon ? `url(${leftIcon})` : 'none'};
  background-size: 24px;
`

export const StyledTwoCols = styled.div.attrs({
  className: 'grid md:grid-cols-2'
})<StyledTwoColsTypes>`
  gap: ${({ gap }) => gap};
`

// shadow thing
export const StyledShadow = styled.div<{
  colorScheme?: 'primary' | 'secondary'
}>`
  width: min(100%, 300px);
  height: 300px;
  background-color: ${({ colorScheme }) =>
    colorScheme === 'primary' ? '#1B3764' : '#ffca42'};
  filter: blur(142px);
  pointer-events: none;
`
