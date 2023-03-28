import { ReactNode } from "react"
import { StyledForm, StyledFormButton, StyledFormInner, StyledFormText, StyledFormTitle } from "./Form.styles"
import { Link } from "react-router-dom"

type MyFormProps = {
    title: string,
    secondary_link: string,
    children: ReactNode,
    submitHandler: (data: any) => void
}

export default function MyForm({ title, secondary_link, children, submitHandler }: MyFormProps) {
    return (
        <StyledForm onSubmit={submitHandler}>
            <StyledFormInner>
                <StyledFormTitle>
                    {title}
                </StyledFormTitle>
                <StyledFormText>
                    {secondary_link === "Sign in" ? `Already have an account?` : `Do not you have an account?`}
                    <Link to={secondary_link === "Sign in" ? "/login" : "/register"}>
                        {secondary_link}
                    </Link>
                </StyledFormText>
            </StyledFormInner>
            {children}
            <StyledFormButton type="submit">Next Step</StyledFormButton>
        </StyledForm>
    )
}
