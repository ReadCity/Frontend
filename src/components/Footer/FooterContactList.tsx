import { Box, Link } from "@chakra-ui/react"
import { StyledFooterContactItem, StyledFooterContactItemHeading, StyledFooterContactItemInfo } from './footer.styles'

export default function FooterContactList () {
  return (
        <Box as="ul" className="grid gap-y-8 md:gap-y-0">
            <StyledFooterContactItem>
                <StyledFooterContactItemHeading>
                    Address :
                </StyledFooterContactItemHeading>
                <StyledFooterContactItemInfo>
                    <Link href="https://goo.gl/maps/EVqRx7RdF8BFr6t28">
                        Tashkent, Uzbekistan
                    </Link>
                </StyledFooterContactItemInfo>
            </StyledFooterContactItem>
            <StyledFooterContactItem>
                <StyledFooterContactItemHeading>
                    Mail :
                </StyledFooterContactItemHeading>
                <StyledFooterContactItemInfo>
                    <Link href="mailto:readcityuz@gmail.com">
                        readcityuz@gmail.com
                    </Link>
                </StyledFooterContactItemInfo>
            </StyledFooterContactItem>
            <StyledFooterContactItem>
                <StyledFooterContactItemHeading>
                    Phone :
                </StyledFooterContactItemHeading>
                <StyledFooterContactItemInfo>
                    <Link href="tel:+998977771188">
                        +998977771188
                    </Link>
                </StyledFooterContactItemInfo>
            </StyledFooterContactItem>
        </Box>
  )
}
