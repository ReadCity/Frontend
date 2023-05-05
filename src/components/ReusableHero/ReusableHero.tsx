import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { StyledContainer, sectionText, sectionTitle, StyledTextContainer, StyledUnderline } from '@src/styles/globals'
import { type HTMLMotionProps, motion } from 'framer-motion'
import { HTMLProps, ReactNode } from 'react'
import { StyledReusableHero } from './reusable-hero.styles'

interface ReusableHeroTypes extends HTMLMotionProps<'section'> {
  title: string
  subtitle?: string
  description: string
}

export default function ReusableHero ({ title, subtitle, description, className, ...rest }: ReusableHeroTypes) {
  return (
        <StyledReusableHero className="py-24" transition={{ duration: 1000 }}>
            <StyledContainer>
                <Grid maxW="650px" mx="auto" gap="4" textAlign="center">
                    <Heading className="bg-gradient bg-clip-text font-title " color="transparent" textAlign="center" fontSize={['2rem', '4rem', '6rem']}>
                        {title}
                    </Heading>
                    {subtitle && (
                        <Heading as="h3">
                            {subtitle}
                        </Heading>
                    )}
                    <Box maxW="90%" mx="auto">
                        <Text color="gray.500" className="text-xl leading-7">
                            {description}
                        </Text>
                    </Box>
                </Grid>
            </StyledContainer>
        </StyledReusableHero>
  )
}
