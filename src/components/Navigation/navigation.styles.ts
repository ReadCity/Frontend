import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav.attrs({ className: "" })`
    &[aria-hidden="false"] ul {
        top: 115px;
    }
`;
export const StyledNavList = styled(motion.ul).attrs({
    className:
        "absolute z-[1] -top-[250px] right-0 bottom-0 left-0 grid gap-[40px] items-center justify-center h-max px-2 py-6  bg-myPrimary-100 lg:relative lg:flex lg:inset-0 lg:grid-flow-col lg:p-0 lg:z-[1] transition-all duration-300",
})``;
export const StyledNavItem = styled(motion.li)``;
export const StyledNavLink = styled(NavLink).attrs({
    className: "font-medium text-[17px] leading-[125%] text-white",
})`
    &.active {
        color: #ffca42;
    }
`;

export default StyledNav;
