import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AdminLayout } from './layouts'
import { ChakraProvider } from '@chakra-ui/react'
import { ErrorBoundary } from 'react-error-boundary'
import RootLayout from '@layouts/root'
import Loader from '@components/Loader'
import token from './constants/token'
import Error from '@pages/Error'
import theme from '@styles/theme'
import { BooksByCategory } from "./pages/Category"
const EditBook = lazy(async () => await import("./pages/Admin/Book/EditBook"));
const OrderTable = lazy(async () => await import('@pages/Admin/AdminTable/tables/Order'))
const BookTable = lazy(async () => await import('@pages/Admin/AdminTable/tables/Book'))
const AuthorTable = lazy(async () => await import('@pages/Admin/AdminTable/tables/Author'))
const CategoryTable = lazy(async () => await import('@pages/Admin/AdminTable/tables/Category'))
const Login = lazy(async () => await import('@pages/Login'))
const Home = lazy(async () => await import('@pages/Home'))
const Services = lazy(async () => await import('@pages/Services'))
const About = lazy(async () => await import('@pages/About/About'))
const NotFound = lazy(async () => await import('@pages/NotFound'))
const SingleBook = lazy(async () => await import('@pages/SingleBook'))
// const BookList = lazy(async () => await import('@pages/Book/components/BookList'))
const Search = lazy(async () => await import('@pages/Search').then(module => ({ default: module.Search })))
const AddNewBook = lazy(async () => await import('@pages/Admin').then(module => ({ default: module.NewBook })))
const AddNewCategory = lazy(async () => await import('@pages/Admin').then(module => ({ default: module.NewCategory })))
const AddNewAuthor = lazy(async () => await import('@pages/Admin').then(module => ({ default: module.NewAuthor })))

const logError = (_error: Error, info: { componentStack: string }) => {
  // Do something with the error, e.g. log to an external API
}

function App() {
  return (
    <>
      <ChakraProvider theme={theme} >
        <Suspense fallback={<Loader />}>
          <ErrorBoundary FallbackComponent={Error} onError={logError} onReset={(details) => {
            // Reset the state of your app so the error doesn't happen again
          }}>
            <AnimatePresence mode="wait" key={crypto.randomUUID()}>
              <Routes>
                <Route element={<RootLayout />} >
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="services" element={<Services />} />
                  <Route path="/books/category/:id" element={<BooksByCategory />} />
                  <Route path="/books/:id" element={<SingleBook />} />
                  <Route path="/books/query/:query" element={<Search />} />
                </Route>
                <Route path="/auth/login" element={token ? <Navigate to="/admin" /> : <Login />} />
                <Route path="/admin" element={localStorage.getItem("readcityuz.token") ? <AdminLayout /> : <Navigate to="/auth/login" />}>
                  <Route path="order" element={<OrderTable />} />
                  <Route path="book" element={<BookTable />} />
                  <Route path="author" element={<AuthorTable />} />
                  <Route path="category" element={<CategoryTable />} />
                </Route>
                <Route path="/book/edit/:id" element={<EditBook />} />
                <Route path="/author/new" element={<AddNewAuthor />} />
                <Route path="/book/new" element={<AddNewBook />} />
                <Route path="/category/new" element={<AddNewCategory />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </ErrorBoundary>
        </Suspense>
      </ChakraProvider>
    </>
  )
}

export default App
