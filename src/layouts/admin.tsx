import { StyledContainer } from '@src/styles/globals'
import { Outlet, useNavigate } from 'react-router-dom'
import {  useEffect } from "react";
import Header from "@src/components/Header";
import { Dashboard } from "@src/pages/Admin";

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
