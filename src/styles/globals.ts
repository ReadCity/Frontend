import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

type StyledTextContainerTypes = {
    maxWidth: string;
    margin: string;
};

type StyledImgTypes = {
    width?: number;
    height: number;
};

export const COLORS = {
    primary: "#1B3764",
    secondary: "#FFCA42",
};

export const GlobalStyles = createGlobalStyle`
    


/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
}

body {
    margin: 0;
}

main {
    display: block;
}

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
}


pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

a {
    background-color: transparent;
}



abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
    font-weight: bolder;
}


code,
kbd,
samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
    font-size: 80%;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
    border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
    /* 1 */
    overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
    /* 1 */
    text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
    padding: 0.35em 0.75em 0.625em;
}


legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
    vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
    overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}


::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
}

details {
    display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
    display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
    display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
    display: none;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: inherit;
    height: 100%;
    scroll-behavior: smooth;
    background-color: #1B3764;
}

body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    font-family: "Roboto", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    font-weight: bold;
    line-height: 130%;
    letter-spacing: -0.015em;
    color: #1B3764;
}

button,input,textarea{
    font-family: inherit;
}

button {
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
}

img {
    display: block;
    height: auto;
}

ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
}

a {
    display: inline-block;
    text-decoration: none;
}

button,
input,
label {
    font-family: inherit;
    margin: 0;
    list-style: none;
}

.site-main {
    flex-grow: 1;
}
`;

export const StyledContainer = styled.div.attrs({
    className: "container w-[unset] mx-auto px-[20px]",
})``;
export const StyledMain = styled.main.attrs({ className: "site-main" })``;
export const StyledApp = styled.div.attrs({ className: "App" })``;
export const StyledTextContainer = styled.div<StyledTextContainerTypes>`
    max-width: ${(props) => props.maxWidth};
    margin: ${(props) => props.margin};
`;
export const StyledSectionTitle = styled.h2.attrs({
    className:
        "mb-12 font-bold text-[50px] leading-[110%] text-center tracking-[-0.02em] text-white font-bungee",
})``;
export const StyledSectionText = styled.p.attrs({
    className:
        "text-[19px] leading-[180%] text-center tracking-[-0.01em] text-[#B4C7E7]",
})``;
export const StyledUnderline = styled.div.attrs({
    className: "w-[55px] h-[1px] bg-mySecondary-100",
})``;
export const StyledDiv = styled.div``;
export const StyledSection = styled(motion.section).attrs({
    className: "relative py-12 px-8 text-white bg-myPrimary-100",
})``;
export const StyledImg = styled(motion.img).attrs({
    className: "max-w-full",
})<StyledImgTypes>`
    width:100%;
    object-fit:contain;
    height: ${(props) => props.height + "px"};
`;
export default GlobalStyles;
