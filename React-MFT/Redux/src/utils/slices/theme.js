import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textColor: "#000000",
  borderColor: "#666666",
  bgColor: "#ffffff",
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDark: (state) => {
      state.theme = "dark";
      state.textColor = "#ffffff";
      state.borderColor = "#666666";
      state.bgColor = "#000000";
    },
    setLight: (state) => {
      state.textColor = "#000000";
      state.borderColor = "#666666";
      state.bgColor = "#ffffff";
      state.theme = "light";
    },
    setSolarized: (state) => {
      state.textColor = "#710193";
      state.borderColor = "#de0a26";
      state.bgColor = "#ffff79";
      state.theme = "Solarized";
    },
    setBorderColor: (state, action) => {
      state.borderColor = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
});

export const {
  setDark,
  setLight,
  setSolarized,
  setBorderColor,
  setBgColor,
  setTextColor,
} = themeSlice.actions;
export default themeSlice.reducer;
