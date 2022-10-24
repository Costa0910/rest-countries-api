import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import Main, { Search, SectionCountries } from "./home-style";
import Input from "./input/Input";
import Filter from "./filter/Filter";
import Country from "./country/Country";
// import setupStore from "./SetupStore/SetupStore";

const Home = () => {
  const { countriesToDisplay, stateOfFetching } = useSelector(
    (state) => state.countriesData
  );

  const { isLoading, isSuccess, isError, error } = stateOfFetching;
  return (
    <Main>
      <Search>
        <Input />
        <Filter />
      </Search>
      {isLoading && <h1>Loading</h1>}
      {isError && <h1>Error, {error.toString()}</h1>}
      {isSuccess && (
        <SectionCountries>
          {countriesToDisplay.map((country) => (
            <Country key={country.id} country={country} />
          ))}
        </SectionCountries>
      )}
    </Main>
  );
};

export default Home;
