import { StyledMain } from "@src/styles/globals";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Footer = lazy(() => import("@components/Footer"));
const Header = lazy(() => import("@components/Header"));

export default function RootLayout() {
    return (
        <>
            <Header />
            <StyledMain>
                <Outlet />
            </StyledMain>
            <Footer />
        </>
    )
}
