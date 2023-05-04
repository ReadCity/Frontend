import CategoryLoader from '../Loader/Category';
import useCategories from '@src/hooks/useCategories';
import { axiosClient, queryClient } from '@src/main';
import { Box, Container, Select as ChakraSelect, useColorMode } from '@chakra-ui/react';
import type { Settings } from 'react-slick';
import type { CategoryModel } from '@src/models/category';
import type { FilterProps } from "../Filter/Filter";
import { useMutation } from "@tanstack/react-query";

interface CategoryListProps extends FilterProps {

}

export default function CategoryList({ register, getValues, setValue, setLoading }: CategoryListProps) {
  const { categories } = useCategories();
  const { colorMode } = useColorMode();
  const { mutate, isLoading } = useMutation({
    mutationKey: ['books'],
    mutationFn: async (id?: CategoryModel['id'] | string) => {
      if (id === 'all') return await (await axiosClient.get('/book/all')).data.data.data
      else return (await axiosClient.get('/category/' + (id as string))).data
    },
    onSuccess(data, variables) {
      if ((variables as any) === 'all') return queryClient.setQueryData(['books'], data)
      queryClient.setQueryData(['books'], data.data.books)
    }
  });
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    swipe: true,
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }

  if (isLoading) return <CategoryLoader settings={settings} />
  return (
    <Container maxW="80%" mx="auto">
      <ChakraSelect {...register("category")} onChange={(e) => {
        setValue("query", "");
        mutate(e.target.value);
      }} bg="teal" color="white">
        Select category
        <Box as="option" color={colorMode === "dark" ? "white" : "teal"} value="all">All</Box>
        {categories.map(category => (
          <Box as="option" color={colorMode === "dark" ? "white" : "teal"} value={category.id} key={category.id}>
            {category.name}
          </Box>
        ))}
      </ChakraSelect>
    </Container>

  )
};
