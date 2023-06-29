import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from './slices/darkModeSlice';

const store = configureStore({
  reducer: { darkMode: darkModeSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
