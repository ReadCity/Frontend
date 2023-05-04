/* eslint-disable react/no-children-prop */
import { type HTMLChakraProps, Input, InputGroup, InputRightElement, useColorMode } from '@chakra-ui/react';
import type { BookModel } from "@src/models/book"
import { SearchIcon } from '@chakra-ui/icons'
import { useMutation } from "@tanstack/react-query"
import { axiosClient, queryClient } from "@src/main"
import debounce from "@src/utils/debounce";
import type { FilterProps } from "../Filter/Filter";
import { useNavigate } from "react-router-dom";
interface SearchProps extends HTMLChakraProps<'input'>, FilterProps {

}

export default function Search({ register, getValues }: SearchProps) {
  const { colorMode } = useColorMode();
  const navigate = useNavigate()
  const handleInputChange = debounce(async () => {
    const query = getValues("query") as string;
    navigate("/books/query/" + query);
  }, 1000);
  return (
    <InputGroup>
      <Input onChangeCapture={e => {
        handleInputChange();
      }} color={colorMode === "dark" ? "white" : "dark"} colorScheme="teal" autoComplete="off" variant="filled" {...register('query')} placeholder="Search..." />
      <InputRightElement children={<SearchIcon color={colorMode === "dark" ? "white" : "gray"} />} />
    </InputGroup>
  )
}
