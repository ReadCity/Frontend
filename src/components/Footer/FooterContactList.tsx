import { StyledLink, StyledList } from "@src/styles/globals";
import { StyledFooterContactItem, StyledFooterContactItemHeading, StyledFooterContactItemInfo } from "./footer.styles";

export default function FooterContactList() {
    return (
        <StyledList className="grid">
            <StyledFooterContactItem>
                <StyledFooterContactItemHeading>
                    Address :
                </StyledFooterContactItemHeading>
                <StyledFooterContactItemInfo>
                    <StyledLink href="https://goo.gl/maps/EVqRx7RdF8BFr6t28">
                        Tashkent, Uzbekistan
                    </StyledLink>
                </StyledFooterContactItemInfo>
            </StyledFooterContactItem>
            <StyledFooterContactItem>
                <StyledFooterContactItemHeading>
                    Mail :
                </StyledFooterContactItemHeading>
                <StyledFooterContactItemInfo>
                    <StyledLink href="mailto:khaitbekdev@gmail.com">
                        infinity@gmail.com
                    </StyledLink>
                </StyledFooterContactItemInfo>
            </StyledFooterContactItem>
            <StyledFooterContactItem>
                <StyledFooterContactItemHeading>
                    Phone :
                </StyledFooterContactItemHeading>
                <StyledFooterContactItemInfo>
                    <StyledLink href="tel:+998977771188">
                        +998977771188
                    </StyledLink>
                </StyledFooterContactItemInfo>
            </StyledFooterContactItem>
        </StyledList>
    )
}
