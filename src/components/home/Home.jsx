// import { useGetAllCountriesQuery } from "../../features/api/apiSlice";
// import { useSelector } from "react-redux";
import Main, { Search, SectionCountries } from "./home-style";
import Input from "./input/Input";
import Filter from "./filter/Filter";

const Home = () => {
  // const { witchMode, darkMode, lightMode } = useSelector(
  //   (state) => state.theme
  // );
  // const {
  //   data: countries,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetAllCountriesQuery();
  // console.log(isLoading);
  // console.log(isSuccess);
  // console.log(isError);
  // console.log(error);
  // console.log(countries);
  return (
    <Main>
      <Search>
        <Input />
        <Filter />
      </Search>
      <SectionCountries>all countries</SectionCountries>
    </Main>
  );
};

export default Home;
