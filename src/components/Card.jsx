import Button from "./button/Button";
import styled from "styled-components";

const Card = ({ name, price, text, image, type }) => {
  return (
    <CardContainer>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="data-container">
        <h2>{name}</h2>
        <p>{text}</p>
        <Button variant="small">${price.toFixed(2)}</Button>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 320px;
  max-height: 167px;
  background-color: #ffffff27;
  backdrop-filter: blur(8px);

  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  position: relative;
  gap: 1rem;

  .data-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .data-container h2 {
    font-size: 1rem;
    font-weight: 600;
  }

  .data-container p {
    font-size: 0.75rem;
    font-weight: 400;
    /* max-height: 59px;
    text-overflow: ellipsis; */

    display: -webkit-box;
    -webkit-line-clamp: 3; /* Show exactly 3 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .data-container button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

export default Card;
