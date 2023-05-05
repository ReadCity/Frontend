import { Helmet } from 'react-helmet'
import BookList from '../Book/components/BookList'
import Hero from "@src/components/Hero"
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Readcity</title>
        <meta name="description" content="English books" />
      </Helmet>
      
      <Hero />
      <BookList />
    </>
  )
}
