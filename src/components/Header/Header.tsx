import { StyledContainer } from "@src/styles/globals";
import StyledHeader, {
    StyledHeaderInner,
    StyledHeaderSocialItem,
    StyledHeaderSocialLink,
    StyledHeaderSocialLogo,
    StyledHeaderSocialMedia,
    StyledHeaderWrapper,
    StyledMainPageLink,
    StyledSiteLogo,
} from "./header.styles";
import ReadLogo from "/read.png";
import facebookLogo from "/social/facebook.svg";
import twitterLogo from "/social/twitter.svg";
import linkedinLogo from "/social/facebook.svg";
import { lazy } from "react";

const Hamburger = lazy(() => import("@components/Hamburger"));
const Navigation = lazy(() => import("@components/Navigation"));

export default function Header() {
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledHeaderWrapper>
                    <StyledHeaderInner>
                        <StyledMainPageLink to="/">
                            <StyledSiteLogo
                                src={ReadLogo}
                                width={90}
                                height={40}
                                alt="Read books"
                            />
                        </StyledMainPageLink>

                        <StyledHeaderSocialMedia>
                            <StyledHeaderSocialItem>
                                <StyledHeaderSocialLink
                                    href="https://facebook.com"
                                    target="blank"
                                >
                                    <StyledHeaderSocialLogo
                                        width={10}
                                        src={facebookLogo}
                                        height={20}
                                        alt="Our Facebook"
                                    />
                                </StyledHeaderSocialLink>
                            </StyledHeaderSocialItem>
                            <StyledHeaderSocialItem>
                                <StyledHeaderSocialLink
                                    href="https://twitter.com"
                                    target="blank"
                                >
                                    <StyledHeaderSocialLogo
                                        width={10}
                                        src={twitterLogo}
                                        height={20}
                                        alt="Our Twitter"
                                    />
                                </StyledHeaderSocialLink>
                            </StyledHeaderSocialItem>
                            <StyledHeaderSocialItem>
                                <StyledHeaderSocialLink
                                    href="https://linkedin.com"
                                    target="blank"
                                >
                                    <StyledHeaderSocialLogo
                                        width={10}
                                        src={linkedinLogo}
                                        height={20}
                                        alt="Our LinkedIn"
                                    />
                                </StyledHeaderSocialLink>
                            </StyledHeaderSocialItem>
                        </StyledHeaderSocialMedia>
                    </StyledHeaderInner>
                    <Hamburger />
                    <Navigation />
                </StyledHeaderWrapper>
            </StyledContainer>
        </StyledHeader>
    );
}
