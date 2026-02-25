import styled from "styled-components";
import Card from "./Card";
import { BASE_URL } from "../App";

const Content = ({ data }) => {
  console.log("content" + data);
  return (
    <MainContainer>
      <Container>
        {data?.map(({ id, name, price, text, image, type }) => (
          <Card
            key={id}
            name={name}
            price={price}
            text={text}
            image={`${BASE_URL}${image}`}
            type={type}
          />
        ))}
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-image: url("/img/backgroundImage.png");
  background-color: #ffffff;
  background-blend-mode: black;
  min-height: calc(100vh - 8rem);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: var(--white-color);
  padding: 2rem 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
    z-index: 0; /* Places the overlay behind the content (if any) */
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1000;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 1.25rem;
  column-gap: 2rem;
`;

export default Content;
