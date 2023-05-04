import lazyload from '@src/utils/lazyload'
import { StyledContainer } from '@src/styles/globals'
import { Outlet, useNavigate } from 'react-router-dom'
import { lazy, useEffect } from "react";
const Dashboard = lazyload("../pages/Admin", "Dashboard");
const Header = lazy(async () => await import("@components/Header"));

export default function AdminLayout() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/admin/book");
    }, []);
    return (
        <div style={{ scrollPaddingTop: "200px" }}>
            <Header />
            <main className="mt-[150px]" >
                <Dashboard />
                <StyledContainer>
                    <Outlet />
                </StyledContainer>
            </main>
        </div>
    )
}
