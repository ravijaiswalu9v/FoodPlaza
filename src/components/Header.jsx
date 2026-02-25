import styled from "styled-components";
import Input from "./input/Input";
import { useEffect, useState } from "react";
import filters from "../utils/filter";
import Button from "./button/Button";

const Header = ({ value, setValue, setFilterFood, foods }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleChange = (e) => {
    setValue(e.target.value);
    setActiveFilter("");
  };

  const handleClick = (foodType) => {
    setActiveFilter(foodType);
    setValue("");

    if (foodType.toLowerCase() === "all") {
      setFilterFood(foods);
      return;
    }

    let result = foods.filter(
      (food) => foodType.toLowerCase() === food.type.toLowerCase(),
    );
    console.log(result);
    setFilterFood(result);
    setActiveFilter(foodType);
  };

  return (
    <>
      <HeaderContainer>
        <nav>
          <p>
            F<Orange>oo</Orange>dy Z<Orange>o</Orange>ne
          </p>
          <Input
            onChange={(e) => handleChange(e)}
            value={value}
            type="text"
            placeholder="Search food.."
          />
        </nav>
        <div className="filter_container">
          {filters.map((filter) => {
            return (
              <Button
                key={filter.id}
                onClick={() => handleClick(filter?.type)}
                isActive={filter.type.toLowerCase() === activeFilter}
              >
                {filter.name}
              </Button>
            );
          })}
        </div>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  background-color: var(--gray-color);
  min-height: 8rem;
  padding: 1rem 2rem;

  nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  p {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white-color);
  }

  .filter_container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 570px) {
    .filter_container {
      justify-content: flex-start;
    }
  }
`;

const Orange = styled.span`
  color: var(--orange-color);
`;

export default Header;
