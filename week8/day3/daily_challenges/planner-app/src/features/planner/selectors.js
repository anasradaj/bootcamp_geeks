import { createSelector } from 'reselect';

export const selectSelectedDay = (state) => state.planner.selectedDay;
export const selectTasksByDay = (state) => state.planner.tasksByDay;

export const selectTasksForSelectedDay = createSelector(
  [selectSelectedDay, selectTasksByDay],
  (selectedDay, tasksByDay) => tasksByDay[selectedDay] || []
);
