import { createSlice } from '@reduxjs/toolkit';

const initialDarkModeSlice = false;

const darkModeSlice = createSlice({
  name: 'dark mode',
  initialState: initialDarkModeSlice,
  reducers: {
    switch: (state) => !state,
  },
});

export default darkModeSlice;
export const darkModeActions = darkModeSlice.actions;
