import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// createAsyncThunk : C'est le Thunk action creator
// Il gère la logique asynchrone (l'appel API) et dispatch les actions PENDING/FULFILLED/REJECTED.
export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId, { rejectWithValue }) => {
    try {
      // Appel à une API publique pour récupérer les données utilisateur
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      return response.data; // Ceci sera le payload de l'action 'fulfilled' si la requête réussit
    } catch (err) {
      // Si la requête échoue, utiliser rejectWithValue pour passer l'erreur au reducer
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// createSlice : Définit l'état initial et comment il change en réponse aux actions
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userData: null, // Les données de l'utilisateur une fois chargées
    status: 'idle', // État de la requête: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,    // Message d'erreur en cas d'échec
  },
  reducers: {
    // Ici, nous mettrions des reducers pour des actions synchrones si nous en avions.
    // Par exemple, pour vider les données utilisateur:
    resetUserData: (state) => {
      state.userData = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  // extraReducers : Gère les actions qui sont définies en dehors de ce slice (comme celles générées par createAsyncThunk)
  extraReducers: (builder) => {
    builder
      // Lorsque fetchUserById est en attente (PENDING)
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading'; // Met l'état à "chargement"
        state.error = null;       // Réinitialise toute erreur précédente
      })
      // Lorsque fetchUserById réussit (FULFILLED)
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Le chargement a réussi
        state.userData = action.payload; // Les données sont stockées (payload est ce que fetchUserById retourne)
      })
      // Lorsque fetchUserById échoue (REJECTED)
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed'; // Le chargement a échoué
        state.error = action.payload; // L'erreur est stockée (payload de rejectWithValue)
        state.userData = null;    // Efface les données utilisateur en cas d'échec
      });
  },
});

export const { resetUserData } = usersSlice.actions;

export default usersSlice.reducer;