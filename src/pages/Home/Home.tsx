import { Helmet } from 'react-helmet'
import BookList from '../Book/components/BookList'
import Hero from "@src/components/Hero"
import { CategoryBooks } from "@src/components/CategoryBooks"
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Readcity</title>
        <meta name="description" content="English books" />
      </Helmet>
      <Hero />
      <CategoryBooks categoryId={11} title="Special for kids" />
      <CategoryBooks categoryId={3} title="SAT" />
      <CategoryBooks categoryId={4} title="IELTS" />
      <CategoryBooks categoryId={9} title="Self-help" />
      <BookList title="All" />

    </>
  )
}
