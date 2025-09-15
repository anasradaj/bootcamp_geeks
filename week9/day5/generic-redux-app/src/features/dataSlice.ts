import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; 
import type { DataState, Recipe } from '../types/types';
import { fetchRecipesAPI } from '../api/api';

const initialState: DataState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk<Recipe[], string>(
  'data/fetchData',
  async (searchTerm) => {
    const recipes = await fetchRecipesAPI(searchTerm);
    return recipes;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default dataSlice.reducer;
