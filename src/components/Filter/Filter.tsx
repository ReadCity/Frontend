import CategoryList from '../CategoryList'
import type { FilterFields } from '@src/interfaces'
import { Box, Flex } from '@chakra-ui/react'
import { useForm, type UseFormGetValues, type UseFormRegister, type UseFormSetValue } from 'react-hook-form'
import { StyledContainer } from '@src/styles/globals'
import StyledFilter from './filter.styles'
import Search from "../Search/Search"
import { type Dispatch, type SetStateAction, useState } from "react"
export interface FilterProps {
  register: UseFormRegister<FilterFields>,
  getValues: UseFormGetValues<FilterFields>,
  setValue: UseFormSetValue<FilterFields>,
  isLoading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
}
export default function Filter() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { register, getValues, setValue } = useForm<FilterFields>({
    mode: 'all',
    defaultValues: {
      category: 'all'
    }
  });
  
  return (
    <StyledFilter pos="relative">
      <StyledContainer>
        <Box as="form">
          <Flex>
            <CategoryList isLoading={isLoading} setLoading={setLoading} setValue={setValue} getValues={getValues} register={register} />
            <Search isLoading={isLoading} setLoading={setLoading} setValue={setValue} getValues={getValues} register={register} />
          </Flex>
        </Box>
      </StyledContainer>
    </StyledFilter>
  )
}
