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
    filterByRegion: (state, { payload }) => {
      const region = state.allCountries.filter((country) => {
        return country.region.toLowerCase() === payload;
      });
      state.countriesToDisplay = region;
    },

    searchByName: (state, { payload }) => {
      const matchCountries = state.allCountries.filter((country) =>
        country.name.toLowerCase().includes(payload)
      );

      state.countriesToDisplay = matchCountries;
    },
  },
});

export const {
  setCountriesToStore,
  setStateOfFetching,
  getStartData,
  filterByRegion,
  searchByName,
} = countriesSlice.actions;

export default countriesSlice.reducer;
