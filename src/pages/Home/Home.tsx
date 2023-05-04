import { Helmet } from 'react-helmet'
import BookList from '../Book/components/BookList'
import Filter from '@src/components/Filter/Filter'
import { CategoryCarousel } from "@src/components/CategorySlider"
export default function Home() {
  return (
    <>
      <Helmet>
        <title>readcity.uz</title>
        <meta name="description" content="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form." />
      </Helmet>
      <Filter />
      <BookList />
    </>
  )
}
