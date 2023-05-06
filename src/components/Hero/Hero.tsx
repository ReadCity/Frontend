import { Box, Container, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider, { type Settings } from 'react-slick';
import { useState } from "react";
import BestSellerBooks from "/carousel/bestsellers.png";
import BestSellerBooks2 from "/carousel/bestsellers_2.webp";
import BestSellerBooks3 from "/carousel/bestsellers_3.webp";

// Settings for the slider
const settings: Settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    BestSellerBooks,
    BestSellerBooks2,
    BestSellerBooks3,
  ];

  return (
    <Container maxW="1240px">
      <Box
        rounded="2xl"
        overflow="hidden"
        mb="12"
        position={'relative'}
        height={'40vh'}
        width={'full'}>
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        {/* Slider */}
        <Slider {...settings} ref={(slider) => { setSlider(slider); }}>
          {cards.map((url, index) => (
            <Box
              key={crypto.randomUUID()}
              rounded="2xl"
              h="6xl"
              maxH="40vh"
              position="relative"
              backgroundRepeat="no-repeat"
              backgroundSize="cover
            "
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
