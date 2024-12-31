// src/features/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.text = text;
    },
  },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
