import { BookTypes as Book } from "@src/types/book";
import { StyledSection, StyledContainer, StyledDiv } from "@styles/globals"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ContentLoader from "react-content-loader";
import BookItem from "../BookItem";
import StyledBookList from "./booklist.styles";

export default function BookList() {
  const { data: fakeBooks, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async (): Promise<Book[]> => {
      return await (await axios.get("https://api.npoint.io/e70c496c84bd0388b007")).data.books
    }
  });
  console.log(fakeBooks);

  return (
    <StyledSection style={{ background: "hsl(0,0%,100%,0.5)" }}>
      <StyledContainer>
        {isLoading && <>
          <StyledDiv className="grid md:grid-cols-2 lg:grid-cols-4  gap-x-8 gap-y-16">
            <ContentLoader backgroundColor="#ccc" />
            <ContentLoader backgroundColor="#ccc" />
            <ContentLoader backgroundColor="#ccc" />
            <ContentLoader backgroundColor="#ccc" />
          </StyledDiv>
        </>}
        <StyledBookList>
          <Books books={fakeBooks as Book[]} />
        </StyledBookList>
      </StyledContainer>
    </StyledSection>
  )
}

function Books({ books }: { books: Book[] }) {

  return (
    <>
      {books?.map(book => <BookItem key={book.id} {...book} />)}
    </>
  )
}