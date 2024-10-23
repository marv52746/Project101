// src/core/services/slices/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeName: "light-theme", // Default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.themeName = action.payload; // Set the theme based on the payload
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
