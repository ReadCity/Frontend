import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  max-width: 330px;
  margin: 0 auto;
  padding-block: 34px 134px;
  place-content: center;
`

export const StyledFormInner = styled.div`
  margin-bottom: 21px;
`

export const StyledFormWrapper = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 34px;
`

export const StyledFormTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: #000;
`

export const StyledFormText = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #000;

  a {
    color: #549ff9;
  }
`
export const StyledFormInput = styled.input`
  padding: 16px 10px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  &:placeholder {
    font-size: 14px;
    line-height: 16px;
    color: var(--clr-neutral-500);
  }
`

export const StyledFormSelect = styled.select`
  padding: 16px 10px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  &:placeholder {
    font-size: 14px;
    line-height: 16px;
    color: var(--clr-neutral-500);
  }
  background-color: #f3f6f9;
`

export const StyledFormOption = styled.option``

export const StyledImageUploader = styled.section`
  display: grid;
  padding: 136px 0;
  place-content: center;
  gap: 1rem;
  background-color: var(--clr-neutral-900);
`
export const StyledImageUploaderLabel = styled.label`
  display: grid;
  place-items: center;
  max-width: 315px;
  max-height: 428px;
  gap: 0.5rem;
  margin-inline: auto;
  padding: 161px 73px;
  border: 1px dashed rgba(0, 0, 0, 0.3);
  border-radius: 17px;
  color: var(--clr-neutral-500);
  background-color: var(--clr-neutral-800);
`
export const StyledUploadedImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`

export const StyledPlusIcon = styled.img`
  width: 62px;
  height: 62px;
`

export const StyledFormButton = styled.button`
  padding: 20px;
  color: var(--clr-neutral-100);
  border-radius: 100vmax;
  background-color: var(--clr-darkblue-800);
`

export const StyledAdminFormCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  background-position: center;
  background-size: 10px;
  background-image: url("/close.svg");
  background-repeat: no-repeat;
`
