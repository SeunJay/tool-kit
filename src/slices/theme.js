import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialState },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creator
export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
