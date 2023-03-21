import { motion } from "framer-motion";
import styled from "styled-components";

const StyledHeader = styled.header.attrs({ className: "relative py-10 bg-myPrimary-100" })`
`;

export const StyledHeaderWrapper = styled.div.attrs({
    className: "flex items-center justify-between",
})`
`;
export const StyledHeaderInner = styled.div.attrs({ className: "flex items-center" })``;

export const StyledMainPageLink = styled.a``;

export const StyledSiteLogo = styled.img.attrs({
    className: "w-[90px] h-[35px] mr-8 md:w-[118px]",
})`
    object-fit:cover;
`;

export const StyledHeaderSocialMedia = styled(motion.ul).attrs({
    className: "hidden items-center gap-[10px] md:flex",
})``;

export const StyledHeaderSocialItem = styled(motion.li).attrs({
    className: "",
})``;
export const StyledHeaderSocialLink = styled(motion.a).attrs({
    className: "flex items-center justify-center",
})``;
export const StyledHeaderSocialLogo = styled(motion.img).attrs({
    className: "w-[45px] h-[45px]",
})``;

export default StyledHeader;
