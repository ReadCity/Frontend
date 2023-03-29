import { StyledApp } from "@styles/globals";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RootLayout from "@layouts/root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loader from "./components/Loader";
const Home = lazy(() => import("@pages/Home"));
const Services = lazy(() => import("@pages/Services"));
const About = lazy(() => import("@pages/About"));
const Book = lazy(() => import("@pages/Book"));
const NotFound = lazy(() => import("@pages/NotFound"));
const SingleBook = lazy(() => import("@pages/SingleBook"));
const BookList = lazy(() => import("@pages/Book/components/BookList"));
const AddNewBook = lazy(() => import("@pages/Admin").then(module => ({ default: module.NewBook })));
const AddNewAuthor = lazy(() => import("@pages/Admin").then(module => ({ default: module.NewAuthor })));
function App() {

  const queryClient = new QueryClient();

  return (
    <StyledApp>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait" key={crypto.randomUUID()}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route element={<RootLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="books" element={<Book />}>
                  <Route index element={<BookList />} />
                </Route>
                <Route path="/books/:id" element={<SingleBook />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/admin">
                <Route path="authors/new" element={<AddNewAuthor />} />
                <Route path="books/new" element={<AddNewBook />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </AnimatePresence>
      </Suspense>
    </StyledApp>
  )
}

export default App
