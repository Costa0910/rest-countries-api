import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCountries: [],
  countriesToDisplay: [],
  stateOfFetching: {
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: null,
  },
};

export const countriesSlice = createSlice({
  name: "countriesData",
  initialState,
  reducers: {
    setCountriesToStore: (state, { payload }) => {
      console.log("accepted");
      state.allCountries = payload;
    },
    setStateOfFetching: (state, { payload }) => {
      state.stateOfFetching = payload;
    },
  },
});

export const { setCountriesToStore, setStateOfFetching } =
  countriesSlice.actions;

export default countriesSlice.reducer;
