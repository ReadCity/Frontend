import { StyledText } from '@src/styles/globals'
import { type DetailedHTMLProps, type HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  inputError: string | undefined
}

export default function FormInput ({ inputError, children }: Props) {
  return (
        <>
            {children}
            {inputError
              ? <StyledText className="mx-4 text-2xl text-red-700">
                {inputError}
            </StyledText>
              : null}

        </>
  )
}
