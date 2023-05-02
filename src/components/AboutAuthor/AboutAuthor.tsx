import { StyledTwoCols } from '@src/styles/components'
import { StyledContainer, StyledDiv, StyledEmptySection, StyledImg, StyledText, StyledTextContainer } from '@src/styles/globals'
import AuthorImg from '/author.jpg'
import { StyledAboutAuthorName, StyledAboutAuthorText, StyledAboutAuthorTitle } from './about-author.styles'
import { Author } from '@src/interfaces'
import { type AuthorModel } from '@src/models/author'
export default function AboutAuthor ({ author }: { author: AuthorModel }) {
  return (
        <StyledEmptySection className="py-6 md:py-12 lg:py-18 xl:py-24 bg-about-100">
            <StyledContainer>
                <StyledDiv className="grid items-center gap-8 lg:grid-cols-2">
                    <StyledImg width={500} height={500} src={author.img || 'https://via.placeholder.com/500x500'} alt="Author" />
                    <StyledDiv className="max-w-[500px]">
                        <StyledAboutAuthorTitle>
                            About Author
                        </StyledAboutAuthorTitle>
                        <StyledAboutAuthorText style={{ wordBreak: 'break-all', marginBottom: '2rem' }}>
                            {author.description}
                        </StyledAboutAuthorText>
                        <StyledDiv className="grid gap-4 py-8 px-5 bg-myPrimary-100 text-white">
                            <StyledAboutAuthorName>
                                {author.name}
                            </StyledAboutAuthorName>
                            <StyledText>
                                2023-04-06 - 2023-04-06
                            </StyledText>
                        </StyledDiv>
                    </StyledDiv>
                </StyledDiv>
            </StyledContainer>
        </StyledEmptySection>
  )
}
