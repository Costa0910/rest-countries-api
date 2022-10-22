import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // true should be darkMode and false lightMode
  witchMode: true,
  darkMode: {
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    input: "hsl(0, 0%, 100%)",
  },
  lightMode: {
    background: " hsl(0, 0%, 98%)",
    elements: "hsl(0, 0%, 100%)",
    input: "hsl(0, 0%, 52%)",
    text: "hsl(200, 15%, 8%)",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.witchMode = !state.witchMode;
    },
  },
});

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;
