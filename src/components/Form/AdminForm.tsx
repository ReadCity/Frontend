import { type HTMLProps } from 'react'
import { StyledAdminFormCloseButton, StyledForm, StyledFormButton, StyledFormInner, StyledFormTitle } from './Form.styles'
import { StyledDiv, StyledMain } from '@src/styles/globals'
import { StyledButton } from '@src/styles/components'
import { useNavigate } from 'react-router-dom'

interface AdminFormProps extends HTMLProps<HTMLFormElement> {
  title: string
  submitHandler: (data: any) => void
  id?: string
}

export function AdminForm ({ title, children, submitHandler, id, ...rest }: AdminFormProps) {
  const navigate = useNavigate()
  return (
        <>
            <StyledMain>
                <StyledDiv className="h-full flex items-center">
                    <StyledForm id={id} onSubmit={submitHandler}>
                        <StyledFormInner>
                            <StyledFormTitle>
                                {title}
                            </StyledFormTitle>
                        </StyledFormInner>
                        {children}
                        <StyledButton colorScheme="contained" variant="large">
                            Tasdiqlash
                        </StyledButton>
                    </StyledForm>
                    <StyledAdminFormCloseButton className="bg-myPrimary-100" type="button" onClick={() => { navigate('/admin') }}>

                    </StyledAdminFormCloseButton>
                </StyledDiv>
            </StyledMain>
        </>
  )
}
