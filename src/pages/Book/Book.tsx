
import CategoryList from '@src/components/CategoryList'
import CategorySection from '@src/components/CategorySection'
import ReusableHero from '@src/components/ReusableHero'
import { Outlet } from 'react-router-dom'

export default function Book () {
  return (
    <>
      <ReusableHero title="Books" description="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form." />
      <CategorySection />
      {/* <CategoryList /> */}
      <Outlet />
    </>
  )
}
