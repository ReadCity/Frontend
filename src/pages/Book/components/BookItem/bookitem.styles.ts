import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBookItem = styled(motion.li).attrs({
  className: "flex flex-col justify-between px-6 py-6 rounded-lg",
})`
  cursor: pointer;
  box-shadow:0px 5px 15px 5px rgba(0,0,0,0.3);
  transition: all 300ms ease-in-out;

  & > span {
    display: flex !important;
    width: 100% !important;
  }
`;
export const StyledBookItemCover = styled(motion.img).attrs({
  className: "w-[300] max-h-[400px] mb-auto mx-auto mb-8 shadow-lg rounded-lg",
})`
  width: min(300px, 100%) !important;
`;
export const StyledBookItemTitle = styled(motion.h3).attrs({
  className:
    "overflow-hidden font-bold leading-[120%] tracking-[-0.02em] text-myPrimary-100",
})`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const StyledBookItemLink = styled(Link).attrs({
  className:
    "font-bold text-[1.2rem] md:text-[2rem] leading-[120%] tracking-[-0.02em] text-myPrimary-100",
})`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
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
