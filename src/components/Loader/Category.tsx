import Slider from 'react-slick'
import { type Settings } from 'react-slick'
import { Button, Container, Select } from '@chakra-ui/react'

interface CategoryLoaderProps {
  settings: Settings
  itemCount?: number
}
export default function CategoryLoader ({ settings, itemCount = 8 }: CategoryLoaderProps) {
  const itemArray = Array(itemCount).fill('')
  return (
    <Container maxW="1240px" my="4">
      <Slider data-carousel="filter" {...settings}>
        {itemArray.map(() => (
          <Button key={crypto.randomUUID()} letterSpacing="0" rounded="full" fontSize={{ base: 'small', md: 'md' }} className="skeleton" />
        ))}
      </Slider>
    </Container>
  )
}
