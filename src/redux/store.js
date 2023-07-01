import { configureStore } from '@reduxjs/toolkit';
import showsSlice from './shows/showSlice';

export const store = configureStore({
  reducer: {
    shows: showsSlice,
  },
});

export default store;
