import { StyledApp } from "@styles/globals";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RootLayout from "@layouts/root";
const Home = lazy(() => import("@pages/Home"));
const Services = lazy(() => import("@pages/Services"));
const About = lazy(() => import("@pages/About"));
const Book = lazy(() => import("@pages/Book"));
const SingleBook = lazy(() => import("@pages/SingleBook"));
const BookList = lazy(() => import("@pages/Book/components/BookList"));

function App() {

  return (
    <StyledApp>
      <Suspense>
        <AnimatePresence mode="wait">
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="books" element={<Book />}>
                <Route index element={<BookList />} />
              </Route>
              <Route path="/book/:id" element={<SingleBook />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </StyledApp>
  )
}

export default App
