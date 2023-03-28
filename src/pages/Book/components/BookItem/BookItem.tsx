import { StyledButton } from "@src/styles/components";
import { StyledDiv } from "@src/styles/globals";
import { BookTypes as Book } from "@src/types/book";
import { useNavigate } from "react-router-dom";
import StyledBookItem, { StyledBookItemCover, StyledBookItemDescription, StyledBookItemLink, StyledBookItemPrice, StyledBookItemTitle } from "./bookitem.styles";

export default function BookItem({ desc, img, price, title, id, author, pages, rating, release_year }: Book) {
  const navigate = useNavigate();
  function handleBookItemClick() {
    navigate(`/books/${id}`, {
      state: {
        desc, img, price, title, id, author, pages, rating, release_year
      }
    })
  }
  return (
    <StyledBookItem>
      <StyledBookItemCover src={img} width={300} height={400} loading="lazy" alt={img} />
      <StyledDiv className="flex justify-between items-center gap-4 mb-3">
        <StyledBookItemTitle>
          <StyledBookItemLink to={`/books/${id}`} state={
            {
              desc, img, price, title, id, author, pages, rating, release_year
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
        {desc}
      </StyledBookItemDescription>
      <StyledButton onClick={() => handleBookItemClick()} colorScheme="outlined" variant="small">
        Order
      </StyledButton>
    </StyledBookItem>
  )
}
