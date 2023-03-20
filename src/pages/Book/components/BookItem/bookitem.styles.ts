import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBookItem = styled(motion.li).attrs({ className: "grid" })``;
export const StyledBookItemCover = styled(motion.img).attrs({
    className: "w-[300] h-[400px] mx-auto mb-8 shadow-lg px-6 py-6 rounded-lg",
})``;
export const StyledBookItemTitle = styled(motion.h3).attrs({
    className:
        "font-bold text-[2rem] leading-[120%] tracking-[-0.02em] text-myPrimary-100",
})``;
export const StyledBookItemLink = styled(Link).attrs({
    className:
        "font-bold text-[2rem] leading-[120%] tracking-[-0.02em] text-myPrimary-100",
})``;
export const StyledBookItemPrice = styled(motion.p).attrs({
    className:
        "font-bold text-[22px] leading-[180%] text-right tracking-[-0.01em] text-mySecondary-100",
})``;

export const StyledBookItemDescription = styled(motion.p).attrs({
    className:
        "overflow-hidden mb-6 text-[19px] leading-[180%] tracking-[-0.01em] text-[#969AA0] text-ellipsis",
})`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export default StyledBookItem;
