import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBookList = styled(motion.ul).attrs({
    className:
        "grid grid-cols-[repeat(auto-fit,min(401px,90%))] justify-center place-content-center gap-x-16 gap-y-8",
})``;
export default StyledBookList;
