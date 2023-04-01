import { StyledTwoCols } from "@src/styles/components";
import { StyledContainer, StyledDiv } from "@src/styles/globals";
import { StyledMainPageLink, StyledSiteLogo } from "../Header/header.styles";
import Copyright from "./Copyright";
import StyledFooter, { StyledFooterContactTitle } from "./footer.styles";
import FooterContactList from "./FooterContactList";
import ReadLogo from "/read.webp";

export default function Footer() {
    return (
        <StyledFooter>
            <StyledContainer>
                <StyledDiv className="grid gap-4 justify-center mb-4 sm:flex sm:justify-between lg:gap-4">
                    <StyledMainPageLink to="/">
                        <StyledSiteLogo
                            src={ReadLogo}
                            width={90}
                            height={40}
                            alt="Read books"
                            loading="lazy"
                            title="Readcity.uz's logo"
                        />
                    </StyledMainPageLink>
                    <StyledDiv className="grid gap-3">
                        <StyledFooterContactTitle>
                            Keep in touch
                        </StyledFooterContactTitle>
                        <FooterContactList />
                    </StyledDiv>
                </StyledDiv>
                <StyledDiv className="w-full h-[1px] mb-4 bg-slate-500" />
                <Copyright />
            </StyledContainer>
        </StyledFooter>
    )
}
