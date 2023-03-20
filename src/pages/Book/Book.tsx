import { lazy } from "react"
import { Outlet } from "react-router-dom";

const ReusableHero = lazy(() => import("@src/components/ReusableHero"));
const BookList = lazy(() => import("./components/BookList"));

export default function Book() {
  return (
    <>
      <ReusableHero title="Books" description="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form." />
      <Outlet />
    </>
  )
}
