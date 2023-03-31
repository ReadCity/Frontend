import { StyledButton } from "@src/styles/components";
import { StyledDiv } from "@src/styles/globals";
import { BookTypes as Book } from "@src/types/book";
import { useNavigate } from "react-router-dom";
import StyledBookItem, { StyledBookItemCover, StyledBookItemDescription, StyledBookItemLink, StyledBookItemPrice, StyledBookItemTitle } from "./bookitem.styles";

export default function BookItem({ description, img, price, title, id, author, pages, rating, release_year }: Book) {
  const navigate = useNavigate();
  function handleBookItemClick() {
    navigate(`/books/${id}`, {
      state: {
        description, price, title, id, author, pages, rating, release_year
      }
    })
  }
  return (
    <StyledBookItem>
      <StyledBookItemCover src={`https://ik.imagekit.io/khaitbek/Pictures/${id}.jpg`} placeholder={`https://ik.imagekit.io/khaitbek/Pictures/${id}.jpg?tr=bl-10`} width={300} height={400} loading="lazy" alt={img} />
      <StyledDiv className="flex justify-between gap-4 mt-8 mb-3">
        <StyledBookItemTitle>
          <StyledBookItemLink to={`/books/${id}`} state={
            {
              description, img, price, title, id, author, pages, rating, release_year
            }
          }>
            {title}
          </StyledBookItemLink>
        </StyledBookItemTitle>
        <StyledBookItemPrice>
          {price}$
        </StyledBookItemPrice>
      </StyledDiv>
      <StyledBookItemDescription>
        {description}
      </StyledBookItemDescription>
      <StyledButton onClick={() => handleBookItemClick()} colorScheme="outlined" variant="small">
        Order
      </StyledButton>
    </StyledBookItem>
  )
}
