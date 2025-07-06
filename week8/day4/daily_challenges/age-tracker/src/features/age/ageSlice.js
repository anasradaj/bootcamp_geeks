import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ageUpAsync: Simule une augmentation d'âge avec un délai
export const ageUpAsync = createAsyncThunk(
  'age/ageUp',
  async (_, { rejectWithValue }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Pas de payload particulier ici, on résout simplement
        resolve();
      }, 1000);
    });
  }
);

// ageDownAsync: Simule une diminution d'âge avec un délai
export const ageDownAsync = createAsyncThunk(
  'age/ageDown',
  async (_, { rejectWithValue }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
);

// --- createSlice : Gérer l'état et les reducers ---
const ageSlice = createSlice({
  name: 'age',
  initialState: {
    age: 20,
    loading: false, // Indicateur de chargement (true pendant l'opération asynchrone)
  },
  reducers: {
  },
  // --- extraReducers : Gérer les actions générées par createAsyncThunk ---
  extraReducers: (builder) => {
    builder
      // Lorsque ageUpAsync est en attente (pending)
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      // Lorsque ageUpAsync réussit (fulfilled)
      .addCase(ageUpAsync.fulfilled, (state) => {
        state.age += 1;
        state.loading = false;
      })
      // Lorsque ageUpAsync échoue (rejected)
      .addCase(ageUpAsync.rejected, (state) => {
        state.loading = false;
      })
      // Lorsque ageDownAsync est en attente (pending)
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      // Lorsque ageDownAsync réussit (fulfilled)
      .addCase(ageDownAsync.fulfilled, (state) => {
        state.age -= 1;
        state.loading = false;
      })
      // Lorsque ageDownAsync échoue (rejected)
      .addCase(ageDownAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;