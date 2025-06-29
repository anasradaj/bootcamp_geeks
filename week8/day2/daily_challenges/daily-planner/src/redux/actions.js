// --- Types d'Actions ---
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SELECT_DAY = 'SELECT_DAY'; 
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_ACCENT_COLOR = 'SET_ACCENT_COLOR';

// --- Actions Creators ---

export const addTask = (day, text) => ({
  type: ADD_TASK,
  payload: {
    day,
    task: {
      id: Date.now(),
      text,
      completed: false, 
    },
  },
});

export const editTask = (day, taskId, newText) => ({
  type: EDIT_TASK,
  payload: {
    day,
    taskId,
    newText,
  },
});

export const deleteTask = (day, taskId) => ({
  type: DELETE_TASK,
  payload: { day, taskId },
});

export const selectDay = (day) => ({
  type: SELECT_DAY,
  payload: { day },
});

export const toggleTask = (day, taskId) => ({
  type: TOGGLE_TASK,
  payload: { day, taskId },
});

export const setAccentColor = (color) => ({
  type: SET_ACCENT_COLOR,
  payload: { color },
});