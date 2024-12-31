import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
