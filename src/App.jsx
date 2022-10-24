import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppStyle from "./app-style";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCountriesQuery } from "./features/api/apiSlice";
import { useEffect } from "react";
import {
  getStartData,
  setCountriesToStore,
  setStateOfFetching,
} from "../src/features/countries/countriesSlice";
import organizeData from "./formatData";

function App() {
  // Fetch data
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllCountriesQuery();

  // get current colors
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // update states of store when fetching is done
    if (isSuccess || isError) {
      const organizedData = organizeData(data);
      dispatch(setStateOfFetching({ isLoading, isSuccess, isError, error }));
      dispatch(setCountriesToStore(organizedData));
      dispatch(getStartData());
      console.log("done");
    }
  }, [isLoading]);

  return (
    <AppStyle
      mode={witchMode ? { ...darkMode, fill: 1 } : { ...lightMode, fill: 0 }}
    >
      <Navbar />
      <Outlet />
    </AppStyle>
  );
}

export default App;
