import { motion } from "framer-motion";
import styled from "styled-components";

type StyledButtonTypes = {
    variant: "small" | "large";
    colorScheme: "primary" | "secondary" | "outlined";
};

type ColorSchemeTypes = {
    bg: string;
    color: string;
    hover?: string;
    active?: string;
};

type StyledFormControlTypes = {
    leftIcon: string;
};

type StyledTwoColsTypes = {
    gap?: string;
};

const COLOR_SCHEMES = {
    primary: {
        bg: "#1B3764",
        color: "#FFFFFF",
    } satisfies ColorSchemeTypes,
    secondary: {
        bg: "#FFCA42",
        color: "#1B3764",
    } satisfies ColorSchemeTypes,
    outlined: {
        bg: "#FFF",
        color: "#1B3764",
    } satisfies ColorSchemeTypes,
};

const defaultButtonClassName = "rounded-[5px]";

// Button
export const StyledButton = styled.button.attrs({
    className: defaultButtonClassName,
})<StyledButtonTypes>`
    padding: ${(props) =>
        props.variant === "small" ? "20px 56px" : "20px 96px"};
    border: ${({ colorScheme }) =>
        colorScheme === "outlined"
            ? `1px solid ${COLOR_SCHEMES["secondary"].bg}`
            : "1px solid transparent"};
    color: ${({ colorScheme }) => COLOR_SCHEMES[colorScheme].color};
    background-color: ${({ colorScheme }) => COLOR_SCHEMES[colorScheme].bg};
`;

// TODO: create a nice and customizable typography system
export const StyledPageTitle = styled(motion.h1).attrs({
    className: "text-[65px]",
})``;

export const StyledSectionTitle = styled(motion.h2).attrs({
    className: "text-[55px]",
})``;

export const StyledSectionSubtitle = styled(motion.h3).attrs({
    className: "text-[45px]",
})``;

export const StyledHeadingFour = styled(motion.h4).attrs({
    className: "text-[32px]",
})``;

// TODO: create a nice and customizable form components (inputs, labels) system
export const StyledFormControl = styled.input.attrs({
    className:
        "px-[59px] py-[15px] border border-solid border-[#DCE1E9] bg-no-repeat bg-[21px] :placeholder:text-[19px] :placeholder:leading-[180%] :placeholder:tracking-[-0.01em] :placeholder:text-[#969AA0]",
})<StyledFormControlTypes>`
    background-image: ${({ leftIcon }) => `url(${leftIcon})`};
    background-size: 24px;
`;

// TODO: create a two column system
export const StyledTwoCols = styled.div.attrs({
    className: "grid md:grid-cols-2",
})<StyledTwoColsTypes>`
    gap: ${({ gap }) => gap};
`;

