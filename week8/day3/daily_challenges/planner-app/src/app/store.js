import { configureStore } from '@reduxjs/toolkit';
import plannerReducer from '../features/planner/plannerSlice';

const store = configureStore({
  reducer: {
    planner: plannerReducer,
  },
});

export default store;