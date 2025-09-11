// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

// Exporter les types pour une utilisation sûre dans les composants
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;