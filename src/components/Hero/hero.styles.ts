import { motion } from "framer-motion";
import styled from "styled-components";

type StyledHeroTypes = {
    navState: boolean;
};

const StyledHero = styled(motion.section).attrs({
    className:
        "relative py-16 pt-[480px] pb-[93px] bg-myPrimary-100 before:absolute before:top-0  before:left-1/2 before:w-[min(375px,100%)] before:h-[451px] before:bg-no-repeat before:-translate-x-1/2 lg:before:top-[10%] lg:py-[127px] lg:before:w-[540px] lg:before:h-[450px] lg:before:left-[75%] lg:before:bg-cover lg:before:bg-center lg:before:rounded-xl",
})<StyledHeroTypes>`
    z-index: ${(props) => (props.navState ? 1 : -1)};
    &::before {
        content: "";
        background-image: url("/hero/kid_reading_a_book.jpg");
    }
`;
export const StyledPageTitle = styled(motion.h1).attrs({
    className: "mb-8 text-white font-bungee",
})``;
export const StyledPageDescription = styled(motion.p).attrs({
    className:
        "mb-8 text-[19px] leading-[180%] tracking-[-0.01em] text-[#B4C7E7]",
})``;
export const StyledHeroWrapper = styled.div.attrs({
    className: "grid gap-16 md:grid-flow-col md:gap-8",
})``;
export const StyledHeroInner = styled.div.attrs({
    className: "",
})``;

export default StyledHero;
