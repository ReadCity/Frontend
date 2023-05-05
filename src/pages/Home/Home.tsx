import { Helmet } from 'react-helmet'
import BookList from '../Book/components/BookList'
import Filter from '@src/components/Filter/Filter'
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Readcity</title>
        <meta name="description" content="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form." />
      </Helmet>
      <Filter />
      <BookList />
    </>
  )
}
