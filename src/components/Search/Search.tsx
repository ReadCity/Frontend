import { type HTMLChakraProps, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { type UseFormRegister } from 'react-hook-form'
import { type FilterFields } from '@src/interfaces'
import { SearchIcon } from '@chakra-ui/icons'
interface SearchProps extends HTMLChakraProps<'input'> {
  register: UseFormRegister<FilterFields>
}

export default function Search ({ register }: SearchProps) {
  return (
    <InputGroup>
      <Input color="white" autoComplete="off" variant="flushed" {...register('query')} placeholder="Search..." />
      <InputRightElement children={<SearchIcon color="white" />} />
    </InputGroup>
  )
}
