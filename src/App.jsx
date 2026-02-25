import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./components/globalStyles";
import MainContainer from "./components/Content";
import { useEffect, useState } from "react";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [foods, setFoods] = useState([]);
  const [filterFood, setFilterFood] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Effect run");
        const response = await fetch(BASE_URL);
        const data = await response.json();
        if (data) {
          setFoods(data);
          setFilterFood(data);
          console.log(data);
        }
      } catch (e) {
        console.error("Some error occured while fetching the API " + e.message);
      }
    }
    fetchData();
  }, []);

  //fitering foods on the basis of user search
  useEffect(() => {
    console.log(value);
    console.log(foods);
    console.log(filterFood);
    if (value.trim()) {
      let rest;
      rest = foods.filter((item) => {
        return item?.name?.toLowerCase().includes(value.trim().toLowerCase());
      });
      setFilterFood(rest);
    }
  }, [value]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header
          value={value}
          setValue={setValue}
          foods={foods}
          setFilterFood={setFilterFood}
          filterFood={filterFood}
        />
        <MainContainer data={filterFood} />
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  background-color: var(--orange-color);
  max-width: 1440px;
  margin: 0 auto;
  background-color: pink;
`;

export default App;
