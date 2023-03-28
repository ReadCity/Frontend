import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSingleBook = styled(motion.section).attrs({
    className: "relative mb-12 py-6 pb-[93px] bg-myPrimary-100",
})``;

export const StyledBookInfoWrapper = styled(motion.div).attrs({
    className: "relative grid gap-1 mr-20 pl-6 before:absolute before:top-[5px] before:left-0 before:w-[16px] before:h-[16px] before:bg-mySecondary-100 before:rounded-[50%]",
})`
    &::before {
        content: "";
    }
    list-style: disc;
`;

export const StyledBookInfoTitle = styled(motion.h3).attrs({
    className: "font-bold text-2xl leading-[120%] text-white",
})`
    list-style: disc;
`;

export const StyledBookInfoText = styled(motion.p).attrs({
    className: "text-lg leading-[170%] tracking-[-0.01em] text-[#B4C7E7]",
})`
    list-style: disc;
`;
