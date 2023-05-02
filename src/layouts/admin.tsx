import lazyload from '@src/utils/lazyload'
import { lazy } from 'react'
import { StyledContainer, StyledDiv } from '@src/styles/globals'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from '@src/components/Header'
import { Dashboard } from '@src/pages/Admin'
// const Dashboard = lazyload("../pages/Admin", "Dashboard");
// const AdminHeader = lazyload("../components/Header", "AdminHeader");

export default function AdminLayout () {
  return (
        <>
            <AdminHeader />
            <StyledDiv className="grid gap-8 md:flex md:gap-12 h-screen">
                <Dashboard />
                <main>
                    <StyledContainer>
                        <Outlet />
                    </StyledContainer>
                </main>
            </StyledDiv>
        </>
  )
}
