import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.tvmaze.com/shows';

const initialState = {
  Shows: [],
  isLoading: true,
  categories: [],
};

export const fetchAllShows = createAsyncThunk('getshows/', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books');
  }
});

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllShows.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllShows.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Shows = action.payload.map((show) => ({
          id: show.id,
          name: show.name,
          category: show.genres,
          summary: show.summary,
          image: show.image,
          rating: show.rating,
          official: show.officialSite,
          language: show.language,
        }));
        const genresSet = new Set();
        action.payload.forEach((show) => {
          show.genres.forEach((genre) => {
            genresSet.add(genre);
          });
        });
        state.categories = Array.from(genresSet);
      })
      .addCase(fetchAllShows.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default showsSlice.reducer;
