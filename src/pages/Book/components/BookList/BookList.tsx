import { BookTypes as Book } from "@src/types/book";
import { StyledSection, StyledContainer } from "@styles/globals"
import axios from "axios";
import { useEffect, useState } from "react";
import BookItem from "../BookItem";
import StyledBookList from "./booklist.styles";

const books: Book[] = [
  {
    img: "https://assets.asaxiy.uz/product/items/desktop/ca4b33532855080dfa79cf8a925d146d2022070212255616781FD0Ihf0S5g.png.webp",
    title: "Atomic Habits",
    desc: "James Clear: Atomic Habits. An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    price: 10,
    pages: 306,
    author: "James Clear",
    release_year: 2019,
    rating: 4.8,
    id: 1
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    title: "Pride and Prejudice",
    desc: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work 'her own darling child' and its vivacious heroine, Elizabeth Bennet, 'as delightful a creature as ever appeared in print.' The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
    price: 10,
    pages: 306,
    author: "Jane Austen, Anna Quindlen (Introduction)",
    release_year: 1813,
    rating: 4.28,
    id: 2
  },
  {
    title: "Five Feet Apart",
    author: "Rachael Lippincott",
    desc: "In this moving story two teens fall in love with just one minor complication—they can’t get within five feet of each other without risking their lives.",
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529358577i/39939417.jpg",
    pages: 288,
    price: 10,
    rating: 4.19,
    release_year: 2018
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    desc: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg",
    pages: 313,
    price: 10,
    rating: 4.15,
    release_year: 2012
  },
  {
    title: "Rework",
    author: "Jason Fried,David Heinemeier Hansson",
    desc: "Most business books give you the same old advice: Write a business plan, study the competition, seek investors, yadda yadda. If you're looking for a book like that, put this one back on the shelf.Rework shows you a better, faster, easier way to succeed in business.Read it and you'll know why plans are actually harmful, why you don't need outside investors, and why you're better off ignoring the competition. The truth is, you need less than you think. You don't need to be a workaholic.You don't need to staff up. You don't need to waste time on paperwork or meetings.You don't even need an office. Those are all just excuses. ",
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391275636i/6732019.jpg",
    pages: 279,
    price: 15,
    rating: 3.97,
    release_year: 2010
  }
];

export default function BookList() {
  const [fakeBooks, setFakeBooks] = useState<Book[]>([]);
  useEffect(() => {
    async function getFakeBooks() {
      const fakeBooksFromApi = await (await axios.get("https://api.npoint.io/77a459d56809ff27e9a0")).data;
      setFakeBooks(fakeBooksFromApi);
    };
    getFakeBooks();
  }, []);
  return (
    <StyledSection style={{
      backgroundColor: "#fff"
    }}>
      <StyledContainer>
        <StyledBookList>
          {fakeBooks?.map(book => (
            <BookItem key={book.id} {...book} />
          ))}
        </StyledBookList>
      </StyledContainer>
    </StyledSection>
  )
}
