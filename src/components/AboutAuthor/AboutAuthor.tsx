import { StyledContainer, StyledEmptySection, StyledText } from '@src/styles/globals'
import { StyledAboutAuthorName, StyledAboutAuthorText, StyledAboutAuthorTitle } from './about-author.styles'
import { type AuthorModel } from '@src/models/author'
import { Box, Image } from "@chakra-ui/react"
export default function AboutAuthor({ author }: { author: AuthorModel }) {
    return (
        <StyledEmptySection className="py-6 md:py-12 lg:py-18 xl:py-24 bg-about-100">
            <StyledContainer>
                <Box className="grid items-center gap-8 lg:grid-cols-2">
                    <Image width={500} height={500} src={author.img || 'https://via.placeholder.com/500x500'} alt="Author" />
                    <Box className="max-w-[500px]">
                        <StyledAboutAuthorTitle>
                            About Author
                        </StyledAboutAuthorTitle>
                        <StyledAboutAuthorText style={{ wordBreak: 'break-all', marginBottom: '2rem' }}>
                            {author.description}
                        </StyledAboutAuthorText>
                        <Box className="grid gap-4 py-8 px-5 bg-myPrimary-100 text-white">
                            <StyledAboutAuthorName>
                                {author.name}
                            </StyledAboutAuthorName>
                            <StyledText>
                                2023-04-06 - 2023-04-06
                            </StyledText>
                        </Box>
                    </Box>
                </Box>
            </StyledContainer>
        </StyledEmptySection>
    )
}
