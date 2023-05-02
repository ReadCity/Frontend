import { StyledShadow } from '@src/styles/components'
import { type HTMLAttributes } from 'react'

interface TextShadowProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: 'primary' | 'secondary'
}

export default function TextShadow (props: TextShadowProps) {
  const { colorScheme } = props
  return (
        <StyledShadow colorScheme={colorScheme} {...props} />
  )
}
