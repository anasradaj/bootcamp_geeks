import { createSlice } from '@reduxjs/toolkit';


const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const initialState = {
  tasksByDay: {},
  selectedDay: getTodayDate(),
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, text } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push({
        id: Date.now(),
        text,
        completed: false,
      });
    },

    editTask: (state, action) => {
      const { day, taskId, newText } = action.payload;
      if (state.tasksByDay[day]) {
        const task = state.tasksByDay[day].find(task => task.id === taskId);
        if (task) {
          task.text = newText;
        }
      }
    },

    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      if (state.tasksByDay[day]) {
        state.tasksByDay[day] = state.tasksByDay[day].filter(task => task.id !== taskId);
      }
    },
    selectDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, selectDay } = plannerSlice.actions;

export default plannerSlice.reducer;