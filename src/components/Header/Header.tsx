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
import ReadLogo from "/read.webp";
import TelegramLogo from "/social/telegram.svg";
import InstaLogo from "/social/insta.svg";
import YoutubeLogo from "/social/youtube.svg";
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
                                loading="eager"
                                title="Readcity.uz's logo"
                            />
                        </StyledMainPageLink>

                        <StyledHeaderSocialMedia>
                            <StyledHeaderSocialItem>
                                <StyledHeaderSocialLink
                                    href="https://telegram.org"
                                    target="blank"
                                >
                                    <StyledHeaderSocialLogo
                                        width={10}
                                        src={TelegramLogo}
                                        height={20}
                                        alt="Our Telegram"
                                        loading="eager"
                                        title="Readcity.uz's Telegram"
                                    />
                                </StyledHeaderSocialLink>
                            </StyledHeaderSocialItem>
                            <StyledHeaderSocialItem>
                                <StyledHeaderSocialLink
                                    href="https://youtube.com"
                                    target="blank"
                                >
                                    <StyledHeaderSocialLogo
                                        width={10}
                                        src={YoutubeLogo}
                                        height={20}
                                        alt="Our youtube"
                                        loading="eager"
                                        title="Readcity.uz's Youtube"
                                    />
                                </StyledHeaderSocialLink>
                            </StyledHeaderSocialItem>
                            <StyledHeaderSocialItem>
                                <StyledHeaderSocialLink
                                    href="https://instagram.com"
                                    target="blank"
                                >
                                    <StyledHeaderSocialLogo
                                        width={10}
                                        src={InstaLogo}
                                        height={20}
                                        alt="Our Instagram"
                                        loading="eager"
                                        title="Readcity.uz's Instagram"
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
