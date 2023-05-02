import styled from 'styled-components'
export const StyledOrderDialog = styled.dialog`
  width: min(500px, 90%);
  padding-inline: 1rem;
  border-radius: 20px;
  ::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }
  & input {
    padding-inline: 20px;
  }
`
export const StyledOrderDialogTitle = styled.h3.attrs({
  className: 'mb-8 text-xl text-center md:text-2xl lg:text-4xl bg-gradient'
})`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
