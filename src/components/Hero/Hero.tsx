// import {
//   Stack,
//   Flex,
//   Box,
//   Heading,
//   Text,
//   Button,
//   Image,
//   Icon,
//   type IconProps,
//   useColorModeValue,
//   Link,
//   useColorMode
// } from '@chakra-ui/react'
// import { StyledContainer } from '@src/styles/globals'
// import { motion } from 'framer-motion'
// import HeroBookCollage from '/hero/hero_book_collage.png'

// export default function CallToActionWithVideo() {
//   const { colorMode } = useColorMode();
//   const isDarkMode = colorMode === "dark";
//   return (
//     <StyledContainer>
//       <Stack
//         align={'center'}
//         spacing="24"
//         py={{ base: 8, md: 12, lg: 16, xl: 20 }}
//         direction={{ base: 'column', md: 'row' }}
//       >
//         <Stack as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//           transition="1s" flex={1} textAlign={['center', 'center', 'left']} spacing={{ base: 5, md: 10 }}>
//           <Heading
//             lineHeight={1.1}
//             fontWeight={600}
//             fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
//             <Text
//               as={'span'}
//               position={'relative'}
//               color="teal"
//               _after={{
//                 content: "''",
//                 width: 'full',
//                 height: '30%',
//                 position: 'absolute',
//                 bottom: 1,
//                 left: 0,
//                 bg: '',
//                 zIndex: -1
//               }}>
//               To succeed,
//             </Text>
//             <br />
//             <Text as={'span'} color={useColorModeValue('black', 'white')}>
//               you must read!
//             </Text>
//           </Heading>
//           <Text fontSize={{
//             base: 'lg',
//             md: 'xl'
//           }} color={'gray.500'}>
//             I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.
//           </Text>
//           <Stack
//             spacing={{ base: 4, sm: 6 }}
//             direction="row">
//             <Button
//               as={Link}
//               mx={['auto', 'auto', '0']}
//               href="#books"
//               rounded={'full'}
//               size={'lg'}
//               fontWeight={'normal'}
//               colorScheme="teal"
//             >
//               Get started
//             </Button>

//           </Stack>
//         </Stack>
//         <Flex
//           flex={1}
//           justify={'center'}
//           align={'center'}
//           position={'relative'}
//           w={'full'}
//         >
//           <Blob
//             w="100%"
//             h="100%"
//             position={'absolute'}
//             top={'-20%'}
//             left={0}
//             zIndex={-1}
//             color="teal"
//           />
//           <Box
//             position={'relative'}
//             maxH={'500px'}
//             rounded={'2xl'}
//             width={'full'}>

//             <Image
//               alt={'Hero Image'}
//               fit={'contain'}
//               align={'center'}
//               w={['60%', '300px', '350px', '100%']}
//               h={['60%', '300px', '350px', '100%']}
//               mx={['auto', 'auto', '0px']}
//               src={HeroBookCollage}
//             />
//           </Box>
//         </Flex>
//       </Stack>
//     </StyledContainer>
//   )
// }

// export const Blob = (props: IconProps) => {
//   return (
//     <Icon
//       width={'100%'}
//       viewBox="0 0 578 440"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
//         fill="currentColor"
//       />
//     </Icon>
//   )
// }

import { Box, Container, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider, { type Settings } from 'react-slick';
import { useState } from "react";
import BestSellerBooks from "/carousel/bestsellers.png";
import BestSellerBooks2 from "/carousel/bestsellers_2.webp";
import BestSellerBooks3 from "/carousel/bestsellers_3.webp";
import KidsBooks from "/carousel/family-and-friends-1-1.jpg";
import VocabularyBooks from "/carousel/essential_words.webp";

// Settings for the slider
const settings: Settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  // slidesToScroll: 1,
  centerMode: true,
  centerPadding: '100px'
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
    KidsBooks,
    BestSellerBooks2,
    // VocabularyBooks,
    BestSellerBooks3,
  ];

  return (
    <Container maxW="1240px">
      <Box
        rounded="2xl"
        overflow="hidden"
        mb="12"
        position={'relative'}
        height={'600px'}
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
              key={index}
              rounded="2xl"
              h="6xl"
              maxH="600px"
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
