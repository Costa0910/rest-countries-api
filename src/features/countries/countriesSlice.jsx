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

    addClickedCountry: (state, { payload }) => {
      const countryToAdd = state.allCountries.find(
        (country) => country.id === payload
      );

      const isAlreadyDisplayed = state.countriesToDisplay.find(
        (country) => country.id === payload
      );

      // avoid to display country more than once
      if (isAlreadyDisplayed) {
        state.countriesToDisplay = [...state.countriesToDisplay];
      } else {
        state.countriesToDisplay = [...state.countriesToDisplay, countryToAdd];
      }
    },
  },
});

export const {
  setCountriesToStore,
  setStateOfFetching,
  getStartData,
  filterByRegion,
  searchByName,
  addClickedCountry,
} = countriesSlice.actions;

export default countriesSlice.reducer;
