import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialTasks = [
  { id: 't1', text: 'Finish the exercise', categoryId: 'cat1', completed: false, progress: 0 },
  { id: 't2', text: 'Send client emails', categoryId: 'cat2', completed: false, progress: 0 },
  { id: 't3', text: 'Research for project X', categoryId: 'cat1', completed: false, progress: 0 },
  { id: 't4', text: 'Respond to support tickets', categoryId: 'cat2', completed: true, progress: 100 },
  { id: 't5', text: 'Learn Redux Toolkit', categoryId: 'cat3', completed: false, progress: 0 },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: initialTasks,
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now().toString(),
        text: action.payload.text,
        categoryId: action.payload.categoryId,
        completed: false,
        progress: 0,
      });
    },
    editTask: (state, action) => {
      const { id, newText, newCategoryId } = action.payload;
      const existingTask = state.list.find(task => task.id === id);
      if (existingTask) {
        existingTask.text = newText;
        existingTask.categoryId = newCategoryId || existingTask.categoryId;
      }
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter(task => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const existingTask = state.list.find(task => task.id === action.payload);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
        existingTask.progress = existingTask.completed ? 100 : 0;
      }
    },
    updateTaskProgress: (state, action) => {
      const { id, progress } = action.payload;
      const existingTask = state.list.find(task => task.id === id);
      if (existingTask) {
        existingTask.progress = progress;
        if (progress === 100) existingTask.completed = true;
        else if (progress < 100) existingTask.completed = false;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion, updateTaskProgress } = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectAllTasks = (state) => state.tasks.list;

export const selectCompletedTasksCount = createSelector(
  [selectAllTasks],
  (tasks) => tasks.filter(task => task.completed).length
);
