import { StyledDiv, StyledLink, StyledLogoImg, StyledStrong } from "@src/styles/globals";
import { StyledPageCopyright } from "./footer.styles";
import ProstudyLogo from "/prostudy.svg";
export default function Copyright() {
    return (
        <StyledDiv className="grid text-center justify-center items-center text-[17px] leading-[200%] tracking-[-0.01em] text-[#B4C7E7] md:flex">
            Powered by <StyledStrong className="font-bold">
                <StyledLink target="blank" href="https://infinity.uz">
                    <StyledLogoImg className="max-h-[40px] mt-2 object-cover" src={ProstudyLogo} width={200} height={30} alt="Infinity Prostudy. For more info, please visit infinity.uz" />
                </StyledLink>
            </StyledStrong>
        </StyledDiv>
    )
}
