import { BookTypes as Book } from "@src/types/book";
import { StyledSection, StyledContainer, StyledDiv } from "@styles/globals"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import BookItem from "../BookItem";
import StyledBookList from "./booklist.styles";

export default function BookList() {
  const { data: fakeBooks, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async (): Promise<Book[]> => {
      return await (await axios.get("https://api.npoint.io/77a459d56809ff27e9a0")).data
    }
  });
  return (
    <StyledSection style={{
      backgroundColor: "#fff"
    }}>
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
          <Books books={fakeBooks as Book[]}/>
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