import { StyledDiv } from "@src/styles/globals";
import { PuffLoader } from "react-spinners";

export default function Loader() {
    return (
        <StyledDiv className="h-[100dvh] flex items-center justify-center">
            <PuffLoader size={140} color="#FFCA42" />
        </StyledDiv>
    )
}
