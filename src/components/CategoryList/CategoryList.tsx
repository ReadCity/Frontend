import CategoryLoader from '../Loader/Category'
import useCategories from '@src/hooks/useCategories'
import { useMutation } from '@tanstack/react-query'
import { axiosClient, queryClient } from '@src/main'
import { Button, Container, Flex, Tag, TagCloseButton, TagLabel, useColorMode } from '@chakra-ui/react'
import Slider, { type Settings } from 'react-slick'
import type { CategoryModel } from '@src/models/category'
import { useState } from "react"

export default function CategoryList() {
  const [activeCategory, setActiveCategory] = useState<string>();
  const { colorMode } = useColorMode();
  const { categories } = useCategories()
  const { mutate } = useMutation({
    mutationKey: ['books'],
    mutationFn: async (id?: CategoryModel['id'] | string) => {
      if (id === 'all') return await (await axiosClient.get('/book/all')).data.data.data
      else return (await axiosClient.get('/category/' + (id as string))).data
    },
    onSuccess(data, variables) {
      if ((variables as any) === 'all') return queryClient.setQueryData(['books'], data)
      queryClient.setQueryData(['books'], data.data.books)
    }
  })
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
  if (categories.length > 1) {
    return (
      <Container maxW="80%" mx="auto">
        <Slider data-carousel="filter" {...settings}>
          {categories.map(category => (
            <Button h="unset" fontSize={{ base: 'small', md: 'md' }} onClick={() => {
              mutate(category.id);
              setActiveCategory(category.name);
            }} colorScheme="teal" p="0" py={["2"]} textTransform="capitalize" letterSpacing="0" key={category.id} fontWeight="bold" rounded="full">
              {category.name}
            </Button>
          ))}
        </Slider>
        {activeCategory && activeCategory !== "All" ? (
          <Flex justify="center" align="center">
            <Tag as="button" textTransform="none" mt="8" rounded="full" colorScheme="teal">
              <TagLabel>
                {activeCategory}
              </TagLabel>
              <TagCloseButton onClick={() => {
                mutate("all");
                setActiveCategory(undefined);
              }} />
            </Tag>
          </Flex>
        ) : null}
      </Container>

    )
  }
  return <CategoryLoader settings={settings} />
};
