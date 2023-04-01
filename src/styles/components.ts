import { motion } from "framer-motion";
import styled from "styled-components";

type StyledButtonTypes = {
  variant: "small" | "large";
  colorScheme: "primary" | "secondary" | "outlined" | "contained";
};

type ColorSchemeTypes = {
  bg: string;
  color: string;
  hover?: {
    bg?: string;
    color?: string;
  };
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
    hover: {
      bg: "",
      color: "",
    },
  } satisfies ColorSchemeTypes,
  secondary: {
    bg: "#FFCA42",
    color: "#1B3764",
    hover: {
      bg: "",
      color: "",
    },
  } satisfies ColorSchemeTypes,
  outlined: {
    bg: "#FFF",
    color: "#1B3764",
    hover: {
      bg: "",
      color: "",
    },
  } satisfies ColorSchemeTypes,
  contained: {
    bg: "#FFCA42",
    color: "#1B3764",
    hover: {
      bg: "#1B3764",
      color: "#FFCA42",
    },
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
  transition: background 300ms ease-in-out, color 300ms ease-in-out,
    opacity 400ms ease-in-out;
  &:hover {
    color: ${({ colorScheme }) => COLOR_SCHEMES[colorScheme]?.hover?.color};
    background-color: ${({ colorScheme }) =>
      COLOR_SCHEMES[colorScheme]?.hover?.bg};
  }
  &:active {
    opacity: 0.7;
  }
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
