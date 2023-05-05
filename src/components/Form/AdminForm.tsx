import { type HTMLProps } from 'react'
import { StyledAdminFormCloseButton, StyledForm, StyledFormButton, StyledFormInner, StyledFormTitle } from './Form.styles'
import { div, StyledMain } from '@src/styles/globals'
import { StyledButton } from '@src/styles/components'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from "@chakra-ui/react"

interface AdminFormProps extends HTMLProps<HTMLFormElement> {
    title: string
    submitHandler: (data: any) => void
    id?: string;
    isLoading?: boolean
}

export function AdminForm({ title, children, submitHandler, id, isLoading = false, ...rest }: AdminFormProps) {
    const navigate = useNavigate()
    return (
        <>
            <StyledMain>
                <Box className="h-full flex items-center">
                    <StyledForm id={id} onSubmit={submitHandler}>
                        <StyledFormInner>
                            <StyledFormTitle>
                                {title}
                            </StyledFormTitle>
                        </StyledFormInner>
                        {children}
                        <Button isLoading={isLoading} type="submit" mt="4" colorScheme="teal">
                            Tasdiqlash
                        </Button>
                    </StyledForm>
                    <StyledAdminFormCloseButton className="bg-myPrimary-100" type="button" onClick={() => { navigate(-1) }}>

                    </StyledAdminFormCloseButton>
                </Box>
            </StyledMain>
        </>
    )
}
