import styled from "styled-components";

const StyledHamburger = styled.button.attrs({ className: "grid lg:hidden" })`
    
    gap: 5px;
    margin-left: auto;
    cursor: pointer;
    &[aria-expanded="true"] span:nth-child(2) {
        position: absolute;
        transform: scale(0);
    }
    &[aria-expanded="true"] span:nth-child(1) {
        transform: rotate(-135deg);
    }
    &[aria-expanded="true"] span:nth-child(3) {
        position: absolute;
        transform: rotate(135deg);
    }
`;

export const StyledHamburgerLine = styled.span`
    display: inline-block;
    position: relative;
    width: 30px;
    height: 3px;
    background-color: #fff;
    transition: transform 0.5s ease-in-out;
    pointer-events: none;
`;

export default StyledHamburger;
