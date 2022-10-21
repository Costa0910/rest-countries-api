import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allCountries = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => "all",
    }),
  }),
});

export const { useGetAllCountriesQuery } = allCountries;
