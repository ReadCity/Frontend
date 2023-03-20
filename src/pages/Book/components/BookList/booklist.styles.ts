import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBookList = styled(motion.ul).attrs({
    className:
        "grid grid-cols-[repeat(auto-fit,min(401px,90%))] justify-center gap-x-8 gap-y-4",
})``;
export default StyledBookList;
