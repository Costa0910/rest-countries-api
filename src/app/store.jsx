import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { allCountries } from "../features/api/apiSlice";
import themeReducer from "../features/theme/themeSlice";
import countriesReducer from "../features/countries/countriesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countriesData: countriesReducer,
    [allCountries.reducerPath]: allCountries.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allCountries.middleware),
});

setupListeners(store.dispatch);
