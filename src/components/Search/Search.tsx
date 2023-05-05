/* eslint-disable react/no-children-prop */
import { Input, InputGroup, InputRightElement, useColorMode } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import debounce from "@src/utils/debounce";

export default function Search() {
  const { register, getValues } = useForm({
  })
  const { colorMode } = useColorMode();
  const navigate = useNavigate()
  const handleInputChange = debounce(async () => {
    const query = getValues("query") as string;
    console.log(query);
    if (!query) { navigate("/"); return; }
    navigate("/books/query/" + query);
  }, 1000);
  return (
    <InputGroup>
      <Input onChangeCapture={e => {
        handleInputChange();
      }} {...register("query")} color={colorMode === "dark" ? "white" : "dark"} colorScheme="teal" autoComplete="off" variant="filled" placeholder="Search..." />
      <InputRightElement children={<SearchIcon color={colorMode === "dark" ? "white" : "gray"} />} />
    </InputGroup>
  )
}
