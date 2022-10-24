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
    getStartData: (state) => {
      // get initial 8 countries
      state.countriesToDisplay = state.allCountries.slice(0, 8);
    },
  },
});

export const { setCountriesToStore, setStateOfFetching, getStartData } =
  countriesSlice.actions;

export default countriesSlice.reducer;
