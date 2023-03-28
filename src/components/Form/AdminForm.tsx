import { type HTMLProps } from "react";
import { StyledForm, StyledFormButton, StyledFormInner, StyledFormTitle } from "./Form.styles";

interface AdminFormProps extends HTMLProps<HTMLFormElement> {
    title: string,
    submitHandler: (data: any) => void,
    id?: string
}

export function AdminForm({ title, children, submitHandler, id, ...rest }: AdminFormProps) {
    return (
        <>
            <StyledForm id={id} onSubmit={submitHandler}>
                <StyledFormInner>
                    <StyledFormTitle>
                        {title}
                    </StyledFormTitle>
                </StyledFormInner>
                {children}
                <StyledFormButton type="submit">
                    Save changes
                </StyledFormButton>
            </StyledForm>
        </>
    )
}
