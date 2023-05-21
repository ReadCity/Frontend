import CategoryLoader from '../Loader/Category';
import useCategories from '@src/hooks/useCategories';
import { Button, Container } from '@chakra-ui/react';
import Slider, { type Settings } from 'react-slick';
import { useNavigate, useParams } from "react-router-dom"

export default function CategoryCarousel() {
  const params = useParams();
  const navigate = useNavigate();
  const { categories } = useCategories()

  const settings: Settings = {
    // dots: true,
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
      <Container id="categoryContainer" maxW="1240px" mt="4" mb="8" mx="auto">
        <Slider data-carousel="filter" {...settings}>
          {categories.map(category => (
            <Button isActive={params?.id as string === String(category.id)} h="unset" variant="solid" fontSize={{ base: 'small', md: 'lg' }} onClick={() => {
              navigate(`/books/category/${category.id}`)
            }} colorScheme="teal" w="full" p="0" py={["2"]} textTransform="capitalize" letterSpacing="0" key={category.id} fontWeight="bold" rounded="full">
              {category.name}
            </Button>
          ))}
        </Slider>
      </Container>
    )
  }
  return <CategoryLoader settings={settings} />
};
