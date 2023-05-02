import Slider from 'react-slick'
import { type Settings } from 'react-slick'
import { Button } from '@chakra-ui/react'

interface CategoryLoaderProps {
  settings: Settings
  itemCount?: number
}
export default function CategoryLoader ({ settings, itemCount = 8 }: CategoryLoaderProps) {
  const itemArray = Array(itemCount).fill('')
  return (
    <Slider {...settings}>
      {itemArray.map(() => (
        <Button key={crypto.randomUUID()} letterSpacing="0" rounded="full" fontSize={{ base: 'small', md: 'md' }} className="skeleton" />
      ))}
    </Slider>
  )
}
